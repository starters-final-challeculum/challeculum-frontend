import React, { useState } from 'react';
import { faUpload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import tw from 'tailwind-styled-components';

const Card = tw.div`
  bg-emerald-500 rounded-lg p-4 h-80 w-60 text-white flex flex-col justify-between
`;

const Title = tw.h2`
  text-lg font-medium mb-1
`;

const Text = tw.p`
  text-sm
`;

const Button = tw.button`
  bg-white text-emerald-500 font-medium py-1 px-4 rounded-md
`;

const UploadArea = tw.div`
  flex items-center justify-center
`;

const UploadIcon = tw(FontAwesomeIcon)`
  text-white text-2xl mr-2
`;

const FileInput = tw.input`
  hidden
`;

function GroundAssignment({ mission, ground }) {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const checkIsTodayMission = (start, end) => {
    const today = new Date();
    if (today >= new Date(start) && today <= new Date(end)) {
      return true;
    }
    return false;
  };

  const handleSubmit = async () => {
    if (!file) {
      return;
    }

    // 파일 업로드 처리
    const formData = new FormData();
    formData.append('file', file);

    const { data: fileUrl } = await axios.post(
      'https://example.com/upload',
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
    );

    // 제출 처리
    const { data: submission } = await axios.post(
      'https://example.com/submissions',
      { assignmentId: mission.id, fileUrl },
    );

    console.log(submission);
  };

  return (
    <Card>
      <div>
        <Title>
          Assignment
        </Title>
        <Text>
          {mission.startAt}
          {' '}
          -
          {mission.endAt}
        </Text>
        <Text>
          {mission.assignment}
        </Text>
      </div>
      { (ground.status === 'ongoing' && checkIsTodayMission(mission.startAt, mission.endAt)) && (
        <>
          <UploadArea>
            {file ? (
              <Text>{file.name}</Text>
            ) : (
              <button>
                <UploadIcon icon={faUpload} />
                <span>Upload file</span>
              </button>
            )}
            <FileInput type="file" onChange={handleFileChange} />
          </UploadArea>
          <Button onClick={handleSubmit}>Submit</Button>
        </>
      )}
    </Card>
  );
}

export default GroundAssignment;
