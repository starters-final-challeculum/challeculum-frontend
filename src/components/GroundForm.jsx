import React from 'react';
import tw from 'tailwind-styled-components';
import CreateList from './Mission/CreateList';

function GroundForm() {
  // const [title, setTitle] = useState('');
  // const [category, setCategory] = useState('');
  // const [information, setInformation] = useState('');
  //
  // const onSubmitHandler = (e) => {
  //   e.preventDefault();
  //   setTitle('');
  // };
  return (

    <div className="px-4 py-3 mb-8 bg-mWhite rounded-lg">

      <HalfSelectBox>
        <span>카테고리 선택</span>
        <select className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none">
          <option>IT</option>
          <option>외국어</option>
          <option>자격증</option>
          <option>취미</option>
        </select>
      </HalfSelectBox>

      <HalfSelectBox>
        <span>강의 선택</span>
        <select className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none">
          <option>Java</option>
          <option>Spanish</option>
          <option>JavaScript</option>
          <option>React</option>
        </select>
      </HalfSelectBox>
      <SelectBox>
        <label htmlFor="title" className="text-xs font-semibold px-1">Title</label>
        <input
          type="title"
          className="w-full pl-2.5 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none"
          placeholder="제목을 입력해주세요!"
        />
      </SelectBox>
      <br />
      <HalfSelectBox>
        <span>강의 선택</span>
        <input
          type="number"
          className="w-full pl-2.5 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none"
          placeholder="참여인원"
        />
      </HalfSelectBox>

      <HalfSelectBox>
        <span>예치금 선택</span>
        <select className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none">
          <option>1000</option>
          <option>2000</option>
          <option>3000</option>
          <option>4000</option>
          <option>5000</option>
        </select>
      </HalfSelectBox>

      <HalfSelectBox>
        <span>시작 날짜</span>
        <input
          type="date"
          className="w-full pl-2.5 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none"
        />
      </HalfSelectBox>
      <HalfSelectBox>
        <span>종료 날짜</span>
        <input
          type="date"
          className="w-full pl-2.5 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none"
        />
      </HalfSelectBox>

      <SelectBox>
        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">
          강의정보
        </label>
        <textarea
          id="message"
          rows="4"
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
          placeholder="강의와 그라운드에 대한 정보를 입력해주세요!"
        />

      </SelectBox>
      <CreateList />

      <button type="submit" className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        등록
      </button>
    </div>
  );
}

const HalfSelectBox = tw.div`
grid gap-6 mb-8 md:grid-cols-2
`;
const SelectBox = tw.div`
relative w-full lg:max-w-sm
`;
export default GroundForm;
