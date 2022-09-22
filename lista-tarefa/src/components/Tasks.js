import React from 'react';

import Task from './Task';

const Tasks = ({ tasks }) => {
    return (
        <>
            {tasks.map((task) => (
                <Tasks />
            ))};
        </>
    );
};

export default Tasks;