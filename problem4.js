var fileName = "#exp.mp4";

if (fileName[0] === '#') {
    console.log('Store');
} 
else if (fileName.slice(-4) === '.pdf') {

    console.log('Store');
} 

else if (fileName.slice(-5) === '.docx') {

    console.log('Store');
}

else {
    console.log('Delete');
}