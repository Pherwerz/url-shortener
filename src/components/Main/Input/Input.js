import React, { Component } from 'react';

import classes from './Input.module.scss';
import Button from '../../Button/Button';
import Aux from '../../../hoc/Aux';
import Axios from 'axios';
import Result from './Result/Result';

class input extends Component {
  state = {
    input: '',
    data: []
  };

  fetchData = url => {
    Axios.post('https://rel.ink/api/links/', { url })
      .then(res => {
        const newData = this.state.data;

        newData.push({
          ...res.data,
          link: `https://rel.ink/${res.data.hashid}`
        });

        this.setState({
          data: newData
        });

        console.log(this.state.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  saveInput = e => {
    this.setState({ input: e.target.value });
  };

  render() {
    return (
      <Aux>
        <section className={classes.Input}>
          <form
            className={classes.Input__form}
            onSubmit={e => {
              e.preventDefault();
              this.fetchData(this.state.input);
            }}
          >
            <input
              type="text"
              placeholder="Shorten a link here..."
              className={classes.Input__text}
              onChange={this.saveInput}
              value={this.state.input}
              required
            />

            <Button name="Shorten It!" />
          </form>
        </section>

        <Result datas={this.state.data} />
      </Aux>
    );
  }
}

export default input;
