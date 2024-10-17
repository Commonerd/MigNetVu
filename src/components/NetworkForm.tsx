import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import axios from "axios";

const NetworkForm: React.FC = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    type: "migrant",
    name: "",
    nationality: "",
    ethnicity: "",
    latitude: "",
    longitude: "",
    migrationYear: "",
    // Add more fields as needed
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post("/api/network", formData);
      alert(t("networkAddedSuccess"));
      setFormData({
        type: "migrant",
        name: "",
        nationality: "",
        ethnicity: "",
        latitude: "",
        longitude: "",
        migrationYear: "",
      });
    } catch (error) {
      alert(t("networkAddError"));
    }
  };

  return (
    <div className="container mx-auto mt-8 p-4">
      <h2 className="text-2xl font-bold mb-4">{t("addNewNetwork")}</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="type" className="block">
            {t("entityType")}
          </label>
          <select
            id="type"
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          >
            <option value="migrant">{t("migrant")}</option>
            <option value="organization">{t("organization")}</option>
          </select>
        </div>
        <div>
          <label htmlFor="name" className="block">
            {t("name")}
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
        </div>
        {formData.type === "migrant" && (
          <>
            <div>
              <label htmlFor="nationality" className="block">
                {t("nationality")}
              </label>
              <input
                type="text"
                id="nationality"
                name="nationality"
                value={formData.nationality}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label htmlFor="ethnicity" className="block">
                {t("ethnicity")}
              </label>
              <input
                type="text"
                id="ethnicity"
                name="ethnicity"
                value={formData.ethnicity}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded"
              />
            </div>
          </>
        )}
        <div>
          <label htmlFor="latitude" className="block">
            {t("latitude")}
          </label>
          <input
            type="number"
            id="latitude"
            name="latitude"
            value={formData.latitude}
            onChange={handleChange}
            required
            step="any"
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label htmlFor="longitude" className="block">
            {t("longitude")}
          </label>
          <input
            type="number"
            id="longitude"
            name="longitude"
            value={formData.longitude}
            onChange={handleChange}
            required
            step="any"
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label htmlFor="migrationYear" className="block">
            {formData.type === "migrant"
              ? t("migrationYear")
              : t("foundationYear")}
          </label>
          <input
            type="number"
            id="migrationYear"
            name="migrationYear"
            value={formData.migrationYear}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          {t("submitNetwork")}
        </button>
      </form>
    </div>
  );
};

export default NetworkForm;
