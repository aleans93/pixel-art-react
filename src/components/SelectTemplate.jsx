import React from 'react';
import { connect } from 'react-redux';
import { resetGrid } from '../store/actions/actionCreators';

const SelectTemplate = ({ resetGridDispatch }) => (
  <div className="select-template">
    <div className="title">Select template</div>
    <div className="buttons">
      <button type="button">
        <div data-tooltip="Bracelets">
          <img src="/img/bracelets.png" />
        </div>
      </button>
      <button type="button">
        <div data-tooltip="Earrings">
          <img src="/img/earrings.png" />
        </div>
      </button>
      <button type="button">
        <div data-tooltip="Necklace">
          <img src="/img/necklace.png" />
        </div>
      </button>
    </div>
  </div>
);

const mapDispatchToProps = dispatch => ({
  //
});

const SelectTemplateContainer = connect(
  null,
  mapDispatchToProps
)(SelectTemplate);
export default SelectTemplateContainer;
