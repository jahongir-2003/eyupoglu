import React from 'react';

const Contact = () => {
    function MyForm() {
        return (
            <form>
                <label>Enter your name:
                    <input type="text" />
                </label>
            </form>
        )
    }
    console.log(MyForm);
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xl-12">

                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;