import { FileUploader } from "@aws-amplify/ui-react-storage";
import '@aws-amplify/ui-react/styles.css';

export default function UploadPicture() {

    return (
        <div>
            <h1>Picture Upload</h1>
            <FileUploader
                acceptedFileTypes={['image/*']}
                path="public/"
                maxFileCount={1}
                isResumable
            />


        </div>
    )
}