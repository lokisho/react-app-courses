import React from 'react';
import { connect } from 'react-redux';
import * as courseActions from '../../redux/actions/courseActions';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';

class CoursesPage extends React.Component {
  state = {
    course: {
      title: '',
    },
  };

  handleChange = (event) => {
    const course = { ...this.state.course, title: event.target.value };
    this.setState({ course });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // step 1: Dispatch action.
    // we will refactor this with the mapDispatchToProps Function
    //this.props.dispatch(courseActions.createCourse(this.state.course));
    this.props.actions.createCourse(this.state.course);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Courses</h2>
        <h3>Add Course</h3>
        <input
          type="text"
          onChange={this.handleChange.bind(this)}
          value={this.state.course.title}
        />
        <input type="submit" value="Save" />
        {this.props.courses.map((course) => (
          <div key={course.title}>{course.title}</div>
        ))}
      </form>
    );
  }
}

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  // Refactoring after implementing mapDispatchToProps.
  //dispatch: PropTypes.func.isRequired,
  // Refactor with bindActionsCreator
  // createCourse: PropTypes.func.isRequired,
  actions: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  // step4. The react is called.
  return {
    courses: state.courses,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    // Refactoring with bindActionCreators
    // createCourse: (course) => dispatch(courseActions.createCourse(course)),
    actions: bindActionCreators(courseActions, dispatch),
  };
}

// Another option is to return an object something like:
// const mapDispatchToProps = {
//  createCourse = courseActions.createCourse
// }

// the name of fn passed to connect are arbitrary but commonly used. Could be even anonymous.

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
