import classess from './MyButton.module.css';
  
const MyButton = ({children, ...props}) => {
return (
<button {...props} className={classess.myBtn}>
  {children}
</button>  
)
};

export default MyButton