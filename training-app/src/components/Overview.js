import React from 'react';

const Overview = (props) => {
    const { taskArray } = props;

    return (
        <ul>
            {taskArray.map((task) => {
                return <li key={task.id}>{task.name}</li>;
            })}
        </ul>
    )
}

export default Overview;