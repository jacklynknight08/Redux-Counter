import { connect } from 'react-redux';
import counter from './Counter';

// Map Redux state to component props
// This function subscribes to all store updates and gets called when anything in the store changes
// Returns an object that contains store data to transmit as props to a component
function mapStateToProps(state) {
    return {
        countValue: state.count
    }
}

// Action
var increaseAction = { type: "increase" };
var decreaseAction = { type: "decrease" };

// Map Redux actions to component props
// Return an object containing the name of the two functions the component can call to dispatch a change to the store
function mapDispatchToProps(dispatch) {
    return {
        increaseCount: function() {
            return dispatch(increaseAction);
        },
        decreaseCount: function() {
            return dispatch(decreaseAction);
        }
    }
}

// HOC
// Take these two functions as arguments and pass all of it into the Counter component
var connectedComponent = connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);

export default connectedComponent;