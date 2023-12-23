import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import {
  setProvinceId,
  setRegencyId,
  setDistrictId,
  setVillageId,
} from '../actions';

const TestSelect = () => {
  const dispatch = useDispatch();
  const { provinceId, regencyId, districtId,villageId } = useSelector(
    (state) => state
  );

  const [provinces, setProvinces] = useState([]);
  const [regencies, setRegencies] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [villages, setVillages] = useState([]);

  useEffect(() => {
    const fetchProvinces = async () => {
      try {
        const response = await axios.get(
          'https://api.kerjoo.com/api/v1/reference/provinces'
        );
        setProvinces(response.data);
      } catch (error) {
        console.error('Error fetching provinces:', error);
      }
    };

    fetchProvinces();
  }, []);

  useEffect(() => {
    const fetchRegencies = async () => {
      if (provinceId) {
        try {
          const response = await axios.get(
            `https://api.kerjoo.com/api/v1/reference/regencies_of/${provinceId}`
          );
          setRegencies(response.data);
        } catch (error) {
          console.error('Error fetching regencies:', error);
        }
      }
    };

    fetchRegencies();
  }, [provinceId]);

  useEffect(() => {
    const fetchDistricts = async () => {
      if (regencyId) {
        try {
          const response = await axios.get(
            `https://api.kerjoo.com/api/v1/reference/districts_of/${regencyId}`
          );
          setDistricts(response.data);
        } catch (error) {
          console.error('Error fetching districts:', error);
        }
      }
    };

    fetchDistricts();
  }, [regencyId]);

  useEffect(() => {
    const fetchVillages = async () => {
      if (districtId) {
        try {
          const response = await axios.get(
            `https://api.kerjoo.com/api/v1/reference/villages_of/${districtId}`
          );
          setVillages(response.data);
        } catch (error) {
          console.error('Error fetching villages:', error);
        }
      }
    };

    fetchVillages();
  }, [districtId]);

  return (
    <div>
      <div>
        <label>Provinsi:</label>
        <select
          value={provinceId || ''}
          onChange={(e) => dispatch(setProvinceId(e.target.value))}
        >
          <option value="">Select Provinsi</option>
          {provinces.map((province) => (
            <option key={province.id} value={province.id}>
              {province.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Kab/Kota:</label>
        <select
          value={regencyId || ''}
          onChange={(e) => dispatch(setRegencyId(e.target.value))}
        >
          <option value="">Select Kab/Kota</option>
          {regencies.map((regency) => (
            <option key={regency.id} value={regency.id}>
              {regency.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Kecamatan:</label>
        <select
          value={districtId || ''}
          onChange={(e) => dispatch(setDistrictId(e.target.value))}
        >
          <option value="">Select Kecamatan</option>
          {districts.map((district) => (
            <option key={district.id} value={district.id}>
              {district.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Desa:</label>
        <select
          value={villageId || ''}
          onChange={(e) => dispatch(setVillageId(e.target.value))}
        >
          <option value="">Select Desa</option>
          {villages.map((village) => (
            <option key={village.id} value={village.id}>
              {village.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default TestSelect;
