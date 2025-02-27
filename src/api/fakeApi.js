const patients = [
    { id: 1, name: "Ramesh Wagh", age: 30, disease: "Flu", contact: "123-456-7890", address: "123 Main St, City, Country", admissionDate: "2024-01-10", history: "No known allergies." },
    { id: 2, name: "Shahid Kapoor", age: 25, disease: "Cold", contact: "987-654-3210", address: "456 Elm St, City, Country", admissionDate: "2024-01-15", history: "Asthma." },
    { id: 3, name: "Hritik Roshan", age: 40, disease: "Headache", contact: "456-789-1230", address: "789 Pine St, City, Country", admissionDate: "2024-01-20", history: "No known allergies." },
    { id: 4, name: "Ranvijay", age: 50, disease: "Back Pain", contact: "321-654-9870", address: "123 Oak St, City, Country", admissionDate: "2024-02-05", history: "High blood pressure." },
    { id: 5, name: "Sujit Bare", age: 35, disease: "Fever", contact: "654-321-9870", address: "456 Maple St, City, Country", admissionDate: "2024-02-10", history: "No known allergies." },

];


export const fetchPatients = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(patients);
        }, 1000);
    });
};

export const fetchPatientById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const patient = patients.find(p => p.id === id);
            resolve(patient);
        }, 1000);
    });
};
