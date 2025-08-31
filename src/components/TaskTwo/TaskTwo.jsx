import React, { Component } from "react";
import './TaskTwo.css';

class TextTwo extends Component {
  state = {
    checked: {
      selectAll: false,
      fruits: { Apple: false, Banana: false, Orange: false },
      vegetables: { Carrot: false, Broccoli: false, Potato: false },
    },
  };

  handleSelectAll = (e) => {
    const value = e.target.checked;
    this.setState((prevState) => ({
      checked: {
        selectAll: value,
        fruits: Object.fromEntries(
          Object.keys(prevState.checked.fruits).map((k) => [k, value])
        ),
        vegetables: Object.fromEntries(
          Object.keys(prevState.checked.vegetables).map((k) => [k, value])
        ),
      },
    }));
  };

  handleCategory = (category, value) => {
    this.setState((prevState) => ({
      checked: {
        ...prevState.checked,
        selectAll: false,
        [category]: Object.fromEntries(
          Object.keys(prevState.checked[category]).map((k) => [k, value])
        ),
      },
    }));
  };

  handleItem = (category, item, value) => {
    this.setState((prevState) => {
      const updatedCategory = {
        ...prevState.checked[category],
        [item]: value,
      };
      const allChecked = Object.values(updatedCategory).every((v) => v);

      return {
        checked: {
          ...prevState.checked,
          [category]: updatedCategory,
          selectAll:
            allChecked &&
            Object.values(
              category === "fruits"
                ? prevState.checked.vegetables
                : prevState.checked.fruits
            ).every((v) => v),
        },
      };
    });
  };

  render() {
    const { checked } = this.state;

    return (
      <div className="checkbox-container">
        <h2>Nested Checkbox</h2>

        <label>
          <input
            type="checkbox"
            checked={checked.selectAll}
            onChange={this.handleSelectAll}
          />
          Select All
        </label>

        {/* Fruits */}
        <div className="category">
          <label>
            <input
              type="checkbox"
              checked={Object.values(checked.fruits).every((v) => v)}
              onChange={(e) =>
                this.handleCategory("fruits", e.target.checked)
              }
            />
            Fruits
          </label>
          <div className="items">
            {Object.keys(checked.fruits).map((item) => (
              <label key={item}>
                <input
                  type="checkbox"
                  checked={checked.fruits[item]}
                  onChange={(e) =>
                    this.handleItem("fruits", item, e.target.checked)
                  }
                />
                {item}
              </label>
            ))}
          </div>
        </div>

        {/* Vegetables */}
        <div className="category">
          <label>
            <input
              type="checkbox"
              checked={Object.values(checked.vegetables).every((v) => v)}
              onChange={(e) =>
                this.handleCategory("vegetables", e.target.checked)
              }
            />
            Vegetables
          </label>
          <div className="items">
            {Object.keys(checked.vegetables).map((item) => (
              <label key={item}>
                <input
                  type="checkbox"
                  checked={checked.vegetables[item]}
                  onChange={(e) =>
                    this.handleItem("vegetables", item, e.target.checked)
                  }
                />
                {item}
              </label>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default TextTwo;
