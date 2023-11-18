import { Alert } from "react-bootstrap"

const Message = ({ varient, children}) => {
  return (
    <Alert varient={varient}> 
    {children} </Alert>
  )
}

export default Message
