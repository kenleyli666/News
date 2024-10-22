/* Start progress-bar */
document.addEventListener('DOMContentLoaded', () => {
    const progressbarinner = document.querySelector('.progress-bar-inner');

    window.addEventListener('scroll', () => {
        let h = document.documentElement;

        let st = h.scrollTop || document.boby.scrollTop;
        let sh = h.scrollHeight || document.boby.scrollHeight;
        // let sh = document.body.scrollHeight;
        
        let percent = st / (sh - h.clientHeight) * 100;
        let roundPecent = Math.round(percent);

        // 當滾動條在或接近頂部時，將百分比設置為0%
        if (roundPecent <= 10) {
            roundPecent = 0;
        }   
        // 當滾動條到達或接近底部時，將百分比設置為100%
        if (roundPecent >= 90) {
            roundPecent = 100;
        } 

        progressbarinner.style.width = roundPecent + '%';
        progressbarinner.innerText = roundPecent + '%';
    });
});
/* End progress-bar */