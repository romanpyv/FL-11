let email = prompt('Enter email:'), emailMinLen = 6, passMinLen = 5;
if(!email){
    alert('Canceled.');
} else {
    if(email.length < emailMinLen) {
        alert('I don\'t know any emails having name length less than 6 symbols.');
    } else if(email !== 'admin@gmail.com' && email !== 'user@gmail.com'){
        alert('I don\'t know you.')
    } else {
        let pass = prompt('Enter password:');
        if(!pass) {
            alert('Canceled');
        }
        if(email === 'admin@gmail.com' && pass !== 'AdminPass'||
            email === 'user@gmail.com' && pass !== 'UserPass'){
            alert('Wrong password.');
        } else{
            if(!confirm('Do you want to change your password?')){
                alert('You have failed the change.');
            } else {
                let pass = prompt('Enter password:');
                if(!pass) {
                    alert('Canceled');
                } else {
                    if (email === 'admin@gmail.com' && pass !== 'AdminPass' ||
                        email === 'user@gmail.com' && pass !== 'UserPass') {
                        alert('Wrong password.');
                    } else {
                        let newPass = prompt('Enter new password:');
                        if (!newPass || newPass.length < passMinLen) {
                            alert('It’s too short password. Sorry');
                        } else {
                            let newPassSecond = prompt('Enter the password again:');
                            if (!newPassSecond || newPassSecond !== newPass) {
                                alert('You wrote the wrong password');
                            } else {
                                alert('You have successfully changed your password.');
                            }
                        }
                    }
                }
            }
        }
    }
}