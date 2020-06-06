import { connect } from "react-redux";
import { AddMessage  } from "../components/AddMessage";
import { addMessage as action } from "../actions";
import { Dispatch } from "redux";

const mapDispatchToProps = (dispatch: Dispatch) => ({
  submit: (message: string, author: string) => dispatch(action(message, author))
})

export default connect(() => ({}), mapDispatchToProps)(AddMessage)