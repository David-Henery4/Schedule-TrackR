import React from 'react'


const DayWeekForm = () => {
    
    return (
    <form className="dw-form">
        {/*TIME*/}
        <span className="dw-form__time">
            <label htmlFor="dw-time" className="dw-form__time--label">
                What time?
            </label>
            <input id="dw-time" name="dw-time" type="text" />
        </span>
        {/*TITLE*/}
        <span className="dw-form__title">
            <label htmlFor="dw-title">Title</label>
            <input name="dw-title" id="dw-title" type="text" />
        </span>
        {/*TEXT*/}
        <span className="dw-form__text">
            <label htmlFor="dw-text">Activity</label>
            <textarea name="dw-text" id="dw-text"></textarea>
        </span>
    </form>
    );
}

export default DayWeekForm