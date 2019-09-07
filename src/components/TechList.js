import React, {Component} from 'react';
import TechItem from '../components/TechItem';

class TechList extends Component {

  state = {
    newTech: "",
    techs: []
  }

  componentDidMount(){
    const techs = localStorage.getItem('techs');

    if(!!techs){
      this.setState({ techs: JSON.parse(techs)} );
    }
  }

  componentDidUpdate(_, prevState){
    if(prevState.techs !== this.state.techs){
      localStorage.setItem('techs', JSON.stringify(this.state.techs))
    }
  }

  handleInputChange = (e) => 
    this.setState({newTech: e.target.value})

  handleSubmit = e => {
    e.preventDefault()
    const {techs, newTech} = this.state;

    if(!!newTech){
      this.setState({ 
        techs: [...techs, newTech],
        newTech: ""
      });
    }
  } 
  
  handleRemoveTech = (tech) =>{
    const {techs} = this.state;

    this.setState({techs: techs.filter(t => t !== tech)});
  }

  render(){
    const { techs, newTech } = this.state;

    return(
      <>
        <ul className="techs">
          {techs.map((tech) => (
            <TechItem key={tech} tech={tech} onDelete={() => this.handleRemoveTech(tech)}/>
          ))}
        </ul>
          <form onSubmit={this.handleSubmit}>
            <input 
              className="new-tech"
              type="text" 
              onChange={this.handleInputChange} 
              placeholder="New tech"
              value={newTech}
            />
            <button type="submit" className="btn-new-tech">
            <i className="fa fa-floppy-o" aria-hidden="true"></i>
            Salvar
            </button>
          </form>
      </>
    );
  }
}

export default TechList;