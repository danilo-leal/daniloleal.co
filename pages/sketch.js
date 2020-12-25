import React from 'react';
import AppBar from '../components/atoms/AppBar';
import BreadCrumb from '../components/atoms/BreadCrumb';
import CaseHeader from '../components/templates/CaseHeader';
import MainLink from '../components/atoms/MainLink';

export default function Sketch() {
  return (
    <div className="p-2 m-auto">
      <div className="p-8 border border-solid border-gray-300 flex space-x-6">
        <div className="flex items-start pt-2">
          <div className="bg-blue-500 rounded-full h-6 w-6 flex items-center justify-center">
            <p className="text-center text-tiny font-bold text-white">1</p>
          </div>
        </div>
        <div className="flex flex-col space-y-2">
          <p className="text-xl">Av. Paulista, 100</p>
          <p className="text-gray-700">Jardim Paulista</p>
          <a href="" className="flex space-x-2 items-center">
            <p className="text-blue-500 font-medium">Ir para lá</p>
            <svg
              class="w-4 h-4 stroke-current text-blue-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="3"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </a>
        </div>
      </div>
      <div className="p-8 border border-solid border-gray-300 flex space-x-6">
        <div className="flex items-start pt-2">
          <div className="bg-blue-500 rounded-full h-6 w-6 flex items-center justify-center">
            <p className="text-center text-tiny font-bold text-white">1</p>
          </div>
        </div>
        <div className="flex flex-col space-y-2">
          <div className="bg-gray-400 rounded-full text-white font-medium text-center w-3/5">
            Já tentou
          </div>
          <p className="text-xl">Av. Paulista, 100</p>
          <p className="text-gray-700">Jardim Paulista</p>
          <a href="" className="flex space-x-2 items-center">
            <p className="text-blue-500 font-medium">Ir para lá</p>
            <svg
              class="w-4 h-4 stroke-current text-blue-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="3"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </a>
        </div>
      </div>
      <div className="p-8 border border-solid border-gray-300 flex flex-col space-y-6">
        <div className="flex space-x-4">
          <div className="flex items-start pt-2">
            <div className="bg-red-500 rounded-full h-6 w-6 flex items-center justify-center">
              <p className="text-center text-tiny font-bold text-white">1</p>
            </div>
          </div>
          <div className="flex flex-col space-y-2">
            <div className="bg-gray-400 rounded-full text-white font-medium text-center w-3/5">
              Já tentou
            </div>
            <p className="text-xl">Av. Paulista, 100</p>
            <p className="text-gray-700">Jardim Paulista</p>
            <a href="" className="flex space-x-2 items-center">
              <p className="text-blue-500 font-medium">Ir para lá</p>
              <svg
                class="w-4 h-4 stroke-current text-blue-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </a>
          </div>
        </div>
        <div className="bg-gray-100 rounded-md w-full p-5 flex flex-row justify-between">
          <div className="flex space-x-4 items-center">
            <svg
              class="w-5 h-5 stroke-current text-red-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="3"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              ></path>
            </svg>
            <p className="text-gray-800">Sincronia falhou</p>
          </div>
          <a href="" className="font-medium text-red-500">
            Atualizar
          </a>
        </div>
      </div>
    </div>
  );
}

// className="grid sm:grid-cols-2 gap-6 sm:px-2 p-4"
