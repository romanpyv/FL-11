const button = document.getElementById('load-button');

export default function hideLoadButton(state) {
    if (state.showed === state.data.length) {
        button.style.display = 'none';
    } else {
        button.style.display = 'block';
    }
}
