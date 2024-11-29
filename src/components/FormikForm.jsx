import { Formik } from 'formik';
import styles from './FormikForm.module.css'
import {useToDoStore} from '../store/todo-store'


function FormikForm() {
    const addToDo = useToDoStore((state) => state.addToList);
    const toDoList = useToDoStore((state) => state.toDolist);
    const arr = [];

    function add(arr) {
      addToDo(arr)
      console.log(toDoList)
    }
    return (
        <div>
     <h1>TO DO list!</h1>
     <Formik
       initialValues={{ title: '', task: '' }}
       validate={values => {
         const errors = {};
         if (!values.title) {
           errors.title = 'Required';
         } else if (!/.{5,}/i.test(values.title)) {
           errors.title = 'Too short title. Should be more than 5 letters';
         } else if (!values.task){
            errors.task = 'Required';
         } else if (!/.{5,}/i.test(values.task)){
            errors.task = 'Too short title. Should be more than 5 letters';
         }
         return errors;
       }}
       onSubmit={(values, { resetForm }) => {
         arr.push(values)
         add(arr)
         resetForm()
       }}
     >
       {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         /* and other goodies */
       }) => (
         <form onSubmit={handleSubmit} className={styles.form}>
           <label htmlFor="title">title</label>
           <input
             type="text"
             id='title'
             name="title"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.title}
           />
           {errors.title && touched.title && errors.title}
           <label htmlFor="task">task</label>
           <textarea
             type="text"
             id='task'
             name="task"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.task}
           />
           {errors.task && touched.task && errors.task}
           <button type="submit">
             Submit
           </button>
         </form>
       )}
     </Formik>
   </div>
    )
}

export default FormikForm