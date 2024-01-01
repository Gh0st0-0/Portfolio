import React from 'react';

const Resume = () => {
    const HandleDownload = async () => {
        try{
            //debugger;
            // File Path
            const resumePath = process.env.PUBLIC_URL + `/Resume/#SaumyaGarg.pdf`;
            //const resumePath = `/src/Assets/Resume/#SaumyaGarg.pdf`;
            //console.log(resumePath);

            // Fetch the file content
            const response = await fetch(resumePath);
            const blob = await response.blob();
            // Create a HTML anchor element <a>
            const link = document.createElement('a');

            // Set the href attribute of the local file path
            //link.href = resumePath;
            const blobUrl = URL.createObjectURL(blob);
            link.href = blobUrl;

            // Set download Attribute
            link.download = '#SaumyaGarg.pdf';

            // Append the link to the document
            document.body.appendChild(link);

            // Trigger is set as click, to download the file
            link.click();

            // Remove the link from document
            document.body.removeChild(link);
            URL.removeObjectURL(blob);
        } catch(error){
            console.error("Error:" + error);
        }
    };

    return (
        <button onClick={HandleDownload} className={'btn btn-primary'}>
            Download Resume
        </button>
    )
}

export default Resume;