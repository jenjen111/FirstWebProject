window.onload = () => {
    //const div = document.getElementsByTagName('div');
    const div = document.getElementById('btnEvt');
    const boradContainer = document.getElementById('boardContainer');
    console.log(div);
    div.addEventListener('click', () => {
        alert('클릭 이벤트 테스트');
    });
    fetch('http://localhost:5000/').then(
        async response => {
            console.log(response)
            const data = await response.json()
            data.data.forEach(obj => {
                const div = document.createElement("div");
                div.append(`${obj.title}`);
                div.addEventListener('click', ()=> {
                    alert(obj.id);
                })
                boradContainer.append(div);
            })
        }
        );   
}