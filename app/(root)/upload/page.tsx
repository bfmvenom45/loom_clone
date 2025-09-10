"use client";

import FileInput from "@/components/FileInput"
import FormField from "@/components/FormField"
import { MAX_THUMBNAIL_SIZE, MAX_VIDEO_SIZE } from "@/constants";
import { useFileInput } from "@/lib/hooks/useFileInput";
import { ChangeEvent, FormEvent, useState } from "react"


const Page = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        visibility: 'public',
    });
    const [error, setError] = useState("");

    const video = useFileInput(MAX_VIDEO_SIZE); // 500 MB
    const thumbnail = useFileInput(MAX_THUMBNAIL_SIZE); // 5 MB

    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;

        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            if (!video.file || !thumbnail.file) {
                setError('Please select video and thumbnail files');
                return;
            }
            if (!formData.title || !formData.description) {
                setError('Please fill all required fields');
                return;
            }
            // Add your upload logic here

        } catch (error) {
            console.log("Error uploading form ", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="wrapper-md upload-page">
            <h1>
                Upload video
            </h1>
            {error && <div className="error-field">{error}</div>}

            <form className="rounded-40 shadow-10  gap-6 w-ful flex flex-col px-5 py-7.5"
                onSubmit={handleSubmit}>
                <FormField
                    id="title"
                    label="Title"
                    placeholder="Add title"
                    value={formData.title}
                    onChange={handleInputChange}
                />
                <FormField
                    id="description"
                    label="Description"
                    placeholder="Add description video"
                    value={formData.description}
                    as="textarea"
                    onChange={handleInputChange}
                />
                <FileInput
                    id='video'
                    label="Video File"
                    accept='video/*'
                    file={video.file}
                    previewUrl={video.previewUrl}
                    inputRef={video.inputRef}
                    onChange={video.handlerFileChange}
                    onReset={video.resetFile}
                    type='video'
                />

                <FileInput
                    id='thumbnail'
                    label="Thumbnail Image"
                    accept='image/*'
                    file={thumbnail.file}
                    previewUrl={thumbnail.previewUrl}
                    inputRef={thumbnail.inputRef}
                    onChange={thumbnail.handlerFileChange}
                    onReset={thumbnail.resetFile}
                    type='image'
                />

                <FormField
                    id="visibility"
                    label="Visibility"
                    value={formData.visibility}
                    as="select"
                    options={[
                        { value: 'public', label: 'Public' },
                        { value: 'private', label: 'Private' },

                    ]}
                    onChange={handleInputChange}
                />
                <button type="submit" disabled={isSubmitting} className="submit-button">
                    {isSubmitting ? 'Uploading...' : 'Upload Video'}
                </button>
            </form>
        </div>
    )
}

export default Page