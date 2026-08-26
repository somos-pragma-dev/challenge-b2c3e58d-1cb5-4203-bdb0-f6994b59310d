# Prompt para Mejorar el Codigo Base

Copia y pega el siguiente contenido completo en un asistente de IA (Claude, ChatGPT, etc.)
para obtener un ZIP con el proyecto corregido y listo para compilar.

---

```
Eres un asistente experto en análisis, corrección y generación de archivos de cualquier tipo:
código fuente, documentación, hojas de cálculo, documentos Word, configuraciones, entre otros.
Voy a enviarte una cadena de texto que contiene uno o más archivos. Cada archivo está delimitado por un marcador con el siguiente formato:
// === ARCHIVO: ruta/del/archivo.extension ===
o también puede aparecer como:
## === ARCHIVO: ruta/del/archivo.extension ===
Lo que sigue al marcador puede ser:

El contenido real del archivo (código, texto, YAML, etc.)
Una descripción en lenguaje natural de lo que debe contener el archivo


TU TAREA
PASO 1 — Detección y extracción
Identifica todos los archivos presentes en la cadena. Para cada archivo extrae:

Su ruta completa (ej: src/main/java/com/pragma/Service.java)
Su contenido o descripción

PASO 2 — Clasificación por tipo
Clasifica cada archivo en una de estas categorías:
A) Código fuente (Java, Python, TypeScript, JavaScript, Kotlin, etc.)
B) Configuración / documentación (YAML, properties, Markdown, JSON, txt, etc.)
C) Excel (.xlsx, .xls, .csv)
D) Word (.docx, .doc)
E) Otro tipo de archivo binario o especial
PASO 3 — Clasificación de errores en código fuente

Objetivo prioritario: que el proyecto compile. No corrijas flujo de negocio ni lógica funcional.

Antes de modificar cualquier archivo de código fuente, clasifica cada problema encontrado en una de estas dos categorías:
🔴 ERROR DE COMPILACIÓN — corregir siempre
Son errores que impiden que el proyecto arranque, sin valor pedagógico:

Import faltante o incorrecto
Clase, método o variable referenciada que no existe en ningún archivo del proyecto
Error de sintaxis
Anotación con atributos inválidos
Dependencia ausente en pom.xml, package.json, etc.
Archivo referenciado que no existe y debe ser creado con implementación mínima

→ CORREGIR estos errores.
🟡 PROBLEMA FUNCIONAL O DE CALIDAD — preservar siempre
Son problemas que no impiden compilar. Pueden ser intencionales para el aprendizaje:

Clave secreta hardcodeada ("secret", "password123")
API deprecada que funciona pero tiene reemplazo moderno
Lógica de negocio incorrecta o incompleta
Código redundante o de baja legibilidad
Falta de validaciones en flujo de negocio
Patrones de diseño incorrectos pero funcionales
Concurrencia no segura
Configuración funcional pero no óptima

→ PRESERVAR tal cual. No corregir, no mejorar, no comentar.
PASO 4 — Procesamiento según tipo de archivo
Tipo A — Código fuente
Aplica únicamente las correcciones clasificadas como 🔴 ERROR DE COMPILACIÓN.
No alteres ningún elemento clasificado como 🟡 PROBLEMA FUNCIONAL O DE CALIDAD.
Si falta un archivo referenciado, créalo con la implementación mínima necesaria para compilar.
Tipo B — Configuración / documentación
Extrae el contenido tal cual, sin modificaciones salvo errores evidentes de sintaxis
(ej: YAML mal indentado).
Tipo C — Excel (.xlsx)
Si viene con contenido real, genera el archivo respetando ese contenido.
Si viene con descripción en lenguaje natural, genera un archivo Excel funcional con:

Fila de encabezados en negrita con color de fondo distintivo
Columnas con ancho ajustado al contenido
Tipos de dato correctos por columna
Validaciones si la descripción lo indica
Hojas nombradas descriptivamente si hay más de una
Filas de ejemplo si no hay datos reales

Tipo D — Word (.docx)
Si viene con contenido real, genera el archivo respetando ese contenido.
Si viene con descripción en lenguaje natural, genera un documento Word funcional con:

Estilos de título (Título 1, Título 2) para jerarquía de secciones
Fuente legible (Calibri o equivalente), tamaño 11-12pt para cuerpo
Márgenes estándar
Tabla de contenido si tiene múltiples secciones
Tablas con encabezados en negrita si aplica

Tipo E — Otro
Genera el archivo con el contenido o estructura más apropiada según la descripción.
PASO 5 — Exportación en ZIP
Empaqueta todos los archivos en un único archivo ZIP descargable respetando exactamente
la estructura de rutas indicada por los marcadores.
El ZIP debe incluir:

Archivos de código con únicamente los errores de compilación corregidos
Archivos de configuración y documentación sin cambios
Archivos nuevos creados para resolver dependencias de compilación faltantes
Archivos Excel y Word generados desde descripción

IMPORTANTE: El ZIP debe estar listo para descargar al finalizar. No preguntes si el usuario
quiere generarlo. Simplemente genera el archivo y proporciona el enlace de descarga; No debes desplegar en el chat el resumen de lo que arreglaste al Zip, solo entregalo.

REGLAS IMPORTANTES

No omitas ningún archivo aunque no tenga errores ni modificaciones
Respeta los nombres y rutas exactas indicadas por los marcadores
Si un archivo no tiene marcador claro, infiere el nombre desde su contenido
Si la cadena contiene solo documentación o descripciones sin código, genera los archivos
correspondientes sin aplicar análisis de compilación
No agregues texto después del enlace de descarga del ZIP
No preguntes si el usuario quiere el ZIP: simplemente generalo siempre
Si detectas que falta un archivo de configuración necesario para compilar
(pom.xml, package.json, requirements.txt, build.gradle, etc.), créalo e inclúyelo
inferiendo su contenido desde los imports y frameworks detectados en el código
Nunca corrijas problemas 🟡 aunque parezcan obvios o fáciles de mejorar.
El participante que recibirá este proyecto los debe encontrar y resolver él mismo.


INPUT
Aquí está la cadena con los archivos:
// === ARCHIVO: src/main.ts ===
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
   .setTitle('API de Cuentas Bancarias')
   .setDescription('Servicio REST para operaciones de cuentas bancarias')
   .setVersion('1.0')
   .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(3000);
}
bootstrap();

// === ARCHIVO: src/config/database.config.ts ===
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const databaseConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'user',
  password: 'password',
  database: 'nestjs_example',
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  synchronize: true,
};

// === ARCHIVO: src/modules/accounts/accounts.module.ts ===
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountsController } from '../controllers/accounts.controller';
import { AccountsService } from '../services/accounts.service';
import { AccountEntity } from './account.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AccountEntity])],
  controllers: [AccountsController],
  providers: [AccountsService],
})
export class AccountsModule {}

// === ARCHIVO: src/controllers/accounts.controller.ts ===
import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { AccountsService } from '../services/accounts.service';
import { CreateAccountDto } from '../dtos/create-account.dto';
import { UpdateAccountDto } from '../dtos/update-account.dto';
import { AccountEntity } from '../modules/accounts/account.entity';

@Controller('accounts')
export class AccountsController {
  constructor(private readonly accountsService: AccountsService) {}

  @Get()
  async getAllAccounts(): Promise<AccountEntity[]> {
    return this.accountsService.getAllAccounts();
  }

  @Post()
  async createAccount(@Body() createAccountDto: CreateAccountDto): Promise<AccountEntity> {
    return this.accountsService.createAccount(createAccountDto);
  }

  @Put(':id')
  async updateAccount(
    @Param('id') id: string,
    @Body() updateAccountDto: UpdateAccountDto,
  ): Promise<AccountEntity> {
    return this.accountsService.updateAccount(id, updateAccountDto);
  }

  @Delete(':id')
  async deleteAccount(@Param('id') id: string): Promise<void> {
    return this.accountsService.deleteAccount(id);
  }
}

// === ARCHIVO: src/services/accounts.service.ts ===
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AccountEntity } from '../modules/accounts/account.entity';
import { CreateAccountDto } from '../dtos/create-account.dto';
import { UpdateAccountDto } from '../dtos/update-account.dto';
import { Validations } from '../common/validations';

@Injectable()
export class AccountsService {
  constructor(
    @InjectRepository(AccountEntity)
    private readonly accountRepository: Repository<AccountEntity>,
  ) {}

  async getAllAccounts(): Promise<AccountEntity[]> {
    return this.accountRepository.find();
  }

  async createAccount(createAccountDto: CreateAccountDto): Promise<AccountEntity> {
    Validations.validateCreateAccount(createAccountDto);
    const account = this.accountRepository.create(createAccountDto);
    return this.accountRepository.save(account);
  }

  async updateAccount(
    id: string,
    updateAccountDto: UpdateAccountDto,
  ): Promise<AccountEntity> {
    Validations.validateUpdateAccount(updateAccountDto);
    const account = await this.accountRepository.findOne(id);
    if (!account) {
      throw new Error('Account not found');
    }
    Object.assign(account, updateAccountDto);
    return this.accountRepository.save(account);
  }

  async deleteAccount(id: string): Promise<void> {
    const account = await this.accountRepository.findOne(id);
    if (!account) {
      throw new Error('Account not found');
    }
    await this.accountRepository.remove(account);
  }
}

// === ARCHIVO: src/dtos/create-account.dto.ts ===
import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateAccountDto {
  @IsNotEmpty()
  @IsString()
  accountNumber: string;

  @IsNotEmpty()
  @IsString()
  accountType: string;

  @IsNotEmpty()
  @IsNumber()
  balance: number;
}

// === ARCHIVO: src/dtos/update-account.dto.ts ===
import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class UpdateAccountDto {
  @IsString()
  accountNumber?: string;

  @IsString()
  accountType?: string;

  @IsNumber()
  balance?: number;
}

// === ARCHIVO: src/common/validations.ts ===
import { CreateAccountDto } from '../dtos/create-account.dto';
import { UpdateAccountDto } from '../dtos/update-account.dto';

export class Validations {
  static validateCreateAccount(createAccountDto: CreateAccountDto): void {
    if (createAccountDto.balance < 0) {
      throw new Error('Initial balance must be non-negative');
    }
  }

  static validateUpdateAccount(updateAccountDto: UpdateAccountDto): void {
    if (updateAccountDto.balance!== undefined && updateAccountDto.balance < 0) {
      throw new Error('Balance must be non-negative');
    }
  }
}

// === ARCHIVO: src/openapi.yaml ===
openapi: 3.0.1
info:
  title: API de Cuentas Bancarias
  version: '1.0'
paths:
  /accounts:
    get:
      summary: Obtener todas las cuentas
      responses:
        '200':
          description: Lista de cuentas
    post:
      summary: Crear una cuenta
      requestBody:
        required: true
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/CreateAccountDto'
      responses:
        '201':
          description: Cuenta creada
  /accounts/{id}:
    put:
      summary: Actualizar una cuenta
      parameters:
        - name: id
          in: path
          required: true
          schema:
            type: string
      requestBody:
        required: true
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/UpdateAccountDto'
      responses:
        '200':
          description: Cuenta actualizada
    delete:
      summary: Eliminar una cuenta
      parameters:
        - name: id
          in: path
          required: true
          schema:
            type: string
      responses:
        '204':
          description: Cuenta eliminada
components:
  schemas:
    CreateAccountDto:
      type: object
      required:
        - accountNumber
        - accountType
        - balance
      properties:
        accountNumber:
          type: string
        accountType:
          type: string
        balance:
          type: number
    UpdateAccountDto:
      type: object
      properties:
        accountNumber:
          type: string
        accountType:
          type: string
        balance:
          type: number

```
