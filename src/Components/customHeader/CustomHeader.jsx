import PropTypes from 'prop-types';
import { ChatBubbleLeftRightIcon, PhoneIcon } from "@heroicons/react/24/solid";



const CustomHeader = ({ chat }) => {

 
  

  return (
    <div className="chat-header">
        <div className="flexbetween">
            <ChatBubbleLeftRightIcon className="icon-chat" />
            <h3 className="header-text">{chat.title ? chat.title : 'Default Title'}</h3>
        </div>
        <div className="flexbetween">
            <PhoneIcon className="icon-phone" />
            <p className="header-text"> {chat.description} </p>
            
        </div>
    </div>
  )
}

CustomHeader.propTypes = {
  chat: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
  }),
};

export default CustomHeader