import React from "react";

const PhotoCard = ({title = "사진 제목", imgURL, content = "본문"}) => {
    return(
        <div style={{
            border: '1.4px solid #dee2e6',
            borderRadius: '4px',
            overflow: 'hidden',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        }}>
            <img src={imgURL} alt={title} style={{
                width: '100%',
                height: '240px',
                objectFit: 'cover',
                borderTopLeftRadius: '4px',
                borderTopRightRadius: '4px',
            }} />
            <p style={{
                padding: '2px 22px',
                fontSize: '19px',
                lineHeight: '1.3',
                color: '#343a40'
            }}>{content}</p>
            <div style={{
                padding: '0px 22px',
                marginBottom: '10px',
                display: 'flex',
                justifyContent: 'space-between',
            }}>
                <div>
                    <button style={{
                        backgroundColor: 'white',
                        border: '1.4px solid #adb5bd',
                        padding: '8px 13px',
                        borderTopLeftRadius: '4px',
                        borderBottomLeftRadius: '4px',
                        fontSize: '15px',
                        color: '#6c757d'
                        }}>View</button>
                    <button style={{
                        backgroundColor: 'white',
                        border: '1.4px solid #adb5bd',
                        borderLeft: 'none', // 중앙 선 하나 제거!
                        padding: '8px 13px',
                        borderTopRightRadius: '4px',
                        borderBottomRightRadius: '4px',
                        fontSize: '15px',
                        color: '#6c757d'
                    }}>Edit</button>
                </div>
                <p style={{color: '#6c757d'}}>9 mins</p>
            </div>
        </div>
    );
}

export default PhotoCard;