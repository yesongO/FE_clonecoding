import React from "react";

const MiddleBody = () => {
    return(
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: '130px',
            // fontFamily: "'Poppins', sans-serif",
            fontFamily: "'Inter', sans-serif",
        }}>
            <h1 style={{fontSize: '44px', fontWeight: '300', marginBottom: '0px'}}>Album example</h1>
            <p style={{
                textAlign: 'center',
                lineHeight: '1.4',
                fontSize: '21px',
                fontWeight: '300',
                color: 'gray',
                marginTop: '10px',
                marginBottom: '30px',
            }}>Something short and leading about the collection below—its contents,<br />
            the creator, etc. Make it short and sweet, but not too short so folks<br />
            don’t simply skip over it entirely.</p>
            <div style={{marginBottom: '120px'}}>
                <button style={{
                    border: 'none',
                    backgroundColor: '#b56576',
                    color: '#fff',
                    fontSize: '18px',
                    padding: '11px 13px',
                    borderRadius: '5px',
                    margin: '3px',
                }}>Main call to action</button>
                <button style={{
                    border: 'none',
                    backgroundColor: '#8b8c89',
                    color: '#fff',
                    fontSize: '18px',
                    padding: '11px 13px',
                    borderRadius: '5px',
                    margin: '3px',
                }}>Secondary action</button>
            </div>
        </div>
    );
}

export default MiddleBody;