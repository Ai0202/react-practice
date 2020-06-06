import { connect } from "react-redux";
import { Sidebar } from "../components/Sidebar";

const mapStateToProps = (state: any) => {
  return {
    users: state.users
  }
}

export default connect(mapStateToProps)(Sidebar)