import React from 'react';
import { connect } from 'react-redux';
import { resetGrid } from '../store/actions/actionCreators';
import bracelets from '../assets/bracelets.png';
import earrings from '../assets/earrings.png';
import necklace from '../assets/necklace.png';
import loadFromTemplate from '../utils/loadFromTemplate';

const SelectTemplate = ({ dispatch }) => (
  <div className="select-template">
    <div className="title">Select template</div>
    <div className="buttons">
      <button type="button" onClick={() => loadFromTemplate(1, dispatch)}>
        <div data-tooltip="Bracelets">
          <img src={bracelets} />
        </div>
      </button>
      <button type="button" onClick={() => loadFromTemplate(2, dispatch)}>
        <div data-tooltip="Earrings">
          <img src={earrings} />
        </div>
      </button>
      <button type="button" onClick={() => loadFromTemplate(3, dispatch)}>
        <div data-tooltip="Necklace">
          <img src={necklace} />
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
