import React, { useState } from 'react';

const Dropdown = (props) => {

    const [on, setToggleBool] = useState(false);

    const getStateAndHelper = () => {
        return {
            on, // on: on
            toggle: setToggle,
            togglerProps: {
                onClick: setToggle
            }
        }
    }

    const setToggle = (e) => {
        e.stopPropagation();
        setToggleBool(!on);
    }

    return props.children(getStateAndHelper());
}

const PropsGetters = () => {

    return (
        <div style={{ textAlign: 'center' }}>
            <Dropdown>
                {
                    ({ on, toggle, togglerProps }) => (
                        <div className="dropdown">
                            <button type="button" {...togglerProps}>
                                {on ? "Hide" : "Show"}
                            </button>
                            {on ? (
                                <div>Now you see me!</div>
                            ) : null}
                        </div>
                    )
                }
            </Dropdown>
        </div>
    );
}

export { PropsGetters };