const cardFooter = document.getElementById('cardFooter');
const cardFooterShareBtn = cardFooter.querySelector('#shareBtn');

const cardShareFooter = document.getElementById('cardShareFooter');
const cardShareFooterBtn = cardShareFooter.querySelector('#shareBtn');
const shareTooltip = document.getElementById('shareTooltip');


 window.addEventListener('resize', (e) => {
   if(window.innerWidth <= 768){
     shareTooltip.style.display = 'none';
     cardFooterShareBtn.src = "./images/share-dark.png";
   }else{
     cardShareFooter.style.display = 'none';
     cardFooter.style.display = 'flex';
   }
 })

cardFooterShareBtn.addEventListener('click', (e) => {
  if(window.innerWidth <= 768){
    cardFooter.style.display = 'none';
    cardShareFooter.style.display = 'flex'
  }else{
    cardFooterShareBtn.src = './images/share-white.png';
    const cardFooterShareDiv = cardFooterShareBtn.closest('div');
    cardFooterShareDiv.classList.toggle('active');
    if(cardFooterShareDiv.classList.contains('active')){
     cardFooterShareBtn.src = "./images/share-white.png";
    }else{
      cardFooterShareBtn.src = "./images/share-dark.png";
      shareTooltip.style.display = 'flex';
    }
  }
});

cardShareFooterBtn.addEventListener('click', (e) => {
  if(window.innerWidth <= 768){
    cardShareFooter.style.display = 'none';
    cardFooter.style.display = 'flex'
  };
})

console.log(cardFooterShareBtn);
console.log(cardShareFooterBtn);