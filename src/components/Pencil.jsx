import React from 'react';
import { connect } from 'react-redux';
import { switchTool } from '../store/actions/actionCreators';
import { PENCIL } from '../store/reducers/drawingToolStates';

const Pencil = ({ pencilOn, switchPencil }) => (
  <button
    type="button"
    aria-label="Pencil Tool"
    className={`pencil${pencilOn ? ' selected' : ''}`}
    onClick={switchPencil}
  />
);

const mapStateToProps = state => ({
  pencilOn: state.present.get('drawingTool') === PENCIL
});

const switchPencilAction = switchTool(PENCIL);
const mapDispatchToProps = dispatch => ({
  switchPencil: () => dispatch(switchPencilAction)
});

const PencilContainer = connect(mapStateToProps, mapDispatchToProps)(Pencil);
export default PencilContainer;
