use Colegio;
CREATE TABLE IF NOT EXISTS tipos_sangre (
    id_tipo_sangre INT AUTO_INCREMENT PRIMARY KEY,
    sangre VARCHAR(10) NOT NULL
);

CREATE TABLE IF NOT EXISTS estudiantes (
    id_estudiante INT AUTO_INCREMENT PRIMARY KEY,
    carne VARCHAR(10) NOT NULL,
    nombres VARCHAR(100) NOT NULL,
    apellidos VARCHAR(100) NOT NULL,
    direccion VARCHAR(200),
    telefono VARCHAR(15),
    correo_electronico VARCHAR(100),
    id_tipo_sangre INT,
    fecha_nacimiento DATE,
    FOREIGN KEY (id_tipo_sangre) REFERENCES tipos_sangre(id_tipo_sangre)
);


-- Inserciones en la tabla tipos_sangre
INSERT INTO tipos_sangre (id_tipo_sangre, sangre) VALUES
(1, 'A+'),
(2, 'B+'),
(3, 'O+'),
(4, 'AB+'),
(5, 'A-'),
(6, 'O-');

-- Inserciones en la tabla estudiantes
INSERT INTO estudiantes (id_estudiante, carne, nombres, apellidos, direccion, telefono, correo_electronico, id_tipo_sangre, fecha_nacimiento) VALUES
(1, '2021001', 'Juan', 'Perez', 'Calle 123', '123456789', 'juan@example.com', 1, '2000-01-15'),
(2, '2021002', 'María', 'Gomez', 'Avenida 456', '987654321', 'maria@example.com', 2, '2001-05-20'),
(3, '2021003', 'Carlos', 'Rodriguez', 'Plaza 789', '555555555', 'carlos@example.com', 3, '2002-10-10'),
(4, '2021004', 'Ana', 'Lopez', 'Calle 789', '444444444', 'ana@example.com', 4, '2000-03-01'),
(5, '2021005', 'Pedro', 'Martinez', 'Avenida 123', '777777777', 'pedro@example.com', 5, '2003-07-08'),
(6, '2021006', 'Laura', 'Ramirez', 'Calle 456', '666666666', 'laura@example.com', 6, '2002-12-25');
