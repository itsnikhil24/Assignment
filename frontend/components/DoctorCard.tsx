'use client';

import Image from 'next/image';
import React from 'react';
import { Doctor } from '../types/doctor';
import { Button } from '../components/ui/button';

interface DoctorCardProps {
  doctor: Doctor;
}

const DoctorCard: React.FC<DoctorCardProps> = ({ doctor }) => {
  return (
    <div className="doctor-card border rounded-lg overflow-hidden bg-white mb-4">
      <div className="flex flex-col md:flex-row">
        <div className="p-4 flex md:flex-col items-center justify-center md:w-1/5">
          <div className="w-24 h-24 relative overflow-hidden rounded-full border-2 border-gray-200">
            <Image
              src={doctor.profileImage || "https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-859.jpg?ga=GA1.1.320490888.1746343949&semt=ais_hybrid&w=740"}
              alt={doctor.name}
              fill
              className="object-cover rounded-full"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-859.jpg?ga=GA1.1.320490888.1746343949&semt=ais_hybrid&w=740";
              }}
              sizes="96px"
            />
          </div>
        </div>

        <div className="p-4 md:flex-1">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start">
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-bold text-gray-900">{doctor.name}</h3>
                <svg className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {doctor.rating && (
                  <div className="bg-orange-100 text-orange-800 text-xs font-semibold px-2 py-0.5 rounded">
                    DOCTOR OF THE HOUR
                  </div>
                )}
              </div>
              <p className="text-sm text-gray-600 mt-1">{doctor.specialization}</p>
              <div className="flex items-center mt-2 text-sm text-primary font-medium">
                <span>{doctor.experience} YEARS</span>
                <span className="mx-2">•</span>
                <span>{Array.isArray(doctor.specialization) ? doctor.specialization.join(", ") : doctor.specialization}</span>
              </div>
            </div>

            <div className="mt-4 md:mt-0 flex flex-col items-end">
              <p className="text-xl font-bold">₹{doctor.fee}</p>
            </div>
          </div>

          <div className="mt-3 text-sm text-gray-600">
            <p>{doctor.clinic}</p>
          </div>

          <div className="mt-4 md:flex md:justify-between md:items-center">
            <div className="mb-2 md:mb-0">
              {doctor.availableIn ? (
                <p className="text-sm text-green-600">
                  Available in {doctor.availableIn}
                </p>
              ) : (
                <div className="h-5"></div>
              )}
            </div>

            <Button className="w-full md:w-auto bg-blue-500 text-white hover:bg-blue-600 py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors duration-200">
  Consult Online
</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
