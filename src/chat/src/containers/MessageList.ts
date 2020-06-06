import { connect } from "react-redux";
import { MessageList } from "../components/MessageList";

const mapStateToProps = (state: any) => {
  return {
    messages: state.messages
  }
}

export default connect(mapStateToProps)(MessageList)