
import React from 'react';
import { Button } from '../components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select"

interface DoctorListHeaderProps {
  totalCount: number;
  onSortChange: (value: string) => void;
}

const DoctorListHeader: React.FC<DoctorListHeaderProps> = ({ totalCount, onSortChange }) => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-1">
        Consult General Physicians Online - Internal Medicine Specialists
      </h1>
      <p className="text-gray-600 mb-4">({totalCount} doctors)</p>

      <div className="flex justify-end mb-4">
        <div className="w-4">
          {/* <Select onValueChange={onSortChange} defaultValue="relevance">
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="relevance">Relevance</SelectItem>
              <SelectItem value="experience-high">Experience (High to Low)</SelectItem>
              <SelectItem value="experience-low">Experience (Low to High)</SelectItem>
              <SelectItem value="fees-high">Fees (High to Low)</SelectItem>
              <SelectItem value="fees-low">Fees (Low to High)</SelectItem>
            </SelectContent>
          </Select> */}
        </div>
      </div>
    </div>
  );
};

export default DoctorListHeader;