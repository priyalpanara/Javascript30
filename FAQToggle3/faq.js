        const question=document.querySelector('#ques');
        const answer=document.querySelector('#ans');
        question.addEventListener('click',DisplayAnswer);
        answer.style.display='none';
        function DisplayAnswer(){
            if(answer.style.display=='none'){
                answer.style.display='block';
            }
            else{
                answer.style.display='none';
            }

        }
    