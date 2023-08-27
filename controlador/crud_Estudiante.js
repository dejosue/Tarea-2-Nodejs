import db from '../modelo/db_conectar.js'

export const informacionEstudiantes = async (req, res) => {
  try {
    let result = await db({ e: 'Colegio.estudiantes' })
      .innerJoin({ ts: 'Colegio.tipos_sangre' },
        'e.id_tipo_sangre', 'ts.id_tipo_sangre'
      )
    console.log(result);
    res.status(200).render('../vista/Estudiante/index', { estudiantes: result });
  } catch (error) {
    console.log(error);
    res.status(500).json()
  }
}

export const formularioAddEstudiante = async (req, res) => {
  try {
    let result = await db('Colegio.tipos_sangre')
    res.status(200).render('../vista/Estudiante/add', { tiposDeSangre: result });
  } catch (error) {
    console.log(error);
    res.status(500).json()
  }
}

export const endpointEstudiante = async (req, res) => {
  try {
    let idEstudiante;
    if (req.body?.create) {
      idEstudiante = createEstudianteFuncion(req.body)
    } else if (req.body?.update) {
      idEstudiante = updateEstudianteFuncion(req.body)
    } else if (req.body?.delete) {
      idEstudiante = deleteEstudianteFuncion(req.body)
    }
    res.status(200).redirect('/')
  } catch (error) {
    console.log(error);
    res.status(500).redirect('/')
  }
}

const createEstudianteFuncion = async (informacion) => {
  try {
    await db.transaction(async trx => {
      let { carne, nombres, apellidos, direccion, telefono, correo_electronico, id_tipo_sangre, fecha_nacimiento } = informacion;
      let valores = { carne, nombres, apellidos, direccion, telefono, correo_electronico, id_tipo_sangre, fecha_nacimiento }
      return await trx('Colegio.estudiantes')
        .insert(valores, ['id_estudiante'])
    })
  } catch (error) {
    console.log(error);
    throw error;
  }
}

const updateEstudianteFuncion = async (informacion) => {
  try {
    await db.transaction(async trx => {
      let { carne, nombres, apellidos, direccion, telefono, correo_electronico, id_tipo_sangre, fecha_nacimiento } = informacion;
      let valores = { carne, nombres, apellidos, direccion, telefono, correo_electronico, id_tipo_sangre, fecha_nacimiento }
      return await trx('Colegio.estudiantes')
        .update(valores, 'id_estudiante')
        .where('id_estudiante', informacion.id_estudiante)
    })
  } catch (error) {
    console.log(error);
    throw error;
  }
}

const deleteEstudianteFuncion = async (informacion) => {
  try {
    await db.transaction(async trx => {
      return await trx('Colegio.estudiantes')
        .delete()
        .where('id_estudiante', informacion.id_estudiante)
    })
  } catch (error) {
    console.log(error);
    throw error;
  }
}