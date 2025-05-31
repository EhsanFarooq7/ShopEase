import React from 'react';

function CartIcon({ count }) {
    return (
        <div style={styles.icon}>
            🛒 <span style={styles.count}>{count}</span>
        </div>
    );
}

const styles = {
    icon: {
        position: 'fixed',
        top: '20px',
        right: '20px',
        backgroundColor: '#333',
        color: 'white',
        padding: '10px 15px',
        borderRadius: '50px',
        cursor: 'pointer',
    },
    count: {
        marginLeft: '5px',
        fontWeight: 'bold',
    }
};

export default CartIcon;
