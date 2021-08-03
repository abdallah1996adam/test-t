import React from "react";
import { bookingService } from "../services";
import Button from "../components/Button";
import Select from "react-dropdown-select";

import { withRouter } from "react-router-dom";

class UpdateBooking extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      bookingId: null,
      userId:null,
      motif: null,
      date: null,
    };
  }

  async componentDidMount() {
    //         try {
    //             const response = await bookingService.getBook();
    //            console.log(response)
    //            this.setState({date:response.data.date,motif:response.data.motif , bookingId:response.data.bookingId});
    //         } catch (e) {
    // console.log(e)        }

    const bookingId = this.props.match.params.id;
    const userId = this.props.match.params.userid.slice(7,8);
    this.setState({userId})
    this.setState({ bookingId });
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleClick = async (e) => {
    const { date, motif,bookingId ,userId } = this.state;
 
    try {
      const response = await bookingService.updateBooking(
        date,
        motif,
        bookingId,
        userId
      );
      console.log(response);
      //localStorage.setItem('token', response.data.token);
      this.props.history.push("/admin");
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <div>
        <h2> Modifier un creneau </h2>

        <label for="motif">Motif</label>
        <input
          type="text"
          name="motif"
          value={this.state.motif}
          onChange={this.handleChange}
        />

        <label for="date">Date</label>
        <input
          type="text"
          name="date"
          value={this.state.date}
          onChange={this.handleChange}
        />

        <Button
          size="small"
          value="Enregistrer"
          handleClick={this.handleClick}
        />
      </div>
    );
  }
}
export default withRouter(UpdateBooking);
