
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Ciudades
 * 
 */
export type Ciudades = $Result.DefaultSelection<Prisma.$CiudadesPayload>
/**
 * Model Clientes
 * 
 */
export type Clientes = $Result.DefaultSelection<Prisma.$ClientesPayload>
/**
 * Model Contratos
 * 
 */
export type Contratos = $Result.DefaultSelection<Prisma.$ContratosPayload>
/**
 * Model Direcciones
 * 
 */
export type Direcciones = $Result.DefaultSelection<Prisma.$DireccionesPayload>
/**
 * Model Estados
 * 
 */
export type Estados = $Result.DefaultSelection<Prisma.$EstadosPayload>
/**
 * Model Localidades
 * 
 */
export type Localidades = $Result.DefaultSelection<Prisma.$LocalidadesPayload>
/**
 * Model MetodoPago
 * 
 */
export type MetodoPago = $Result.DefaultSelection<Prisma.$MetodoPagoPayload>
/**
 * Model Municipios
 * 
 */
export type Municipios = $Result.DefaultSelection<Prisma.$MunicipiosPayload>
/**
 * Model Pagos
 * 
 */
export type Pagos = $Result.DefaultSelection<Prisma.$PagosPayload>
/**
 * Model Permisos
 * 
 */
export type Permisos = $Result.DefaultSelection<Prisma.$PermisosPayload>
/**
 * Model Prestamos
 * 
 */
export type Prestamos = $Result.DefaultSelection<Prisma.$PrestamosPayload>
/**
 * Model Roles
 * 
 */
export type Roles = $Result.DefaultSelection<Prisma.$RolesPayload>
/**
 * Model RolPermisos
 * 
 */
export type RolPermisos = $Result.DefaultSelection<Prisma.$RolPermisosPayload>
/**
 * Model RolUsuario
 * 
 */
export type RolUsuario = $Result.DefaultSelection<Prisma.$RolUsuarioPayload>
/**
 * Model Usuarios
 * 
 */
export type Usuarios = $Result.DefaultSelection<Prisma.$UsuariosPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Ciudades
 * const ciudades = await prisma.ciudades.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Ciudades
   * const ciudades = await prisma.ciudades.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.ciudades`: Exposes CRUD operations for the **Ciudades** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ciudades
    * const ciudades = await prisma.ciudades.findMany()
    * ```
    */
  get ciudades(): Prisma.CiudadesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.clientes`: Exposes CRUD operations for the **Clientes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clientes
    * const clientes = await prisma.clientes.findMany()
    * ```
    */
  get clientes(): Prisma.ClientesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contratos`: Exposes CRUD operations for the **Contratos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Contratos
    * const contratos = await prisma.contratos.findMany()
    * ```
    */
  get contratos(): Prisma.ContratosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.direcciones`: Exposes CRUD operations for the **Direcciones** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Direcciones
    * const direcciones = await prisma.direcciones.findMany()
    * ```
    */
  get direcciones(): Prisma.DireccionesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.estados`: Exposes CRUD operations for the **Estados** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Estados
    * const estados = await prisma.estados.findMany()
    * ```
    */
  get estados(): Prisma.EstadosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.localidades`: Exposes CRUD operations for the **Localidades** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Localidades
    * const localidades = await prisma.localidades.findMany()
    * ```
    */
  get localidades(): Prisma.LocalidadesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.metodoPago`: Exposes CRUD operations for the **MetodoPago** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MetodoPagos
    * const metodoPagos = await prisma.metodoPago.findMany()
    * ```
    */
  get metodoPago(): Prisma.MetodoPagoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.municipios`: Exposes CRUD operations for the **Municipios** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Municipios
    * const municipios = await prisma.municipios.findMany()
    * ```
    */
  get municipios(): Prisma.MunicipiosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pagos`: Exposes CRUD operations for the **Pagos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pagos
    * const pagos = await prisma.pagos.findMany()
    * ```
    */
  get pagos(): Prisma.PagosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.permisos`: Exposes CRUD operations for the **Permisos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Permisos
    * const permisos = await prisma.permisos.findMany()
    * ```
    */
  get permisos(): Prisma.PermisosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.prestamos`: Exposes CRUD operations for the **Prestamos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Prestamos
    * const prestamos = await prisma.prestamos.findMany()
    * ```
    */
  get prestamos(): Prisma.PrestamosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.roles`: Exposes CRUD operations for the **Roles** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Roles
    * const roles = await prisma.roles.findMany()
    * ```
    */
  get roles(): Prisma.RolesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rolPermisos`: Exposes CRUD operations for the **RolPermisos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RolPermisos
    * const rolPermisos = await prisma.rolPermisos.findMany()
    * ```
    */
  get rolPermisos(): Prisma.RolPermisosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rolUsuario`: Exposes CRUD operations for the **RolUsuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RolUsuarios
    * const rolUsuarios = await prisma.rolUsuario.findMany()
    * ```
    */
  get rolUsuario(): Prisma.RolUsuarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.usuarios`: Exposes CRUD operations for the **Usuarios** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuarios.findMany()
    * ```
    */
  get usuarios(): Prisma.UsuariosDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Ciudades: 'Ciudades',
    Clientes: 'Clientes',
    Contratos: 'Contratos',
    Direcciones: 'Direcciones',
    Estados: 'Estados',
    Localidades: 'Localidades',
    MetodoPago: 'MetodoPago',
    Municipios: 'Municipios',
    Pagos: 'Pagos',
    Permisos: 'Permisos',
    Prestamos: 'Prestamos',
    Roles: 'Roles',
    RolPermisos: 'RolPermisos',
    RolUsuario: 'RolUsuario',
    Usuarios: 'Usuarios'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "ciudades" | "clientes" | "contratos" | "direcciones" | "estados" | "localidades" | "metodoPago" | "municipios" | "pagos" | "permisos" | "prestamos" | "roles" | "rolPermisos" | "rolUsuario" | "usuarios"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Ciudades: {
        payload: Prisma.$CiudadesPayload<ExtArgs>
        fields: Prisma.CiudadesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CiudadesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CiudadesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CiudadesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CiudadesPayload>
          }
          findFirst: {
            args: Prisma.CiudadesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CiudadesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CiudadesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CiudadesPayload>
          }
          findMany: {
            args: Prisma.CiudadesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CiudadesPayload>[]
          }
          create: {
            args: Prisma.CiudadesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CiudadesPayload>
          }
          createMany: {
            args: Prisma.CiudadesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CiudadesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CiudadesPayload>[]
          }
          delete: {
            args: Prisma.CiudadesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CiudadesPayload>
          }
          update: {
            args: Prisma.CiudadesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CiudadesPayload>
          }
          deleteMany: {
            args: Prisma.CiudadesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CiudadesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CiudadesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CiudadesPayload>[]
          }
          upsert: {
            args: Prisma.CiudadesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CiudadesPayload>
          }
          aggregate: {
            args: Prisma.CiudadesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCiudades>
          }
          groupBy: {
            args: Prisma.CiudadesGroupByArgs<ExtArgs>
            result: $Utils.Optional<CiudadesGroupByOutputType>[]
          }
          count: {
            args: Prisma.CiudadesCountArgs<ExtArgs>
            result: $Utils.Optional<CiudadesCountAggregateOutputType> | number
          }
        }
      }
      Clientes: {
        payload: Prisma.$ClientesPayload<ExtArgs>
        fields: Prisma.ClientesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClientesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClientesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientesPayload>
          }
          findFirst: {
            args: Prisma.ClientesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClientesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientesPayload>
          }
          findMany: {
            args: Prisma.ClientesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientesPayload>[]
          }
          create: {
            args: Prisma.ClientesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientesPayload>
          }
          createMany: {
            args: Prisma.ClientesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClientesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientesPayload>[]
          }
          delete: {
            args: Prisma.ClientesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientesPayload>
          }
          update: {
            args: Prisma.ClientesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientesPayload>
          }
          deleteMany: {
            args: Prisma.ClientesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClientesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClientesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientesPayload>[]
          }
          upsert: {
            args: Prisma.ClientesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientesPayload>
          }
          aggregate: {
            args: Prisma.ClientesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClientes>
          }
          groupBy: {
            args: Prisma.ClientesGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClientesGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClientesCountArgs<ExtArgs>
            result: $Utils.Optional<ClientesCountAggregateOutputType> | number
          }
        }
      }
      Contratos: {
        payload: Prisma.$ContratosPayload<ExtArgs>
        fields: Prisma.ContratosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContratosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContratosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContratosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContratosPayload>
          }
          findFirst: {
            args: Prisma.ContratosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContratosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContratosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContratosPayload>
          }
          findMany: {
            args: Prisma.ContratosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContratosPayload>[]
          }
          create: {
            args: Prisma.ContratosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContratosPayload>
          }
          createMany: {
            args: Prisma.ContratosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ContratosCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContratosPayload>[]
          }
          delete: {
            args: Prisma.ContratosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContratosPayload>
          }
          update: {
            args: Prisma.ContratosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContratosPayload>
          }
          deleteMany: {
            args: Prisma.ContratosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContratosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ContratosUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContratosPayload>[]
          }
          upsert: {
            args: Prisma.ContratosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContratosPayload>
          }
          aggregate: {
            args: Prisma.ContratosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContratos>
          }
          groupBy: {
            args: Prisma.ContratosGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContratosGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContratosCountArgs<ExtArgs>
            result: $Utils.Optional<ContratosCountAggregateOutputType> | number
          }
        }
      }
      Direcciones: {
        payload: Prisma.$DireccionesPayload<ExtArgs>
        fields: Prisma.DireccionesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DireccionesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DireccionesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DireccionesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DireccionesPayload>
          }
          findFirst: {
            args: Prisma.DireccionesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DireccionesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DireccionesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DireccionesPayload>
          }
          findMany: {
            args: Prisma.DireccionesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DireccionesPayload>[]
          }
          create: {
            args: Prisma.DireccionesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DireccionesPayload>
          }
          createMany: {
            args: Prisma.DireccionesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DireccionesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DireccionesPayload>[]
          }
          delete: {
            args: Prisma.DireccionesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DireccionesPayload>
          }
          update: {
            args: Prisma.DireccionesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DireccionesPayload>
          }
          deleteMany: {
            args: Prisma.DireccionesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DireccionesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DireccionesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DireccionesPayload>[]
          }
          upsert: {
            args: Prisma.DireccionesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DireccionesPayload>
          }
          aggregate: {
            args: Prisma.DireccionesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDirecciones>
          }
          groupBy: {
            args: Prisma.DireccionesGroupByArgs<ExtArgs>
            result: $Utils.Optional<DireccionesGroupByOutputType>[]
          }
          count: {
            args: Prisma.DireccionesCountArgs<ExtArgs>
            result: $Utils.Optional<DireccionesCountAggregateOutputType> | number
          }
        }
      }
      Estados: {
        payload: Prisma.$EstadosPayload<ExtArgs>
        fields: Prisma.EstadosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EstadosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstadosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EstadosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstadosPayload>
          }
          findFirst: {
            args: Prisma.EstadosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstadosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EstadosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstadosPayload>
          }
          findMany: {
            args: Prisma.EstadosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstadosPayload>[]
          }
          create: {
            args: Prisma.EstadosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstadosPayload>
          }
          createMany: {
            args: Prisma.EstadosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EstadosCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstadosPayload>[]
          }
          delete: {
            args: Prisma.EstadosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstadosPayload>
          }
          update: {
            args: Prisma.EstadosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstadosPayload>
          }
          deleteMany: {
            args: Prisma.EstadosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EstadosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EstadosUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstadosPayload>[]
          }
          upsert: {
            args: Prisma.EstadosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstadosPayload>
          }
          aggregate: {
            args: Prisma.EstadosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEstados>
          }
          groupBy: {
            args: Prisma.EstadosGroupByArgs<ExtArgs>
            result: $Utils.Optional<EstadosGroupByOutputType>[]
          }
          count: {
            args: Prisma.EstadosCountArgs<ExtArgs>
            result: $Utils.Optional<EstadosCountAggregateOutputType> | number
          }
        }
      }
      Localidades: {
        payload: Prisma.$LocalidadesPayload<ExtArgs>
        fields: Prisma.LocalidadesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LocalidadesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalidadesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LocalidadesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalidadesPayload>
          }
          findFirst: {
            args: Prisma.LocalidadesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalidadesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LocalidadesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalidadesPayload>
          }
          findMany: {
            args: Prisma.LocalidadesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalidadesPayload>[]
          }
          create: {
            args: Prisma.LocalidadesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalidadesPayload>
          }
          createMany: {
            args: Prisma.LocalidadesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LocalidadesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalidadesPayload>[]
          }
          delete: {
            args: Prisma.LocalidadesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalidadesPayload>
          }
          update: {
            args: Prisma.LocalidadesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalidadesPayload>
          }
          deleteMany: {
            args: Prisma.LocalidadesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LocalidadesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LocalidadesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalidadesPayload>[]
          }
          upsert: {
            args: Prisma.LocalidadesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalidadesPayload>
          }
          aggregate: {
            args: Prisma.LocalidadesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLocalidades>
          }
          groupBy: {
            args: Prisma.LocalidadesGroupByArgs<ExtArgs>
            result: $Utils.Optional<LocalidadesGroupByOutputType>[]
          }
          count: {
            args: Prisma.LocalidadesCountArgs<ExtArgs>
            result: $Utils.Optional<LocalidadesCountAggregateOutputType> | number
          }
        }
      }
      MetodoPago: {
        payload: Prisma.$MetodoPagoPayload<ExtArgs>
        fields: Prisma.MetodoPagoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MetodoPagoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetodoPagoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MetodoPagoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetodoPagoPayload>
          }
          findFirst: {
            args: Prisma.MetodoPagoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetodoPagoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MetodoPagoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetodoPagoPayload>
          }
          findMany: {
            args: Prisma.MetodoPagoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetodoPagoPayload>[]
          }
          create: {
            args: Prisma.MetodoPagoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetodoPagoPayload>
          }
          createMany: {
            args: Prisma.MetodoPagoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MetodoPagoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetodoPagoPayload>[]
          }
          delete: {
            args: Prisma.MetodoPagoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetodoPagoPayload>
          }
          update: {
            args: Prisma.MetodoPagoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetodoPagoPayload>
          }
          deleteMany: {
            args: Prisma.MetodoPagoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MetodoPagoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MetodoPagoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetodoPagoPayload>[]
          }
          upsert: {
            args: Prisma.MetodoPagoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetodoPagoPayload>
          }
          aggregate: {
            args: Prisma.MetodoPagoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMetodoPago>
          }
          groupBy: {
            args: Prisma.MetodoPagoGroupByArgs<ExtArgs>
            result: $Utils.Optional<MetodoPagoGroupByOutputType>[]
          }
          count: {
            args: Prisma.MetodoPagoCountArgs<ExtArgs>
            result: $Utils.Optional<MetodoPagoCountAggregateOutputType> | number
          }
        }
      }
      Municipios: {
        payload: Prisma.$MunicipiosPayload<ExtArgs>
        fields: Prisma.MunicipiosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MunicipiosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MunicipiosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MunicipiosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MunicipiosPayload>
          }
          findFirst: {
            args: Prisma.MunicipiosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MunicipiosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MunicipiosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MunicipiosPayload>
          }
          findMany: {
            args: Prisma.MunicipiosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MunicipiosPayload>[]
          }
          create: {
            args: Prisma.MunicipiosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MunicipiosPayload>
          }
          createMany: {
            args: Prisma.MunicipiosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MunicipiosCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MunicipiosPayload>[]
          }
          delete: {
            args: Prisma.MunicipiosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MunicipiosPayload>
          }
          update: {
            args: Prisma.MunicipiosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MunicipiosPayload>
          }
          deleteMany: {
            args: Prisma.MunicipiosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MunicipiosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MunicipiosUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MunicipiosPayload>[]
          }
          upsert: {
            args: Prisma.MunicipiosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MunicipiosPayload>
          }
          aggregate: {
            args: Prisma.MunicipiosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMunicipios>
          }
          groupBy: {
            args: Prisma.MunicipiosGroupByArgs<ExtArgs>
            result: $Utils.Optional<MunicipiosGroupByOutputType>[]
          }
          count: {
            args: Prisma.MunicipiosCountArgs<ExtArgs>
            result: $Utils.Optional<MunicipiosCountAggregateOutputType> | number
          }
        }
      }
      Pagos: {
        payload: Prisma.$PagosPayload<ExtArgs>
        fields: Prisma.PagosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PagosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PagosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagosPayload>
          }
          findFirst: {
            args: Prisma.PagosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PagosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagosPayload>
          }
          findMany: {
            args: Prisma.PagosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagosPayload>[]
          }
          create: {
            args: Prisma.PagosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagosPayload>
          }
          createMany: {
            args: Prisma.PagosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PagosCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagosPayload>[]
          }
          delete: {
            args: Prisma.PagosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagosPayload>
          }
          update: {
            args: Prisma.PagosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagosPayload>
          }
          deleteMany: {
            args: Prisma.PagosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PagosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PagosUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagosPayload>[]
          }
          upsert: {
            args: Prisma.PagosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagosPayload>
          }
          aggregate: {
            args: Prisma.PagosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePagos>
          }
          groupBy: {
            args: Prisma.PagosGroupByArgs<ExtArgs>
            result: $Utils.Optional<PagosGroupByOutputType>[]
          }
          count: {
            args: Prisma.PagosCountArgs<ExtArgs>
            result: $Utils.Optional<PagosCountAggregateOutputType> | number
          }
        }
      }
      Permisos: {
        payload: Prisma.$PermisosPayload<ExtArgs>
        fields: Prisma.PermisosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PermisosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermisosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PermisosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermisosPayload>
          }
          findFirst: {
            args: Prisma.PermisosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermisosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PermisosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermisosPayload>
          }
          findMany: {
            args: Prisma.PermisosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermisosPayload>[]
          }
          create: {
            args: Prisma.PermisosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermisosPayload>
          }
          createMany: {
            args: Prisma.PermisosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PermisosCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermisosPayload>[]
          }
          delete: {
            args: Prisma.PermisosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermisosPayload>
          }
          update: {
            args: Prisma.PermisosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermisosPayload>
          }
          deleteMany: {
            args: Prisma.PermisosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PermisosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PermisosUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermisosPayload>[]
          }
          upsert: {
            args: Prisma.PermisosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermisosPayload>
          }
          aggregate: {
            args: Prisma.PermisosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePermisos>
          }
          groupBy: {
            args: Prisma.PermisosGroupByArgs<ExtArgs>
            result: $Utils.Optional<PermisosGroupByOutputType>[]
          }
          count: {
            args: Prisma.PermisosCountArgs<ExtArgs>
            result: $Utils.Optional<PermisosCountAggregateOutputType> | number
          }
        }
      }
      Prestamos: {
        payload: Prisma.$PrestamosPayload<ExtArgs>
        fields: Prisma.PrestamosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PrestamosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrestamosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PrestamosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrestamosPayload>
          }
          findFirst: {
            args: Prisma.PrestamosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrestamosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PrestamosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrestamosPayload>
          }
          findMany: {
            args: Prisma.PrestamosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrestamosPayload>[]
          }
          create: {
            args: Prisma.PrestamosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrestamosPayload>
          }
          createMany: {
            args: Prisma.PrestamosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PrestamosCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrestamosPayload>[]
          }
          delete: {
            args: Prisma.PrestamosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrestamosPayload>
          }
          update: {
            args: Prisma.PrestamosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrestamosPayload>
          }
          deleteMany: {
            args: Prisma.PrestamosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PrestamosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PrestamosUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrestamosPayload>[]
          }
          upsert: {
            args: Prisma.PrestamosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrestamosPayload>
          }
          aggregate: {
            args: Prisma.PrestamosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePrestamos>
          }
          groupBy: {
            args: Prisma.PrestamosGroupByArgs<ExtArgs>
            result: $Utils.Optional<PrestamosGroupByOutputType>[]
          }
          count: {
            args: Prisma.PrestamosCountArgs<ExtArgs>
            result: $Utils.Optional<PrestamosCountAggregateOutputType> | number
          }
        }
      }
      Roles: {
        payload: Prisma.$RolesPayload<ExtArgs>
        fields: Prisma.RolesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RolesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RolesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolesPayload>
          }
          findFirst: {
            args: Prisma.RolesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RolesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolesPayload>
          }
          findMany: {
            args: Prisma.RolesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolesPayload>[]
          }
          create: {
            args: Prisma.RolesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolesPayload>
          }
          createMany: {
            args: Prisma.RolesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RolesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolesPayload>[]
          }
          delete: {
            args: Prisma.RolesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolesPayload>
          }
          update: {
            args: Prisma.RolesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolesPayload>
          }
          deleteMany: {
            args: Prisma.RolesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RolesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RolesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolesPayload>[]
          }
          upsert: {
            args: Prisma.RolesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolesPayload>
          }
          aggregate: {
            args: Prisma.RolesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoles>
          }
          groupBy: {
            args: Prisma.RolesGroupByArgs<ExtArgs>
            result: $Utils.Optional<RolesGroupByOutputType>[]
          }
          count: {
            args: Prisma.RolesCountArgs<ExtArgs>
            result: $Utils.Optional<RolesCountAggregateOutputType> | number
          }
        }
      }
      RolPermisos: {
        payload: Prisma.$RolPermisosPayload<ExtArgs>
        fields: Prisma.RolPermisosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RolPermisosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPermisosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RolPermisosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPermisosPayload>
          }
          findFirst: {
            args: Prisma.RolPermisosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPermisosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RolPermisosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPermisosPayload>
          }
          findMany: {
            args: Prisma.RolPermisosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPermisosPayload>[]
          }
          create: {
            args: Prisma.RolPermisosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPermisosPayload>
          }
          createMany: {
            args: Prisma.RolPermisosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RolPermisosCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPermisosPayload>[]
          }
          delete: {
            args: Prisma.RolPermisosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPermisosPayload>
          }
          update: {
            args: Prisma.RolPermisosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPermisosPayload>
          }
          deleteMany: {
            args: Prisma.RolPermisosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RolPermisosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RolPermisosUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPermisosPayload>[]
          }
          upsert: {
            args: Prisma.RolPermisosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPermisosPayload>
          }
          aggregate: {
            args: Prisma.RolPermisosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRolPermisos>
          }
          groupBy: {
            args: Prisma.RolPermisosGroupByArgs<ExtArgs>
            result: $Utils.Optional<RolPermisosGroupByOutputType>[]
          }
          count: {
            args: Prisma.RolPermisosCountArgs<ExtArgs>
            result: $Utils.Optional<RolPermisosCountAggregateOutputType> | number
          }
        }
      }
      RolUsuario: {
        payload: Prisma.$RolUsuarioPayload<ExtArgs>
        fields: Prisma.RolUsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RolUsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolUsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RolUsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolUsuarioPayload>
          }
          findFirst: {
            args: Prisma.RolUsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolUsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RolUsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolUsuarioPayload>
          }
          findMany: {
            args: Prisma.RolUsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolUsuarioPayload>[]
          }
          create: {
            args: Prisma.RolUsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolUsuarioPayload>
          }
          createMany: {
            args: Prisma.RolUsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RolUsuarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolUsuarioPayload>[]
          }
          delete: {
            args: Prisma.RolUsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolUsuarioPayload>
          }
          update: {
            args: Prisma.RolUsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolUsuarioPayload>
          }
          deleteMany: {
            args: Prisma.RolUsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RolUsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RolUsuarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolUsuarioPayload>[]
          }
          upsert: {
            args: Prisma.RolUsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolUsuarioPayload>
          }
          aggregate: {
            args: Prisma.RolUsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRolUsuario>
          }
          groupBy: {
            args: Prisma.RolUsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<RolUsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.RolUsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<RolUsuarioCountAggregateOutputType> | number
          }
        }
      }
      Usuarios: {
        payload: Prisma.$UsuariosPayload<ExtArgs>
        fields: Prisma.UsuariosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuariosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuariosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariosPayload>
          }
          findFirst: {
            args: Prisma.UsuariosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuariosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariosPayload>
          }
          findMany: {
            args: Prisma.UsuariosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariosPayload>[]
          }
          create: {
            args: Prisma.UsuariosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariosPayload>
          }
          createMany: {
            args: Prisma.UsuariosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsuariosCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariosPayload>[]
          }
          delete: {
            args: Prisma.UsuariosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariosPayload>
          }
          update: {
            args: Prisma.UsuariosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariosPayload>
          }
          deleteMany: {
            args: Prisma.UsuariosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuariosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsuariosUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariosPayload>[]
          }
          upsert: {
            args: Prisma.UsuariosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariosPayload>
          }
          aggregate: {
            args: Prisma.UsuariosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuarios>
          }
          groupBy: {
            args: Prisma.UsuariosGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuariosGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuariosCountArgs<ExtArgs>
            result: $Utils.Optional<UsuariosCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    ciudades?: CiudadesOmit
    clientes?: ClientesOmit
    contratos?: ContratosOmit
    direcciones?: DireccionesOmit
    estados?: EstadosOmit
    localidades?: LocalidadesOmit
    metodoPago?: MetodoPagoOmit
    municipios?: MunicipiosOmit
    pagos?: PagosOmit
    permisos?: PermisosOmit
    prestamos?: PrestamosOmit
    roles?: RolesOmit
    rolPermisos?: RolPermisosOmit
    rolUsuario?: RolUsuarioOmit
    usuarios?: UsuariosOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CiudadesCountOutputType
   */

  export type CiudadesCountOutputType = {
    localidades: number
  }

  export type CiudadesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    localidades?: boolean | CiudadesCountOutputTypeCountLocalidadesArgs
  }

  // Custom InputTypes
  /**
   * CiudadesCountOutputType without action
   */
  export type CiudadesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CiudadesCountOutputType
     */
    select?: CiudadesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CiudadesCountOutputType without action
   */
  export type CiudadesCountOutputTypeCountLocalidadesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LocalidadesWhereInput
  }


  /**
   * Count Type ClientesCountOutputType
   */

  export type ClientesCountOutputType = {
    prestamos: number
  }

  export type ClientesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prestamos?: boolean | ClientesCountOutputTypeCountPrestamosArgs
  }

  // Custom InputTypes
  /**
   * ClientesCountOutputType without action
   */
  export type ClientesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientesCountOutputType
     */
    select?: ClientesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClientesCountOutputType without action
   */
  export type ClientesCountOutputTypeCountPrestamosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PrestamosWhereInput
  }


  /**
   * Count Type DireccionesCountOutputType
   */

  export type DireccionesCountOutputType = {
    clientes: number
  }

  export type DireccionesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clientes?: boolean | DireccionesCountOutputTypeCountClientesArgs
  }

  // Custom InputTypes
  /**
   * DireccionesCountOutputType without action
   */
  export type DireccionesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DireccionesCountOutputType
     */
    select?: DireccionesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DireccionesCountOutputType without action
   */
  export type DireccionesCountOutputTypeCountClientesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClientesWhereInput
  }


  /**
   * Count Type EstadosCountOutputType
   */

  export type EstadosCountOutputType = {
    municipios: number
  }

  export type EstadosCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    municipios?: boolean | EstadosCountOutputTypeCountMunicipiosArgs
  }

  // Custom InputTypes
  /**
   * EstadosCountOutputType without action
   */
  export type EstadosCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstadosCountOutputType
     */
    select?: EstadosCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EstadosCountOutputType without action
   */
  export type EstadosCountOutputTypeCountMunicipiosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MunicipiosWhereInput
  }


  /**
   * Count Type LocalidadesCountOutputType
   */

  export type LocalidadesCountOutputType = {
    direcciones: number
  }

  export type LocalidadesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    direcciones?: boolean | LocalidadesCountOutputTypeCountDireccionesArgs
  }

  // Custom InputTypes
  /**
   * LocalidadesCountOutputType without action
   */
  export type LocalidadesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocalidadesCountOutputType
     */
    select?: LocalidadesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LocalidadesCountOutputType without action
   */
  export type LocalidadesCountOutputTypeCountDireccionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DireccionesWhereInput
  }


  /**
   * Count Type MetodoPagoCountOutputType
   */

  export type MetodoPagoCountOutputType = {
    pagos: number
  }

  export type MetodoPagoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pagos?: boolean | MetodoPagoCountOutputTypeCountPagosArgs
  }

  // Custom InputTypes
  /**
   * MetodoPagoCountOutputType without action
   */
  export type MetodoPagoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetodoPagoCountOutputType
     */
    select?: MetodoPagoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MetodoPagoCountOutputType without action
   */
  export type MetodoPagoCountOutputTypeCountPagosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PagosWhereInput
  }


  /**
   * Count Type MunicipiosCountOutputType
   */

  export type MunicipiosCountOutputType = {
    ciudades: number
  }

  export type MunicipiosCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ciudades?: boolean | MunicipiosCountOutputTypeCountCiudadesArgs
  }

  // Custom InputTypes
  /**
   * MunicipiosCountOutputType without action
   */
  export type MunicipiosCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MunicipiosCountOutputType
     */
    select?: MunicipiosCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MunicipiosCountOutputType without action
   */
  export type MunicipiosCountOutputTypeCountCiudadesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CiudadesWhereInput
  }


  /**
   * Count Type PrestamosCountOutputType
   */

  export type PrestamosCountOutputType = {
    contratos: number
    pagos: number
  }

  export type PrestamosCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contratos?: boolean | PrestamosCountOutputTypeCountContratosArgs
    pagos?: boolean | PrestamosCountOutputTypeCountPagosArgs
  }

  // Custom InputTypes
  /**
   * PrestamosCountOutputType without action
   */
  export type PrestamosCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrestamosCountOutputType
     */
    select?: PrestamosCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PrestamosCountOutputType without action
   */
  export type PrestamosCountOutputTypeCountContratosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContratosWhereInput
  }

  /**
   * PrestamosCountOutputType without action
   */
  export type PrestamosCountOutputTypeCountPagosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PagosWhereInput
  }


  /**
   * Count Type RolesCountOutputType
   */

  export type RolesCountOutputType = {
    rolPermisos: number
  }

  export type RolesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rolPermisos?: boolean | RolesCountOutputTypeCountRolPermisosArgs
  }

  // Custom InputTypes
  /**
   * RolesCountOutputType without action
   */
  export type RolesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolesCountOutputType
     */
    select?: RolesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RolesCountOutputType without action
   */
  export type RolesCountOutputTypeCountRolPermisosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RolPermisosWhereInput
  }


  /**
   * Count Type RolPermisosCountOutputType
   */

  export type RolPermisosCountOutputType = {
    permisos: number
  }

  export type RolPermisosCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    permisos?: boolean | RolPermisosCountOutputTypeCountPermisosArgs
  }

  // Custom InputTypes
  /**
   * RolPermisosCountOutputType without action
   */
  export type RolPermisosCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolPermisosCountOutputType
     */
    select?: RolPermisosCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RolPermisosCountOutputType without action
   */
  export type RolPermisosCountOutputTypeCountPermisosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PermisosWhereInput
  }


  /**
   * Count Type RolUsuarioCountOutputType
   */

  export type RolUsuarioCountOutputType = {
    roles: number
  }

  export type RolUsuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    roles?: boolean | RolUsuarioCountOutputTypeCountRolesArgs
  }

  // Custom InputTypes
  /**
   * RolUsuarioCountOutputType without action
   */
  export type RolUsuarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolUsuarioCountOutputType
     */
    select?: RolUsuarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RolUsuarioCountOutputType without action
   */
  export type RolUsuarioCountOutputTypeCountRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RolesWhereInput
  }


  /**
   * Count Type UsuariosCountOutputType
   */

  export type UsuariosCountOutputType = {
    clientes: number
    prestamos: number
    rolUsuario: number
  }

  export type UsuariosCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clientes?: boolean | UsuariosCountOutputTypeCountClientesArgs
    prestamos?: boolean | UsuariosCountOutputTypeCountPrestamosArgs
    rolUsuario?: boolean | UsuariosCountOutputTypeCountRolUsuarioArgs
  }

  // Custom InputTypes
  /**
   * UsuariosCountOutputType without action
   */
  export type UsuariosCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuariosCountOutputType
     */
    select?: UsuariosCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuariosCountOutputType without action
   */
  export type UsuariosCountOutputTypeCountClientesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClientesWhereInput
  }

  /**
   * UsuariosCountOutputType without action
   */
  export type UsuariosCountOutputTypeCountPrestamosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PrestamosWhereInput
  }

  /**
   * UsuariosCountOutputType without action
   */
  export type UsuariosCountOutputTypeCountRolUsuarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RolUsuarioWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Ciudades
   */

  export type AggregateCiudades = {
    _count: CiudadesCountAggregateOutputType | null
    _avg: CiudadesAvgAggregateOutputType | null
    _sum: CiudadesSumAggregateOutputType | null
    _min: CiudadesMinAggregateOutputType | null
    _max: CiudadesMaxAggregateOutputType | null
  }

  export type CiudadesAvgAggregateOutputType = {
    id: number | null
    idMunicipio: number | null
  }

  export type CiudadesSumAggregateOutputType = {
    id: number | null
    idMunicipio: number | null
  }

  export type CiudadesMinAggregateOutputType = {
    id: number | null
    idMunicipio: number | null
    nombre: string | null
  }

  export type CiudadesMaxAggregateOutputType = {
    id: number | null
    idMunicipio: number | null
    nombre: string | null
  }

  export type CiudadesCountAggregateOutputType = {
    id: number
    idMunicipio: number
    nombre: number
    _all: number
  }


  export type CiudadesAvgAggregateInputType = {
    id?: true
    idMunicipio?: true
  }

  export type CiudadesSumAggregateInputType = {
    id?: true
    idMunicipio?: true
  }

  export type CiudadesMinAggregateInputType = {
    id?: true
    idMunicipio?: true
    nombre?: true
  }

  export type CiudadesMaxAggregateInputType = {
    id?: true
    idMunicipio?: true
    nombre?: true
  }

  export type CiudadesCountAggregateInputType = {
    id?: true
    idMunicipio?: true
    nombre?: true
    _all?: true
  }

  export type CiudadesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ciudades to aggregate.
     */
    where?: CiudadesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ciudades to fetch.
     */
    orderBy?: CiudadesOrderByWithRelationInput | CiudadesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CiudadesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ciudades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ciudades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Ciudades
    **/
    _count?: true | CiudadesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CiudadesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CiudadesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CiudadesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CiudadesMaxAggregateInputType
  }

  export type GetCiudadesAggregateType<T extends CiudadesAggregateArgs> = {
        [P in keyof T & keyof AggregateCiudades]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCiudades[P]>
      : GetScalarType<T[P], AggregateCiudades[P]>
  }




  export type CiudadesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CiudadesWhereInput
    orderBy?: CiudadesOrderByWithAggregationInput | CiudadesOrderByWithAggregationInput[]
    by: CiudadesScalarFieldEnum[] | CiudadesScalarFieldEnum
    having?: CiudadesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CiudadesCountAggregateInputType | true
    _avg?: CiudadesAvgAggregateInputType
    _sum?: CiudadesSumAggregateInputType
    _min?: CiudadesMinAggregateInputType
    _max?: CiudadesMaxAggregateInputType
  }

  export type CiudadesGroupByOutputType = {
    id: number
    idMunicipio: number | null
    nombre: string | null
    _count: CiudadesCountAggregateOutputType | null
    _avg: CiudadesAvgAggregateOutputType | null
    _sum: CiudadesSumAggregateOutputType | null
    _min: CiudadesMinAggregateOutputType | null
    _max: CiudadesMaxAggregateOutputType | null
  }

  type GetCiudadesGroupByPayload<T extends CiudadesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CiudadesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CiudadesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CiudadesGroupByOutputType[P]>
            : GetScalarType<T[P], CiudadesGroupByOutputType[P]>
        }
      >
    >


  export type CiudadesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idMunicipio?: boolean
    nombre?: boolean
    municipio?: boolean | Ciudades$municipioArgs<ExtArgs>
    localidades?: boolean | Ciudades$localidadesArgs<ExtArgs>
    _count?: boolean | CiudadesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ciudades"]>

  export type CiudadesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idMunicipio?: boolean
    nombre?: boolean
    municipio?: boolean | Ciudades$municipioArgs<ExtArgs>
  }, ExtArgs["result"]["ciudades"]>

  export type CiudadesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idMunicipio?: boolean
    nombre?: boolean
    municipio?: boolean | Ciudades$municipioArgs<ExtArgs>
  }, ExtArgs["result"]["ciudades"]>

  export type CiudadesSelectScalar = {
    id?: boolean
    idMunicipio?: boolean
    nombre?: boolean
  }

  export type CiudadesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "idMunicipio" | "nombre", ExtArgs["result"]["ciudades"]>
  export type CiudadesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    municipio?: boolean | Ciudades$municipioArgs<ExtArgs>
    localidades?: boolean | Ciudades$localidadesArgs<ExtArgs>
    _count?: boolean | CiudadesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CiudadesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    municipio?: boolean | Ciudades$municipioArgs<ExtArgs>
  }
  export type CiudadesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    municipio?: boolean | Ciudades$municipioArgs<ExtArgs>
  }

  export type $CiudadesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ciudades"
    objects: {
      municipio: Prisma.$MunicipiosPayload<ExtArgs> | null
      localidades: Prisma.$LocalidadesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      idMunicipio: number | null
      nombre: string | null
    }, ExtArgs["result"]["ciudades"]>
    composites: {}
  }

  type CiudadesGetPayload<S extends boolean | null | undefined | CiudadesDefaultArgs> = $Result.GetResult<Prisma.$CiudadesPayload, S>

  type CiudadesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CiudadesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CiudadesCountAggregateInputType | true
    }

  export interface CiudadesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ciudades'], meta: { name: 'Ciudades' } }
    /**
     * Find zero or one Ciudades that matches the filter.
     * @param {CiudadesFindUniqueArgs} args - Arguments to find a Ciudades
     * @example
     * // Get one Ciudades
     * const ciudades = await prisma.ciudades.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CiudadesFindUniqueArgs>(args: SelectSubset<T, CiudadesFindUniqueArgs<ExtArgs>>): Prisma__CiudadesClient<$Result.GetResult<Prisma.$CiudadesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ciudades that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CiudadesFindUniqueOrThrowArgs} args - Arguments to find a Ciudades
     * @example
     * // Get one Ciudades
     * const ciudades = await prisma.ciudades.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CiudadesFindUniqueOrThrowArgs>(args: SelectSubset<T, CiudadesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CiudadesClient<$Result.GetResult<Prisma.$CiudadesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ciudades that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CiudadesFindFirstArgs} args - Arguments to find a Ciudades
     * @example
     * // Get one Ciudades
     * const ciudades = await prisma.ciudades.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CiudadesFindFirstArgs>(args?: SelectSubset<T, CiudadesFindFirstArgs<ExtArgs>>): Prisma__CiudadesClient<$Result.GetResult<Prisma.$CiudadesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ciudades that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CiudadesFindFirstOrThrowArgs} args - Arguments to find a Ciudades
     * @example
     * // Get one Ciudades
     * const ciudades = await prisma.ciudades.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CiudadesFindFirstOrThrowArgs>(args?: SelectSubset<T, CiudadesFindFirstOrThrowArgs<ExtArgs>>): Prisma__CiudadesClient<$Result.GetResult<Prisma.$CiudadesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ciudades that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CiudadesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ciudades
     * const ciudades = await prisma.ciudades.findMany()
     * 
     * // Get first 10 Ciudades
     * const ciudades = await prisma.ciudades.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ciudadesWithIdOnly = await prisma.ciudades.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CiudadesFindManyArgs>(args?: SelectSubset<T, CiudadesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CiudadesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ciudades.
     * @param {CiudadesCreateArgs} args - Arguments to create a Ciudades.
     * @example
     * // Create one Ciudades
     * const Ciudades = await prisma.ciudades.create({
     *   data: {
     *     // ... data to create a Ciudades
     *   }
     * })
     * 
     */
    create<T extends CiudadesCreateArgs>(args: SelectSubset<T, CiudadesCreateArgs<ExtArgs>>): Prisma__CiudadesClient<$Result.GetResult<Prisma.$CiudadesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ciudades.
     * @param {CiudadesCreateManyArgs} args - Arguments to create many Ciudades.
     * @example
     * // Create many Ciudades
     * const ciudades = await prisma.ciudades.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CiudadesCreateManyArgs>(args?: SelectSubset<T, CiudadesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Ciudades and returns the data saved in the database.
     * @param {CiudadesCreateManyAndReturnArgs} args - Arguments to create many Ciudades.
     * @example
     * // Create many Ciudades
     * const ciudades = await prisma.ciudades.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Ciudades and only return the `id`
     * const ciudadesWithIdOnly = await prisma.ciudades.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CiudadesCreateManyAndReturnArgs>(args?: SelectSubset<T, CiudadesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CiudadesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Ciudades.
     * @param {CiudadesDeleteArgs} args - Arguments to delete one Ciudades.
     * @example
     * // Delete one Ciudades
     * const Ciudades = await prisma.ciudades.delete({
     *   where: {
     *     // ... filter to delete one Ciudades
     *   }
     * })
     * 
     */
    delete<T extends CiudadesDeleteArgs>(args: SelectSubset<T, CiudadesDeleteArgs<ExtArgs>>): Prisma__CiudadesClient<$Result.GetResult<Prisma.$CiudadesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ciudades.
     * @param {CiudadesUpdateArgs} args - Arguments to update one Ciudades.
     * @example
     * // Update one Ciudades
     * const ciudades = await prisma.ciudades.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CiudadesUpdateArgs>(args: SelectSubset<T, CiudadesUpdateArgs<ExtArgs>>): Prisma__CiudadesClient<$Result.GetResult<Prisma.$CiudadesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ciudades.
     * @param {CiudadesDeleteManyArgs} args - Arguments to filter Ciudades to delete.
     * @example
     * // Delete a few Ciudades
     * const { count } = await prisma.ciudades.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CiudadesDeleteManyArgs>(args?: SelectSubset<T, CiudadesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ciudades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CiudadesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ciudades
     * const ciudades = await prisma.ciudades.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CiudadesUpdateManyArgs>(args: SelectSubset<T, CiudadesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ciudades and returns the data updated in the database.
     * @param {CiudadesUpdateManyAndReturnArgs} args - Arguments to update many Ciudades.
     * @example
     * // Update many Ciudades
     * const ciudades = await prisma.ciudades.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Ciudades and only return the `id`
     * const ciudadesWithIdOnly = await prisma.ciudades.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CiudadesUpdateManyAndReturnArgs>(args: SelectSubset<T, CiudadesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CiudadesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Ciudades.
     * @param {CiudadesUpsertArgs} args - Arguments to update or create a Ciudades.
     * @example
     * // Update or create a Ciudades
     * const ciudades = await prisma.ciudades.upsert({
     *   create: {
     *     // ... data to create a Ciudades
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ciudades we want to update
     *   }
     * })
     */
    upsert<T extends CiudadesUpsertArgs>(args: SelectSubset<T, CiudadesUpsertArgs<ExtArgs>>): Prisma__CiudadesClient<$Result.GetResult<Prisma.$CiudadesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ciudades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CiudadesCountArgs} args - Arguments to filter Ciudades to count.
     * @example
     * // Count the number of Ciudades
     * const count = await prisma.ciudades.count({
     *   where: {
     *     // ... the filter for the Ciudades we want to count
     *   }
     * })
    **/
    count<T extends CiudadesCountArgs>(
      args?: Subset<T, CiudadesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CiudadesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ciudades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CiudadesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CiudadesAggregateArgs>(args: Subset<T, CiudadesAggregateArgs>): Prisma.PrismaPromise<GetCiudadesAggregateType<T>>

    /**
     * Group by Ciudades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CiudadesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CiudadesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CiudadesGroupByArgs['orderBy'] }
        : { orderBy?: CiudadesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CiudadesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCiudadesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ciudades model
   */
  readonly fields: CiudadesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ciudades.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CiudadesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    municipio<T extends Ciudades$municipioArgs<ExtArgs> = {}>(args?: Subset<T, Ciudades$municipioArgs<ExtArgs>>): Prisma__MunicipiosClient<$Result.GetResult<Prisma.$MunicipiosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    localidades<T extends Ciudades$localidadesArgs<ExtArgs> = {}>(args?: Subset<T, Ciudades$localidadesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocalidadesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Ciudades model
   */
  interface CiudadesFieldRefs {
    readonly id: FieldRef<"Ciudades", 'Int'>
    readonly idMunicipio: FieldRef<"Ciudades", 'Int'>
    readonly nombre: FieldRef<"Ciudades", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Ciudades findUnique
   */
  export type CiudadesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ciudades
     */
    select?: CiudadesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ciudades
     */
    omit?: CiudadesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CiudadesInclude<ExtArgs> | null
    /**
     * Filter, which Ciudades to fetch.
     */
    where: CiudadesWhereUniqueInput
  }

  /**
   * Ciudades findUniqueOrThrow
   */
  export type CiudadesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ciudades
     */
    select?: CiudadesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ciudades
     */
    omit?: CiudadesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CiudadesInclude<ExtArgs> | null
    /**
     * Filter, which Ciudades to fetch.
     */
    where: CiudadesWhereUniqueInput
  }

  /**
   * Ciudades findFirst
   */
  export type CiudadesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ciudades
     */
    select?: CiudadesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ciudades
     */
    omit?: CiudadesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CiudadesInclude<ExtArgs> | null
    /**
     * Filter, which Ciudades to fetch.
     */
    where?: CiudadesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ciudades to fetch.
     */
    orderBy?: CiudadesOrderByWithRelationInput | CiudadesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ciudades.
     */
    cursor?: CiudadesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ciudades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ciudades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ciudades.
     */
    distinct?: CiudadesScalarFieldEnum | CiudadesScalarFieldEnum[]
  }

  /**
   * Ciudades findFirstOrThrow
   */
  export type CiudadesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ciudades
     */
    select?: CiudadesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ciudades
     */
    omit?: CiudadesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CiudadesInclude<ExtArgs> | null
    /**
     * Filter, which Ciudades to fetch.
     */
    where?: CiudadesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ciudades to fetch.
     */
    orderBy?: CiudadesOrderByWithRelationInput | CiudadesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ciudades.
     */
    cursor?: CiudadesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ciudades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ciudades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ciudades.
     */
    distinct?: CiudadesScalarFieldEnum | CiudadesScalarFieldEnum[]
  }

  /**
   * Ciudades findMany
   */
  export type CiudadesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ciudades
     */
    select?: CiudadesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ciudades
     */
    omit?: CiudadesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CiudadesInclude<ExtArgs> | null
    /**
     * Filter, which Ciudades to fetch.
     */
    where?: CiudadesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ciudades to fetch.
     */
    orderBy?: CiudadesOrderByWithRelationInput | CiudadesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Ciudades.
     */
    cursor?: CiudadesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ciudades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ciudades.
     */
    skip?: number
    distinct?: CiudadesScalarFieldEnum | CiudadesScalarFieldEnum[]
  }

  /**
   * Ciudades create
   */
  export type CiudadesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ciudades
     */
    select?: CiudadesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ciudades
     */
    omit?: CiudadesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CiudadesInclude<ExtArgs> | null
    /**
     * The data needed to create a Ciudades.
     */
    data: XOR<CiudadesCreateInput, CiudadesUncheckedCreateInput>
  }

  /**
   * Ciudades createMany
   */
  export type CiudadesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Ciudades.
     */
    data: CiudadesCreateManyInput | CiudadesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ciudades createManyAndReturn
   */
  export type CiudadesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ciudades
     */
    select?: CiudadesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ciudades
     */
    omit?: CiudadesOmit<ExtArgs> | null
    /**
     * The data used to create many Ciudades.
     */
    data: CiudadesCreateManyInput | CiudadesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CiudadesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Ciudades update
   */
  export type CiudadesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ciudades
     */
    select?: CiudadesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ciudades
     */
    omit?: CiudadesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CiudadesInclude<ExtArgs> | null
    /**
     * The data needed to update a Ciudades.
     */
    data: XOR<CiudadesUpdateInput, CiudadesUncheckedUpdateInput>
    /**
     * Choose, which Ciudades to update.
     */
    where: CiudadesWhereUniqueInput
  }

  /**
   * Ciudades updateMany
   */
  export type CiudadesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Ciudades.
     */
    data: XOR<CiudadesUpdateManyMutationInput, CiudadesUncheckedUpdateManyInput>
    /**
     * Filter which Ciudades to update
     */
    where?: CiudadesWhereInput
    /**
     * Limit how many Ciudades to update.
     */
    limit?: number
  }

  /**
   * Ciudades updateManyAndReturn
   */
  export type CiudadesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ciudades
     */
    select?: CiudadesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ciudades
     */
    omit?: CiudadesOmit<ExtArgs> | null
    /**
     * The data used to update Ciudades.
     */
    data: XOR<CiudadesUpdateManyMutationInput, CiudadesUncheckedUpdateManyInput>
    /**
     * Filter which Ciudades to update
     */
    where?: CiudadesWhereInput
    /**
     * Limit how many Ciudades to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CiudadesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Ciudades upsert
   */
  export type CiudadesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ciudades
     */
    select?: CiudadesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ciudades
     */
    omit?: CiudadesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CiudadesInclude<ExtArgs> | null
    /**
     * The filter to search for the Ciudades to update in case it exists.
     */
    where: CiudadesWhereUniqueInput
    /**
     * In case the Ciudades found by the `where` argument doesn't exist, create a new Ciudades with this data.
     */
    create: XOR<CiudadesCreateInput, CiudadesUncheckedCreateInput>
    /**
     * In case the Ciudades was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CiudadesUpdateInput, CiudadesUncheckedUpdateInput>
  }

  /**
   * Ciudades delete
   */
  export type CiudadesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ciudades
     */
    select?: CiudadesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ciudades
     */
    omit?: CiudadesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CiudadesInclude<ExtArgs> | null
    /**
     * Filter which Ciudades to delete.
     */
    where: CiudadesWhereUniqueInput
  }

  /**
   * Ciudades deleteMany
   */
  export type CiudadesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ciudades to delete
     */
    where?: CiudadesWhereInput
    /**
     * Limit how many Ciudades to delete.
     */
    limit?: number
  }

  /**
   * Ciudades.municipio
   */
  export type Ciudades$municipioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Municipios
     */
    select?: MunicipiosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Municipios
     */
    omit?: MunicipiosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MunicipiosInclude<ExtArgs> | null
    where?: MunicipiosWhereInput
  }

  /**
   * Ciudades.localidades
   */
  export type Ciudades$localidadesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Localidades
     */
    select?: LocalidadesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Localidades
     */
    omit?: LocalidadesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalidadesInclude<ExtArgs> | null
    where?: LocalidadesWhereInput
    orderBy?: LocalidadesOrderByWithRelationInput | LocalidadesOrderByWithRelationInput[]
    cursor?: LocalidadesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LocalidadesScalarFieldEnum | LocalidadesScalarFieldEnum[]
  }

  /**
   * Ciudades without action
   */
  export type CiudadesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ciudades
     */
    select?: CiudadesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ciudades
     */
    omit?: CiudadesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CiudadesInclude<ExtArgs> | null
  }


  /**
   * Model Clientes
   */

  export type AggregateClientes = {
    _count: ClientesCountAggregateOutputType | null
    _avg: ClientesAvgAggregateOutputType | null
    _sum: ClientesSumAggregateOutputType | null
    _min: ClientesMinAggregateOutputType | null
    _max: ClientesMaxAggregateOutputType | null
  }

  export type ClientesAvgAggregateOutputType = {
    id: number | null
    idDireccion: number | null
    idUsuario: number | null
  }

  export type ClientesSumAggregateOutputType = {
    id: number | null
    idDireccion: number | null
    idUsuario: number | null
  }

  export type ClientesMinAggregateOutputType = {
    id: number | null
    idDireccion: number | null
    idUsuario: number | null
    nombre: string | null
    apellidoPaterno: string | null
    apellidoMaterno: string | null
    rfc: string | null
    ine: string | null
    comprobanteDomicilio: string | null
    curp: string | null
    fechaNacimiento: Date | null
    estatus: boolean | null
  }

  export type ClientesMaxAggregateOutputType = {
    id: number | null
    idDireccion: number | null
    idUsuario: number | null
    nombre: string | null
    apellidoPaterno: string | null
    apellidoMaterno: string | null
    rfc: string | null
    ine: string | null
    comprobanteDomicilio: string | null
    curp: string | null
    fechaNacimiento: Date | null
    estatus: boolean | null
  }

  export type ClientesCountAggregateOutputType = {
    id: number
    idDireccion: number
    idUsuario: number
    nombre: number
    apellidoPaterno: number
    apellidoMaterno: number
    rfc: number
    ine: number
    comprobanteDomicilio: number
    curp: number
    fechaNacimiento: number
    estatus: number
    _all: number
  }


  export type ClientesAvgAggregateInputType = {
    id?: true
    idDireccion?: true
    idUsuario?: true
  }

  export type ClientesSumAggregateInputType = {
    id?: true
    idDireccion?: true
    idUsuario?: true
  }

  export type ClientesMinAggregateInputType = {
    id?: true
    idDireccion?: true
    idUsuario?: true
    nombre?: true
    apellidoPaterno?: true
    apellidoMaterno?: true
    rfc?: true
    ine?: true
    comprobanteDomicilio?: true
    curp?: true
    fechaNacimiento?: true
    estatus?: true
  }

  export type ClientesMaxAggregateInputType = {
    id?: true
    idDireccion?: true
    idUsuario?: true
    nombre?: true
    apellidoPaterno?: true
    apellidoMaterno?: true
    rfc?: true
    ine?: true
    comprobanteDomicilio?: true
    curp?: true
    fechaNacimiento?: true
    estatus?: true
  }

  export type ClientesCountAggregateInputType = {
    id?: true
    idDireccion?: true
    idUsuario?: true
    nombre?: true
    apellidoPaterno?: true
    apellidoMaterno?: true
    rfc?: true
    ine?: true
    comprobanteDomicilio?: true
    curp?: true
    fechaNacimiento?: true
    estatus?: true
    _all?: true
  }

  export type ClientesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clientes to aggregate.
     */
    where?: ClientesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClientesOrderByWithRelationInput | ClientesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClientesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Clientes
    **/
    _count?: true | ClientesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClientesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClientesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClientesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClientesMaxAggregateInputType
  }

  export type GetClientesAggregateType<T extends ClientesAggregateArgs> = {
        [P in keyof T & keyof AggregateClientes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClientes[P]>
      : GetScalarType<T[P], AggregateClientes[P]>
  }




  export type ClientesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClientesWhereInput
    orderBy?: ClientesOrderByWithAggregationInput | ClientesOrderByWithAggregationInput[]
    by: ClientesScalarFieldEnum[] | ClientesScalarFieldEnum
    having?: ClientesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClientesCountAggregateInputType | true
    _avg?: ClientesAvgAggregateInputType
    _sum?: ClientesSumAggregateInputType
    _min?: ClientesMinAggregateInputType
    _max?: ClientesMaxAggregateInputType
  }

  export type ClientesGroupByOutputType = {
    id: number
    idDireccion: number | null
    idUsuario: number | null
    nombre: string | null
    apellidoPaterno: string | null
    apellidoMaterno: string | null
    rfc: string | null
    ine: string | null
    comprobanteDomicilio: string | null
    curp: string | null
    fechaNacimiento: Date | null
    estatus: boolean | null
    _count: ClientesCountAggregateOutputType | null
    _avg: ClientesAvgAggregateOutputType | null
    _sum: ClientesSumAggregateOutputType | null
    _min: ClientesMinAggregateOutputType | null
    _max: ClientesMaxAggregateOutputType | null
  }

  type GetClientesGroupByPayload<T extends ClientesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClientesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClientesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClientesGroupByOutputType[P]>
            : GetScalarType<T[P], ClientesGroupByOutputType[P]>
        }
      >
    >


  export type ClientesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idDireccion?: boolean
    idUsuario?: boolean
    nombre?: boolean
    apellidoPaterno?: boolean
    apellidoMaterno?: boolean
    rfc?: boolean
    ine?: boolean
    comprobanteDomicilio?: boolean
    curp?: boolean
    fechaNacimiento?: boolean
    estatus?: boolean
    direccion?: boolean | Clientes$direccionArgs<ExtArgs>
    usuario?: boolean | Clientes$usuarioArgs<ExtArgs>
    prestamos?: boolean | Clientes$prestamosArgs<ExtArgs>
    _count?: boolean | ClientesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["clientes"]>

  export type ClientesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idDireccion?: boolean
    idUsuario?: boolean
    nombre?: boolean
    apellidoPaterno?: boolean
    apellidoMaterno?: boolean
    rfc?: boolean
    ine?: boolean
    comprobanteDomicilio?: boolean
    curp?: boolean
    fechaNacimiento?: boolean
    estatus?: boolean
    direccion?: boolean | Clientes$direccionArgs<ExtArgs>
    usuario?: boolean | Clientes$usuarioArgs<ExtArgs>
  }, ExtArgs["result"]["clientes"]>

  export type ClientesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idDireccion?: boolean
    idUsuario?: boolean
    nombre?: boolean
    apellidoPaterno?: boolean
    apellidoMaterno?: boolean
    rfc?: boolean
    ine?: boolean
    comprobanteDomicilio?: boolean
    curp?: boolean
    fechaNacimiento?: boolean
    estatus?: boolean
    direccion?: boolean | Clientes$direccionArgs<ExtArgs>
    usuario?: boolean | Clientes$usuarioArgs<ExtArgs>
  }, ExtArgs["result"]["clientes"]>

  export type ClientesSelectScalar = {
    id?: boolean
    idDireccion?: boolean
    idUsuario?: boolean
    nombre?: boolean
    apellidoPaterno?: boolean
    apellidoMaterno?: boolean
    rfc?: boolean
    ine?: boolean
    comprobanteDomicilio?: boolean
    curp?: boolean
    fechaNacimiento?: boolean
    estatus?: boolean
  }

  export type ClientesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "idDireccion" | "idUsuario" | "nombre" | "apellidoPaterno" | "apellidoMaterno" | "rfc" | "ine" | "comprobanteDomicilio" | "curp" | "fechaNacimiento" | "estatus", ExtArgs["result"]["clientes"]>
  export type ClientesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    direccion?: boolean | Clientes$direccionArgs<ExtArgs>
    usuario?: boolean | Clientes$usuarioArgs<ExtArgs>
    prestamos?: boolean | Clientes$prestamosArgs<ExtArgs>
    _count?: boolean | ClientesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClientesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    direccion?: boolean | Clientes$direccionArgs<ExtArgs>
    usuario?: boolean | Clientes$usuarioArgs<ExtArgs>
  }
  export type ClientesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    direccion?: boolean | Clientes$direccionArgs<ExtArgs>
    usuario?: boolean | Clientes$usuarioArgs<ExtArgs>
  }

  export type $ClientesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Clientes"
    objects: {
      direccion: Prisma.$DireccionesPayload<ExtArgs> | null
      usuario: Prisma.$UsuariosPayload<ExtArgs> | null
      prestamos: Prisma.$PrestamosPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      idDireccion: number | null
      idUsuario: number | null
      nombre: string | null
      apellidoPaterno: string | null
      apellidoMaterno: string | null
      rfc: string | null
      ine: string | null
      comprobanteDomicilio: string | null
      curp: string | null
      fechaNacimiento: Date | null
      estatus: boolean | null
    }, ExtArgs["result"]["clientes"]>
    composites: {}
  }

  type ClientesGetPayload<S extends boolean | null | undefined | ClientesDefaultArgs> = $Result.GetResult<Prisma.$ClientesPayload, S>

  type ClientesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClientesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClientesCountAggregateInputType | true
    }

  export interface ClientesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Clientes'], meta: { name: 'Clientes' } }
    /**
     * Find zero or one Clientes that matches the filter.
     * @param {ClientesFindUniqueArgs} args - Arguments to find a Clientes
     * @example
     * // Get one Clientes
     * const clientes = await prisma.clientes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClientesFindUniqueArgs>(args: SelectSubset<T, ClientesFindUniqueArgs<ExtArgs>>): Prisma__ClientesClient<$Result.GetResult<Prisma.$ClientesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Clientes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClientesFindUniqueOrThrowArgs} args - Arguments to find a Clientes
     * @example
     * // Get one Clientes
     * const clientes = await prisma.clientes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClientesFindUniqueOrThrowArgs>(args: SelectSubset<T, ClientesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClientesClient<$Result.GetResult<Prisma.$ClientesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Clientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientesFindFirstArgs} args - Arguments to find a Clientes
     * @example
     * // Get one Clientes
     * const clientes = await prisma.clientes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClientesFindFirstArgs>(args?: SelectSubset<T, ClientesFindFirstArgs<ExtArgs>>): Prisma__ClientesClient<$Result.GetResult<Prisma.$ClientesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Clientes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientesFindFirstOrThrowArgs} args - Arguments to find a Clientes
     * @example
     * // Get one Clientes
     * const clientes = await prisma.clientes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClientesFindFirstOrThrowArgs>(args?: SelectSubset<T, ClientesFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClientesClient<$Result.GetResult<Prisma.$ClientesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Clientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clientes
     * const clientes = await prisma.clientes.findMany()
     * 
     * // Get first 10 Clientes
     * const clientes = await prisma.clientes.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clientesWithIdOnly = await prisma.clientes.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClientesFindManyArgs>(args?: SelectSubset<T, ClientesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Clientes.
     * @param {ClientesCreateArgs} args - Arguments to create a Clientes.
     * @example
     * // Create one Clientes
     * const Clientes = await prisma.clientes.create({
     *   data: {
     *     // ... data to create a Clientes
     *   }
     * })
     * 
     */
    create<T extends ClientesCreateArgs>(args: SelectSubset<T, ClientesCreateArgs<ExtArgs>>): Prisma__ClientesClient<$Result.GetResult<Prisma.$ClientesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Clientes.
     * @param {ClientesCreateManyArgs} args - Arguments to create many Clientes.
     * @example
     * // Create many Clientes
     * const clientes = await prisma.clientes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClientesCreateManyArgs>(args?: SelectSubset<T, ClientesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Clientes and returns the data saved in the database.
     * @param {ClientesCreateManyAndReturnArgs} args - Arguments to create many Clientes.
     * @example
     * // Create many Clientes
     * const clientes = await prisma.clientes.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Clientes and only return the `id`
     * const clientesWithIdOnly = await prisma.clientes.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClientesCreateManyAndReturnArgs>(args?: SelectSubset<T, ClientesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Clientes.
     * @param {ClientesDeleteArgs} args - Arguments to delete one Clientes.
     * @example
     * // Delete one Clientes
     * const Clientes = await prisma.clientes.delete({
     *   where: {
     *     // ... filter to delete one Clientes
     *   }
     * })
     * 
     */
    delete<T extends ClientesDeleteArgs>(args: SelectSubset<T, ClientesDeleteArgs<ExtArgs>>): Prisma__ClientesClient<$Result.GetResult<Prisma.$ClientesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Clientes.
     * @param {ClientesUpdateArgs} args - Arguments to update one Clientes.
     * @example
     * // Update one Clientes
     * const clientes = await prisma.clientes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClientesUpdateArgs>(args: SelectSubset<T, ClientesUpdateArgs<ExtArgs>>): Prisma__ClientesClient<$Result.GetResult<Prisma.$ClientesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Clientes.
     * @param {ClientesDeleteManyArgs} args - Arguments to filter Clientes to delete.
     * @example
     * // Delete a few Clientes
     * const { count } = await prisma.clientes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClientesDeleteManyArgs>(args?: SelectSubset<T, ClientesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clientes
     * const clientes = await prisma.clientes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClientesUpdateManyArgs>(args: SelectSubset<T, ClientesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clientes and returns the data updated in the database.
     * @param {ClientesUpdateManyAndReturnArgs} args - Arguments to update many Clientes.
     * @example
     * // Update many Clientes
     * const clientes = await prisma.clientes.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Clientes and only return the `id`
     * const clientesWithIdOnly = await prisma.clientes.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ClientesUpdateManyAndReturnArgs>(args: SelectSubset<T, ClientesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Clientes.
     * @param {ClientesUpsertArgs} args - Arguments to update or create a Clientes.
     * @example
     * // Update or create a Clientes
     * const clientes = await prisma.clientes.upsert({
     *   create: {
     *     // ... data to create a Clientes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Clientes we want to update
     *   }
     * })
     */
    upsert<T extends ClientesUpsertArgs>(args: SelectSubset<T, ClientesUpsertArgs<ExtArgs>>): Prisma__ClientesClient<$Result.GetResult<Prisma.$ClientesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientesCountArgs} args - Arguments to filter Clientes to count.
     * @example
     * // Count the number of Clientes
     * const count = await prisma.clientes.count({
     *   where: {
     *     // ... the filter for the Clientes we want to count
     *   }
     * })
    **/
    count<T extends ClientesCountArgs>(
      args?: Subset<T, ClientesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClientesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClientesAggregateArgs>(args: Subset<T, ClientesAggregateArgs>): Prisma.PrismaPromise<GetClientesAggregateType<T>>

    /**
     * Group by Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClientesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClientesGroupByArgs['orderBy'] }
        : { orderBy?: ClientesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClientesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClientesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Clientes model
   */
  readonly fields: ClientesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Clientes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClientesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    direccion<T extends Clientes$direccionArgs<ExtArgs> = {}>(args?: Subset<T, Clientes$direccionArgs<ExtArgs>>): Prisma__DireccionesClient<$Result.GetResult<Prisma.$DireccionesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    usuario<T extends Clientes$usuarioArgs<ExtArgs> = {}>(args?: Subset<T, Clientes$usuarioArgs<ExtArgs>>): Prisma__UsuariosClient<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    prestamos<T extends Clientes$prestamosArgs<ExtArgs> = {}>(args?: Subset<T, Clientes$prestamosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrestamosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Clientes model
   */
  interface ClientesFieldRefs {
    readonly id: FieldRef<"Clientes", 'Int'>
    readonly idDireccion: FieldRef<"Clientes", 'Int'>
    readonly idUsuario: FieldRef<"Clientes", 'Int'>
    readonly nombre: FieldRef<"Clientes", 'String'>
    readonly apellidoPaterno: FieldRef<"Clientes", 'String'>
    readonly apellidoMaterno: FieldRef<"Clientes", 'String'>
    readonly rfc: FieldRef<"Clientes", 'String'>
    readonly ine: FieldRef<"Clientes", 'String'>
    readonly comprobanteDomicilio: FieldRef<"Clientes", 'String'>
    readonly curp: FieldRef<"Clientes", 'String'>
    readonly fechaNacimiento: FieldRef<"Clientes", 'DateTime'>
    readonly estatus: FieldRef<"Clientes", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Clientes findUnique
   */
  export type ClientesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clientes
     */
    select?: ClientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clientes
     */
    omit?: ClientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientesInclude<ExtArgs> | null
    /**
     * Filter, which Clientes to fetch.
     */
    where: ClientesWhereUniqueInput
  }

  /**
   * Clientes findUniqueOrThrow
   */
  export type ClientesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clientes
     */
    select?: ClientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clientes
     */
    omit?: ClientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientesInclude<ExtArgs> | null
    /**
     * Filter, which Clientes to fetch.
     */
    where: ClientesWhereUniqueInput
  }

  /**
   * Clientes findFirst
   */
  export type ClientesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clientes
     */
    select?: ClientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clientes
     */
    omit?: ClientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientesInclude<ExtArgs> | null
    /**
     * Filter, which Clientes to fetch.
     */
    where?: ClientesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClientesOrderByWithRelationInput | ClientesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clientes.
     */
    cursor?: ClientesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clientes.
     */
    distinct?: ClientesScalarFieldEnum | ClientesScalarFieldEnum[]
  }

  /**
   * Clientes findFirstOrThrow
   */
  export type ClientesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clientes
     */
    select?: ClientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clientes
     */
    omit?: ClientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientesInclude<ExtArgs> | null
    /**
     * Filter, which Clientes to fetch.
     */
    where?: ClientesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClientesOrderByWithRelationInput | ClientesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clientes.
     */
    cursor?: ClientesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clientes.
     */
    distinct?: ClientesScalarFieldEnum | ClientesScalarFieldEnum[]
  }

  /**
   * Clientes findMany
   */
  export type ClientesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clientes
     */
    select?: ClientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clientes
     */
    omit?: ClientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientesInclude<ExtArgs> | null
    /**
     * Filter, which Clientes to fetch.
     */
    where?: ClientesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClientesOrderByWithRelationInput | ClientesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clientes.
     */
    cursor?: ClientesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    distinct?: ClientesScalarFieldEnum | ClientesScalarFieldEnum[]
  }

  /**
   * Clientes create
   */
  export type ClientesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clientes
     */
    select?: ClientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clientes
     */
    omit?: ClientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientesInclude<ExtArgs> | null
    /**
     * The data needed to create a Clientes.
     */
    data: XOR<ClientesCreateInput, ClientesUncheckedCreateInput>
  }

  /**
   * Clientes createMany
   */
  export type ClientesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Clientes.
     */
    data: ClientesCreateManyInput | ClientesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Clientes createManyAndReturn
   */
  export type ClientesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clientes
     */
    select?: ClientesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Clientes
     */
    omit?: ClientesOmit<ExtArgs> | null
    /**
     * The data used to create many Clientes.
     */
    data: ClientesCreateManyInput | ClientesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Clientes update
   */
  export type ClientesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clientes
     */
    select?: ClientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clientes
     */
    omit?: ClientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientesInclude<ExtArgs> | null
    /**
     * The data needed to update a Clientes.
     */
    data: XOR<ClientesUpdateInput, ClientesUncheckedUpdateInput>
    /**
     * Choose, which Clientes to update.
     */
    where: ClientesWhereUniqueInput
  }

  /**
   * Clientes updateMany
   */
  export type ClientesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Clientes.
     */
    data: XOR<ClientesUpdateManyMutationInput, ClientesUncheckedUpdateManyInput>
    /**
     * Filter which Clientes to update
     */
    where?: ClientesWhereInput
    /**
     * Limit how many Clientes to update.
     */
    limit?: number
  }

  /**
   * Clientes updateManyAndReturn
   */
  export type ClientesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clientes
     */
    select?: ClientesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Clientes
     */
    omit?: ClientesOmit<ExtArgs> | null
    /**
     * The data used to update Clientes.
     */
    data: XOR<ClientesUpdateManyMutationInput, ClientesUncheckedUpdateManyInput>
    /**
     * Filter which Clientes to update
     */
    where?: ClientesWhereInput
    /**
     * Limit how many Clientes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Clientes upsert
   */
  export type ClientesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clientes
     */
    select?: ClientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clientes
     */
    omit?: ClientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientesInclude<ExtArgs> | null
    /**
     * The filter to search for the Clientes to update in case it exists.
     */
    where: ClientesWhereUniqueInput
    /**
     * In case the Clientes found by the `where` argument doesn't exist, create a new Clientes with this data.
     */
    create: XOR<ClientesCreateInput, ClientesUncheckedCreateInput>
    /**
     * In case the Clientes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClientesUpdateInput, ClientesUncheckedUpdateInput>
  }

  /**
   * Clientes delete
   */
  export type ClientesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clientes
     */
    select?: ClientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clientes
     */
    omit?: ClientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientesInclude<ExtArgs> | null
    /**
     * Filter which Clientes to delete.
     */
    where: ClientesWhereUniqueInput
  }

  /**
   * Clientes deleteMany
   */
  export type ClientesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clientes to delete
     */
    where?: ClientesWhereInput
    /**
     * Limit how many Clientes to delete.
     */
    limit?: number
  }

  /**
   * Clientes.direccion
   */
  export type Clientes$direccionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Direcciones
     */
    select?: DireccionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Direcciones
     */
    omit?: DireccionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DireccionesInclude<ExtArgs> | null
    where?: DireccionesWhereInput
  }

  /**
   * Clientes.usuario
   */
  export type Clientes$usuarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuarios
     */
    omit?: UsuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuariosInclude<ExtArgs> | null
    where?: UsuariosWhereInput
  }

  /**
   * Clientes.prestamos
   */
  export type Clientes$prestamosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prestamos
     */
    select?: PrestamosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prestamos
     */
    omit?: PrestamosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrestamosInclude<ExtArgs> | null
    where?: PrestamosWhereInput
    orderBy?: PrestamosOrderByWithRelationInput | PrestamosOrderByWithRelationInput[]
    cursor?: PrestamosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PrestamosScalarFieldEnum | PrestamosScalarFieldEnum[]
  }

  /**
   * Clientes without action
   */
  export type ClientesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clientes
     */
    select?: ClientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clientes
     */
    omit?: ClientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientesInclude<ExtArgs> | null
  }


  /**
   * Model Contratos
   */

  export type AggregateContratos = {
    _count: ContratosCountAggregateOutputType | null
    _avg: ContratosAvgAggregateOutputType | null
    _sum: ContratosSumAggregateOutputType | null
    _min: ContratosMinAggregateOutputType | null
    _max: ContratosMaxAggregateOutputType | null
  }

  export type ContratosAvgAggregateOutputType = {
    id: number | null
    idPrestamos: number | null
  }

  export type ContratosSumAggregateOutputType = {
    id: number | null
    idPrestamos: number | null
  }

  export type ContratosMinAggregateOutputType = {
    id: number | null
    idPrestamos: number | null
    url: string | null
    status: boolean | null
  }

  export type ContratosMaxAggregateOutputType = {
    id: number | null
    idPrestamos: number | null
    url: string | null
    status: boolean | null
  }

  export type ContratosCountAggregateOutputType = {
    id: number
    idPrestamos: number
    url: number
    status: number
    _all: number
  }


  export type ContratosAvgAggregateInputType = {
    id?: true
    idPrestamos?: true
  }

  export type ContratosSumAggregateInputType = {
    id?: true
    idPrestamos?: true
  }

  export type ContratosMinAggregateInputType = {
    id?: true
    idPrestamos?: true
    url?: true
    status?: true
  }

  export type ContratosMaxAggregateInputType = {
    id?: true
    idPrestamos?: true
    url?: true
    status?: true
  }

  export type ContratosCountAggregateInputType = {
    id?: true
    idPrestamos?: true
    url?: true
    status?: true
    _all?: true
  }

  export type ContratosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contratos to aggregate.
     */
    where?: ContratosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contratos to fetch.
     */
    orderBy?: ContratosOrderByWithRelationInput | ContratosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContratosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contratos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contratos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Contratos
    **/
    _count?: true | ContratosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ContratosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ContratosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContratosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContratosMaxAggregateInputType
  }

  export type GetContratosAggregateType<T extends ContratosAggregateArgs> = {
        [P in keyof T & keyof AggregateContratos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContratos[P]>
      : GetScalarType<T[P], AggregateContratos[P]>
  }




  export type ContratosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContratosWhereInput
    orderBy?: ContratosOrderByWithAggregationInput | ContratosOrderByWithAggregationInput[]
    by: ContratosScalarFieldEnum[] | ContratosScalarFieldEnum
    having?: ContratosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContratosCountAggregateInputType | true
    _avg?: ContratosAvgAggregateInputType
    _sum?: ContratosSumAggregateInputType
    _min?: ContratosMinAggregateInputType
    _max?: ContratosMaxAggregateInputType
  }

  export type ContratosGroupByOutputType = {
    id: number
    idPrestamos: number | null
    url: string | null
    status: boolean | null
    _count: ContratosCountAggregateOutputType | null
    _avg: ContratosAvgAggregateOutputType | null
    _sum: ContratosSumAggregateOutputType | null
    _min: ContratosMinAggregateOutputType | null
    _max: ContratosMaxAggregateOutputType | null
  }

  type GetContratosGroupByPayload<T extends ContratosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContratosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContratosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContratosGroupByOutputType[P]>
            : GetScalarType<T[P], ContratosGroupByOutputType[P]>
        }
      >
    >


  export type ContratosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idPrestamos?: boolean
    url?: boolean
    status?: boolean
    prestamo?: boolean | Contratos$prestamoArgs<ExtArgs>
  }, ExtArgs["result"]["contratos"]>

  export type ContratosSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idPrestamos?: boolean
    url?: boolean
    status?: boolean
    prestamo?: boolean | Contratos$prestamoArgs<ExtArgs>
  }, ExtArgs["result"]["contratos"]>

  export type ContratosSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idPrestamos?: boolean
    url?: boolean
    status?: boolean
    prestamo?: boolean | Contratos$prestamoArgs<ExtArgs>
  }, ExtArgs["result"]["contratos"]>

  export type ContratosSelectScalar = {
    id?: boolean
    idPrestamos?: boolean
    url?: boolean
    status?: boolean
  }

  export type ContratosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "idPrestamos" | "url" | "status", ExtArgs["result"]["contratos"]>
  export type ContratosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prestamo?: boolean | Contratos$prestamoArgs<ExtArgs>
  }
  export type ContratosIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prestamo?: boolean | Contratos$prestamoArgs<ExtArgs>
  }
  export type ContratosIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prestamo?: boolean | Contratos$prestamoArgs<ExtArgs>
  }

  export type $ContratosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Contratos"
    objects: {
      prestamo: Prisma.$PrestamosPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      idPrestamos: number | null
      url: string | null
      status: boolean | null
    }, ExtArgs["result"]["contratos"]>
    composites: {}
  }

  type ContratosGetPayload<S extends boolean | null | undefined | ContratosDefaultArgs> = $Result.GetResult<Prisma.$ContratosPayload, S>

  type ContratosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContratosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContratosCountAggregateInputType | true
    }

  export interface ContratosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Contratos'], meta: { name: 'Contratos' } }
    /**
     * Find zero or one Contratos that matches the filter.
     * @param {ContratosFindUniqueArgs} args - Arguments to find a Contratos
     * @example
     * // Get one Contratos
     * const contratos = await prisma.contratos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContratosFindUniqueArgs>(args: SelectSubset<T, ContratosFindUniqueArgs<ExtArgs>>): Prisma__ContratosClient<$Result.GetResult<Prisma.$ContratosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Contratos that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContratosFindUniqueOrThrowArgs} args - Arguments to find a Contratos
     * @example
     * // Get one Contratos
     * const contratos = await prisma.contratos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContratosFindUniqueOrThrowArgs>(args: SelectSubset<T, ContratosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContratosClient<$Result.GetResult<Prisma.$ContratosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contratos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContratosFindFirstArgs} args - Arguments to find a Contratos
     * @example
     * // Get one Contratos
     * const contratos = await prisma.contratos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContratosFindFirstArgs>(args?: SelectSubset<T, ContratosFindFirstArgs<ExtArgs>>): Prisma__ContratosClient<$Result.GetResult<Prisma.$ContratosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contratos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContratosFindFirstOrThrowArgs} args - Arguments to find a Contratos
     * @example
     * // Get one Contratos
     * const contratos = await prisma.contratos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContratosFindFirstOrThrowArgs>(args?: SelectSubset<T, ContratosFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContratosClient<$Result.GetResult<Prisma.$ContratosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Contratos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContratosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Contratos
     * const contratos = await prisma.contratos.findMany()
     * 
     * // Get first 10 Contratos
     * const contratos = await prisma.contratos.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contratosWithIdOnly = await prisma.contratos.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContratosFindManyArgs>(args?: SelectSubset<T, ContratosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContratosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Contratos.
     * @param {ContratosCreateArgs} args - Arguments to create a Contratos.
     * @example
     * // Create one Contratos
     * const Contratos = await prisma.contratos.create({
     *   data: {
     *     // ... data to create a Contratos
     *   }
     * })
     * 
     */
    create<T extends ContratosCreateArgs>(args: SelectSubset<T, ContratosCreateArgs<ExtArgs>>): Prisma__ContratosClient<$Result.GetResult<Prisma.$ContratosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Contratos.
     * @param {ContratosCreateManyArgs} args - Arguments to create many Contratos.
     * @example
     * // Create many Contratos
     * const contratos = await prisma.contratos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContratosCreateManyArgs>(args?: SelectSubset<T, ContratosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Contratos and returns the data saved in the database.
     * @param {ContratosCreateManyAndReturnArgs} args - Arguments to create many Contratos.
     * @example
     * // Create many Contratos
     * const contratos = await prisma.contratos.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Contratos and only return the `id`
     * const contratosWithIdOnly = await prisma.contratos.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ContratosCreateManyAndReturnArgs>(args?: SelectSubset<T, ContratosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContratosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Contratos.
     * @param {ContratosDeleteArgs} args - Arguments to delete one Contratos.
     * @example
     * // Delete one Contratos
     * const Contratos = await prisma.contratos.delete({
     *   where: {
     *     // ... filter to delete one Contratos
     *   }
     * })
     * 
     */
    delete<T extends ContratosDeleteArgs>(args: SelectSubset<T, ContratosDeleteArgs<ExtArgs>>): Prisma__ContratosClient<$Result.GetResult<Prisma.$ContratosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Contratos.
     * @param {ContratosUpdateArgs} args - Arguments to update one Contratos.
     * @example
     * // Update one Contratos
     * const contratos = await prisma.contratos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContratosUpdateArgs>(args: SelectSubset<T, ContratosUpdateArgs<ExtArgs>>): Prisma__ContratosClient<$Result.GetResult<Prisma.$ContratosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Contratos.
     * @param {ContratosDeleteManyArgs} args - Arguments to filter Contratos to delete.
     * @example
     * // Delete a few Contratos
     * const { count } = await prisma.contratos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContratosDeleteManyArgs>(args?: SelectSubset<T, ContratosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contratos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContratosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Contratos
     * const contratos = await prisma.contratos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContratosUpdateManyArgs>(args: SelectSubset<T, ContratosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contratos and returns the data updated in the database.
     * @param {ContratosUpdateManyAndReturnArgs} args - Arguments to update many Contratos.
     * @example
     * // Update many Contratos
     * const contratos = await prisma.contratos.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Contratos and only return the `id`
     * const contratosWithIdOnly = await prisma.contratos.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ContratosUpdateManyAndReturnArgs>(args: SelectSubset<T, ContratosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContratosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Contratos.
     * @param {ContratosUpsertArgs} args - Arguments to update or create a Contratos.
     * @example
     * // Update or create a Contratos
     * const contratos = await prisma.contratos.upsert({
     *   create: {
     *     // ... data to create a Contratos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Contratos we want to update
     *   }
     * })
     */
    upsert<T extends ContratosUpsertArgs>(args: SelectSubset<T, ContratosUpsertArgs<ExtArgs>>): Prisma__ContratosClient<$Result.GetResult<Prisma.$ContratosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Contratos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContratosCountArgs} args - Arguments to filter Contratos to count.
     * @example
     * // Count the number of Contratos
     * const count = await prisma.contratos.count({
     *   where: {
     *     // ... the filter for the Contratos we want to count
     *   }
     * })
    **/
    count<T extends ContratosCountArgs>(
      args?: Subset<T, ContratosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContratosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Contratos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContratosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ContratosAggregateArgs>(args: Subset<T, ContratosAggregateArgs>): Prisma.PrismaPromise<GetContratosAggregateType<T>>

    /**
     * Group by Contratos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContratosGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ContratosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContratosGroupByArgs['orderBy'] }
        : { orderBy?: ContratosGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ContratosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContratosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Contratos model
   */
  readonly fields: ContratosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Contratos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContratosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    prestamo<T extends Contratos$prestamoArgs<ExtArgs> = {}>(args?: Subset<T, Contratos$prestamoArgs<ExtArgs>>): Prisma__PrestamosClient<$Result.GetResult<Prisma.$PrestamosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Contratos model
   */
  interface ContratosFieldRefs {
    readonly id: FieldRef<"Contratos", 'Int'>
    readonly idPrestamos: FieldRef<"Contratos", 'Int'>
    readonly url: FieldRef<"Contratos", 'String'>
    readonly status: FieldRef<"Contratos", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Contratos findUnique
   */
  export type ContratosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contratos
     */
    select?: ContratosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contratos
     */
    omit?: ContratosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContratosInclude<ExtArgs> | null
    /**
     * Filter, which Contratos to fetch.
     */
    where: ContratosWhereUniqueInput
  }

  /**
   * Contratos findUniqueOrThrow
   */
  export type ContratosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contratos
     */
    select?: ContratosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contratos
     */
    omit?: ContratosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContratosInclude<ExtArgs> | null
    /**
     * Filter, which Contratos to fetch.
     */
    where: ContratosWhereUniqueInput
  }

  /**
   * Contratos findFirst
   */
  export type ContratosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contratos
     */
    select?: ContratosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contratos
     */
    omit?: ContratosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContratosInclude<ExtArgs> | null
    /**
     * Filter, which Contratos to fetch.
     */
    where?: ContratosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contratos to fetch.
     */
    orderBy?: ContratosOrderByWithRelationInput | ContratosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contratos.
     */
    cursor?: ContratosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contratos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contratos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contratos.
     */
    distinct?: ContratosScalarFieldEnum | ContratosScalarFieldEnum[]
  }

  /**
   * Contratos findFirstOrThrow
   */
  export type ContratosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contratos
     */
    select?: ContratosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contratos
     */
    omit?: ContratosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContratosInclude<ExtArgs> | null
    /**
     * Filter, which Contratos to fetch.
     */
    where?: ContratosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contratos to fetch.
     */
    orderBy?: ContratosOrderByWithRelationInput | ContratosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contratos.
     */
    cursor?: ContratosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contratos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contratos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contratos.
     */
    distinct?: ContratosScalarFieldEnum | ContratosScalarFieldEnum[]
  }

  /**
   * Contratos findMany
   */
  export type ContratosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contratos
     */
    select?: ContratosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contratos
     */
    omit?: ContratosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContratosInclude<ExtArgs> | null
    /**
     * Filter, which Contratos to fetch.
     */
    where?: ContratosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contratos to fetch.
     */
    orderBy?: ContratosOrderByWithRelationInput | ContratosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Contratos.
     */
    cursor?: ContratosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contratos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contratos.
     */
    skip?: number
    distinct?: ContratosScalarFieldEnum | ContratosScalarFieldEnum[]
  }

  /**
   * Contratos create
   */
  export type ContratosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contratos
     */
    select?: ContratosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contratos
     */
    omit?: ContratosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContratosInclude<ExtArgs> | null
    /**
     * The data needed to create a Contratos.
     */
    data: XOR<ContratosCreateInput, ContratosUncheckedCreateInput>
  }

  /**
   * Contratos createMany
   */
  export type ContratosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Contratos.
     */
    data: ContratosCreateManyInput | ContratosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Contratos createManyAndReturn
   */
  export type ContratosCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contratos
     */
    select?: ContratosSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Contratos
     */
    omit?: ContratosOmit<ExtArgs> | null
    /**
     * The data used to create many Contratos.
     */
    data: ContratosCreateManyInput | ContratosCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContratosIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Contratos update
   */
  export type ContratosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contratos
     */
    select?: ContratosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contratos
     */
    omit?: ContratosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContratosInclude<ExtArgs> | null
    /**
     * The data needed to update a Contratos.
     */
    data: XOR<ContratosUpdateInput, ContratosUncheckedUpdateInput>
    /**
     * Choose, which Contratos to update.
     */
    where: ContratosWhereUniqueInput
  }

  /**
   * Contratos updateMany
   */
  export type ContratosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Contratos.
     */
    data: XOR<ContratosUpdateManyMutationInput, ContratosUncheckedUpdateManyInput>
    /**
     * Filter which Contratos to update
     */
    where?: ContratosWhereInput
    /**
     * Limit how many Contratos to update.
     */
    limit?: number
  }

  /**
   * Contratos updateManyAndReturn
   */
  export type ContratosUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contratos
     */
    select?: ContratosSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Contratos
     */
    omit?: ContratosOmit<ExtArgs> | null
    /**
     * The data used to update Contratos.
     */
    data: XOR<ContratosUpdateManyMutationInput, ContratosUncheckedUpdateManyInput>
    /**
     * Filter which Contratos to update
     */
    where?: ContratosWhereInput
    /**
     * Limit how many Contratos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContratosIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Contratos upsert
   */
  export type ContratosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contratos
     */
    select?: ContratosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contratos
     */
    omit?: ContratosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContratosInclude<ExtArgs> | null
    /**
     * The filter to search for the Contratos to update in case it exists.
     */
    where: ContratosWhereUniqueInput
    /**
     * In case the Contratos found by the `where` argument doesn't exist, create a new Contratos with this data.
     */
    create: XOR<ContratosCreateInput, ContratosUncheckedCreateInput>
    /**
     * In case the Contratos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContratosUpdateInput, ContratosUncheckedUpdateInput>
  }

  /**
   * Contratos delete
   */
  export type ContratosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contratos
     */
    select?: ContratosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contratos
     */
    omit?: ContratosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContratosInclude<ExtArgs> | null
    /**
     * Filter which Contratos to delete.
     */
    where: ContratosWhereUniqueInput
  }

  /**
   * Contratos deleteMany
   */
  export type ContratosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contratos to delete
     */
    where?: ContratosWhereInput
    /**
     * Limit how many Contratos to delete.
     */
    limit?: number
  }

  /**
   * Contratos.prestamo
   */
  export type Contratos$prestamoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prestamos
     */
    select?: PrestamosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prestamos
     */
    omit?: PrestamosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrestamosInclude<ExtArgs> | null
    where?: PrestamosWhereInput
  }

  /**
   * Contratos without action
   */
  export type ContratosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contratos
     */
    select?: ContratosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contratos
     */
    omit?: ContratosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContratosInclude<ExtArgs> | null
  }


  /**
   * Model Direcciones
   */

  export type AggregateDirecciones = {
    _count: DireccionesCountAggregateOutputType | null
    _avg: DireccionesAvgAggregateOutputType | null
    _sum: DireccionesSumAggregateOutputType | null
    _min: DireccionesMinAggregateOutputType | null
    _max: DireccionesMaxAggregateOutputType | null
  }

  export type DireccionesAvgAggregateOutputType = {
    id: number | null
    idLocalidad: number | null
  }

  export type DireccionesSumAggregateOutputType = {
    id: number | null
    idLocalidad: number | null
  }

  export type DireccionesMinAggregateOutputType = {
    id: number | null
    idLocalidad: number | null
    caller: string | null
    codigoPostal: string | null
    numeroExterior: string | null
    numeroInterior: string | null
  }

  export type DireccionesMaxAggregateOutputType = {
    id: number | null
    idLocalidad: number | null
    caller: string | null
    codigoPostal: string | null
    numeroExterior: string | null
    numeroInterior: string | null
  }

  export type DireccionesCountAggregateOutputType = {
    id: number
    idLocalidad: number
    caller: number
    codigoPostal: number
    numeroExterior: number
    numeroInterior: number
    _all: number
  }


  export type DireccionesAvgAggregateInputType = {
    id?: true
    idLocalidad?: true
  }

  export type DireccionesSumAggregateInputType = {
    id?: true
    idLocalidad?: true
  }

  export type DireccionesMinAggregateInputType = {
    id?: true
    idLocalidad?: true
    caller?: true
    codigoPostal?: true
    numeroExterior?: true
    numeroInterior?: true
  }

  export type DireccionesMaxAggregateInputType = {
    id?: true
    idLocalidad?: true
    caller?: true
    codigoPostal?: true
    numeroExterior?: true
    numeroInterior?: true
  }

  export type DireccionesCountAggregateInputType = {
    id?: true
    idLocalidad?: true
    caller?: true
    codigoPostal?: true
    numeroExterior?: true
    numeroInterior?: true
    _all?: true
  }

  export type DireccionesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Direcciones to aggregate.
     */
    where?: DireccionesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Direcciones to fetch.
     */
    orderBy?: DireccionesOrderByWithRelationInput | DireccionesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DireccionesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Direcciones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Direcciones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Direcciones
    **/
    _count?: true | DireccionesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DireccionesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DireccionesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DireccionesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DireccionesMaxAggregateInputType
  }

  export type GetDireccionesAggregateType<T extends DireccionesAggregateArgs> = {
        [P in keyof T & keyof AggregateDirecciones]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDirecciones[P]>
      : GetScalarType<T[P], AggregateDirecciones[P]>
  }




  export type DireccionesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DireccionesWhereInput
    orderBy?: DireccionesOrderByWithAggregationInput | DireccionesOrderByWithAggregationInput[]
    by: DireccionesScalarFieldEnum[] | DireccionesScalarFieldEnum
    having?: DireccionesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DireccionesCountAggregateInputType | true
    _avg?: DireccionesAvgAggregateInputType
    _sum?: DireccionesSumAggregateInputType
    _min?: DireccionesMinAggregateInputType
    _max?: DireccionesMaxAggregateInputType
  }

  export type DireccionesGroupByOutputType = {
    id: number
    idLocalidad: number | null
    caller: string | null
    codigoPostal: string | null
    numeroExterior: string | null
    numeroInterior: string | null
    _count: DireccionesCountAggregateOutputType | null
    _avg: DireccionesAvgAggregateOutputType | null
    _sum: DireccionesSumAggregateOutputType | null
    _min: DireccionesMinAggregateOutputType | null
    _max: DireccionesMaxAggregateOutputType | null
  }

  type GetDireccionesGroupByPayload<T extends DireccionesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DireccionesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DireccionesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DireccionesGroupByOutputType[P]>
            : GetScalarType<T[P], DireccionesGroupByOutputType[P]>
        }
      >
    >


  export type DireccionesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idLocalidad?: boolean
    caller?: boolean
    codigoPostal?: boolean
    numeroExterior?: boolean
    numeroInterior?: boolean
    localidad?: boolean | Direcciones$localidadArgs<ExtArgs>
    clientes?: boolean | Direcciones$clientesArgs<ExtArgs>
    _count?: boolean | DireccionesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["direcciones"]>

  export type DireccionesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idLocalidad?: boolean
    caller?: boolean
    codigoPostal?: boolean
    numeroExterior?: boolean
    numeroInterior?: boolean
    localidad?: boolean | Direcciones$localidadArgs<ExtArgs>
  }, ExtArgs["result"]["direcciones"]>

  export type DireccionesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idLocalidad?: boolean
    caller?: boolean
    codigoPostal?: boolean
    numeroExterior?: boolean
    numeroInterior?: boolean
    localidad?: boolean | Direcciones$localidadArgs<ExtArgs>
  }, ExtArgs["result"]["direcciones"]>

  export type DireccionesSelectScalar = {
    id?: boolean
    idLocalidad?: boolean
    caller?: boolean
    codigoPostal?: boolean
    numeroExterior?: boolean
    numeroInterior?: boolean
  }

  export type DireccionesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "idLocalidad" | "caller" | "codigoPostal" | "numeroExterior" | "numeroInterior", ExtArgs["result"]["direcciones"]>
  export type DireccionesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    localidad?: boolean | Direcciones$localidadArgs<ExtArgs>
    clientes?: boolean | Direcciones$clientesArgs<ExtArgs>
    _count?: boolean | DireccionesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DireccionesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    localidad?: boolean | Direcciones$localidadArgs<ExtArgs>
  }
  export type DireccionesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    localidad?: boolean | Direcciones$localidadArgs<ExtArgs>
  }

  export type $DireccionesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Direcciones"
    objects: {
      localidad: Prisma.$LocalidadesPayload<ExtArgs> | null
      clientes: Prisma.$ClientesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      idLocalidad: number | null
      caller: string | null
      codigoPostal: string | null
      numeroExterior: string | null
      numeroInterior: string | null
    }, ExtArgs["result"]["direcciones"]>
    composites: {}
  }

  type DireccionesGetPayload<S extends boolean | null | undefined | DireccionesDefaultArgs> = $Result.GetResult<Prisma.$DireccionesPayload, S>

  type DireccionesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DireccionesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DireccionesCountAggregateInputType | true
    }

  export interface DireccionesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Direcciones'], meta: { name: 'Direcciones' } }
    /**
     * Find zero or one Direcciones that matches the filter.
     * @param {DireccionesFindUniqueArgs} args - Arguments to find a Direcciones
     * @example
     * // Get one Direcciones
     * const direcciones = await prisma.direcciones.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DireccionesFindUniqueArgs>(args: SelectSubset<T, DireccionesFindUniqueArgs<ExtArgs>>): Prisma__DireccionesClient<$Result.GetResult<Prisma.$DireccionesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Direcciones that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DireccionesFindUniqueOrThrowArgs} args - Arguments to find a Direcciones
     * @example
     * // Get one Direcciones
     * const direcciones = await prisma.direcciones.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DireccionesFindUniqueOrThrowArgs>(args: SelectSubset<T, DireccionesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DireccionesClient<$Result.GetResult<Prisma.$DireccionesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Direcciones that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DireccionesFindFirstArgs} args - Arguments to find a Direcciones
     * @example
     * // Get one Direcciones
     * const direcciones = await prisma.direcciones.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DireccionesFindFirstArgs>(args?: SelectSubset<T, DireccionesFindFirstArgs<ExtArgs>>): Prisma__DireccionesClient<$Result.GetResult<Prisma.$DireccionesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Direcciones that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DireccionesFindFirstOrThrowArgs} args - Arguments to find a Direcciones
     * @example
     * // Get one Direcciones
     * const direcciones = await prisma.direcciones.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DireccionesFindFirstOrThrowArgs>(args?: SelectSubset<T, DireccionesFindFirstOrThrowArgs<ExtArgs>>): Prisma__DireccionesClient<$Result.GetResult<Prisma.$DireccionesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Direcciones that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DireccionesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Direcciones
     * const direcciones = await prisma.direcciones.findMany()
     * 
     * // Get first 10 Direcciones
     * const direcciones = await prisma.direcciones.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const direccionesWithIdOnly = await prisma.direcciones.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DireccionesFindManyArgs>(args?: SelectSubset<T, DireccionesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DireccionesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Direcciones.
     * @param {DireccionesCreateArgs} args - Arguments to create a Direcciones.
     * @example
     * // Create one Direcciones
     * const Direcciones = await prisma.direcciones.create({
     *   data: {
     *     // ... data to create a Direcciones
     *   }
     * })
     * 
     */
    create<T extends DireccionesCreateArgs>(args: SelectSubset<T, DireccionesCreateArgs<ExtArgs>>): Prisma__DireccionesClient<$Result.GetResult<Prisma.$DireccionesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Direcciones.
     * @param {DireccionesCreateManyArgs} args - Arguments to create many Direcciones.
     * @example
     * // Create many Direcciones
     * const direcciones = await prisma.direcciones.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DireccionesCreateManyArgs>(args?: SelectSubset<T, DireccionesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Direcciones and returns the data saved in the database.
     * @param {DireccionesCreateManyAndReturnArgs} args - Arguments to create many Direcciones.
     * @example
     * // Create many Direcciones
     * const direcciones = await prisma.direcciones.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Direcciones and only return the `id`
     * const direccionesWithIdOnly = await prisma.direcciones.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DireccionesCreateManyAndReturnArgs>(args?: SelectSubset<T, DireccionesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DireccionesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Direcciones.
     * @param {DireccionesDeleteArgs} args - Arguments to delete one Direcciones.
     * @example
     * // Delete one Direcciones
     * const Direcciones = await prisma.direcciones.delete({
     *   where: {
     *     // ... filter to delete one Direcciones
     *   }
     * })
     * 
     */
    delete<T extends DireccionesDeleteArgs>(args: SelectSubset<T, DireccionesDeleteArgs<ExtArgs>>): Prisma__DireccionesClient<$Result.GetResult<Prisma.$DireccionesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Direcciones.
     * @param {DireccionesUpdateArgs} args - Arguments to update one Direcciones.
     * @example
     * // Update one Direcciones
     * const direcciones = await prisma.direcciones.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DireccionesUpdateArgs>(args: SelectSubset<T, DireccionesUpdateArgs<ExtArgs>>): Prisma__DireccionesClient<$Result.GetResult<Prisma.$DireccionesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Direcciones.
     * @param {DireccionesDeleteManyArgs} args - Arguments to filter Direcciones to delete.
     * @example
     * // Delete a few Direcciones
     * const { count } = await prisma.direcciones.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DireccionesDeleteManyArgs>(args?: SelectSubset<T, DireccionesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Direcciones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DireccionesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Direcciones
     * const direcciones = await prisma.direcciones.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DireccionesUpdateManyArgs>(args: SelectSubset<T, DireccionesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Direcciones and returns the data updated in the database.
     * @param {DireccionesUpdateManyAndReturnArgs} args - Arguments to update many Direcciones.
     * @example
     * // Update many Direcciones
     * const direcciones = await prisma.direcciones.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Direcciones and only return the `id`
     * const direccionesWithIdOnly = await prisma.direcciones.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DireccionesUpdateManyAndReturnArgs>(args: SelectSubset<T, DireccionesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DireccionesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Direcciones.
     * @param {DireccionesUpsertArgs} args - Arguments to update or create a Direcciones.
     * @example
     * // Update or create a Direcciones
     * const direcciones = await prisma.direcciones.upsert({
     *   create: {
     *     // ... data to create a Direcciones
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Direcciones we want to update
     *   }
     * })
     */
    upsert<T extends DireccionesUpsertArgs>(args: SelectSubset<T, DireccionesUpsertArgs<ExtArgs>>): Prisma__DireccionesClient<$Result.GetResult<Prisma.$DireccionesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Direcciones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DireccionesCountArgs} args - Arguments to filter Direcciones to count.
     * @example
     * // Count the number of Direcciones
     * const count = await prisma.direcciones.count({
     *   where: {
     *     // ... the filter for the Direcciones we want to count
     *   }
     * })
    **/
    count<T extends DireccionesCountArgs>(
      args?: Subset<T, DireccionesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DireccionesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Direcciones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DireccionesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DireccionesAggregateArgs>(args: Subset<T, DireccionesAggregateArgs>): Prisma.PrismaPromise<GetDireccionesAggregateType<T>>

    /**
     * Group by Direcciones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DireccionesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DireccionesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DireccionesGroupByArgs['orderBy'] }
        : { orderBy?: DireccionesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DireccionesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDireccionesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Direcciones model
   */
  readonly fields: DireccionesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Direcciones.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DireccionesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    localidad<T extends Direcciones$localidadArgs<ExtArgs> = {}>(args?: Subset<T, Direcciones$localidadArgs<ExtArgs>>): Prisma__LocalidadesClient<$Result.GetResult<Prisma.$LocalidadesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    clientes<T extends Direcciones$clientesArgs<ExtArgs> = {}>(args?: Subset<T, Direcciones$clientesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Direcciones model
   */
  interface DireccionesFieldRefs {
    readonly id: FieldRef<"Direcciones", 'Int'>
    readonly idLocalidad: FieldRef<"Direcciones", 'Int'>
    readonly caller: FieldRef<"Direcciones", 'String'>
    readonly codigoPostal: FieldRef<"Direcciones", 'String'>
    readonly numeroExterior: FieldRef<"Direcciones", 'String'>
    readonly numeroInterior: FieldRef<"Direcciones", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Direcciones findUnique
   */
  export type DireccionesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Direcciones
     */
    select?: DireccionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Direcciones
     */
    omit?: DireccionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DireccionesInclude<ExtArgs> | null
    /**
     * Filter, which Direcciones to fetch.
     */
    where: DireccionesWhereUniqueInput
  }

  /**
   * Direcciones findUniqueOrThrow
   */
  export type DireccionesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Direcciones
     */
    select?: DireccionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Direcciones
     */
    omit?: DireccionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DireccionesInclude<ExtArgs> | null
    /**
     * Filter, which Direcciones to fetch.
     */
    where: DireccionesWhereUniqueInput
  }

  /**
   * Direcciones findFirst
   */
  export type DireccionesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Direcciones
     */
    select?: DireccionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Direcciones
     */
    omit?: DireccionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DireccionesInclude<ExtArgs> | null
    /**
     * Filter, which Direcciones to fetch.
     */
    where?: DireccionesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Direcciones to fetch.
     */
    orderBy?: DireccionesOrderByWithRelationInput | DireccionesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Direcciones.
     */
    cursor?: DireccionesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Direcciones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Direcciones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Direcciones.
     */
    distinct?: DireccionesScalarFieldEnum | DireccionesScalarFieldEnum[]
  }

  /**
   * Direcciones findFirstOrThrow
   */
  export type DireccionesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Direcciones
     */
    select?: DireccionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Direcciones
     */
    omit?: DireccionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DireccionesInclude<ExtArgs> | null
    /**
     * Filter, which Direcciones to fetch.
     */
    where?: DireccionesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Direcciones to fetch.
     */
    orderBy?: DireccionesOrderByWithRelationInput | DireccionesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Direcciones.
     */
    cursor?: DireccionesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Direcciones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Direcciones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Direcciones.
     */
    distinct?: DireccionesScalarFieldEnum | DireccionesScalarFieldEnum[]
  }

  /**
   * Direcciones findMany
   */
  export type DireccionesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Direcciones
     */
    select?: DireccionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Direcciones
     */
    omit?: DireccionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DireccionesInclude<ExtArgs> | null
    /**
     * Filter, which Direcciones to fetch.
     */
    where?: DireccionesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Direcciones to fetch.
     */
    orderBy?: DireccionesOrderByWithRelationInput | DireccionesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Direcciones.
     */
    cursor?: DireccionesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Direcciones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Direcciones.
     */
    skip?: number
    distinct?: DireccionesScalarFieldEnum | DireccionesScalarFieldEnum[]
  }

  /**
   * Direcciones create
   */
  export type DireccionesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Direcciones
     */
    select?: DireccionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Direcciones
     */
    omit?: DireccionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DireccionesInclude<ExtArgs> | null
    /**
     * The data needed to create a Direcciones.
     */
    data: XOR<DireccionesCreateInput, DireccionesUncheckedCreateInput>
  }

  /**
   * Direcciones createMany
   */
  export type DireccionesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Direcciones.
     */
    data: DireccionesCreateManyInput | DireccionesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Direcciones createManyAndReturn
   */
  export type DireccionesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Direcciones
     */
    select?: DireccionesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Direcciones
     */
    omit?: DireccionesOmit<ExtArgs> | null
    /**
     * The data used to create many Direcciones.
     */
    data: DireccionesCreateManyInput | DireccionesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DireccionesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Direcciones update
   */
  export type DireccionesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Direcciones
     */
    select?: DireccionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Direcciones
     */
    omit?: DireccionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DireccionesInclude<ExtArgs> | null
    /**
     * The data needed to update a Direcciones.
     */
    data: XOR<DireccionesUpdateInput, DireccionesUncheckedUpdateInput>
    /**
     * Choose, which Direcciones to update.
     */
    where: DireccionesWhereUniqueInput
  }

  /**
   * Direcciones updateMany
   */
  export type DireccionesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Direcciones.
     */
    data: XOR<DireccionesUpdateManyMutationInput, DireccionesUncheckedUpdateManyInput>
    /**
     * Filter which Direcciones to update
     */
    where?: DireccionesWhereInput
    /**
     * Limit how many Direcciones to update.
     */
    limit?: number
  }

  /**
   * Direcciones updateManyAndReturn
   */
  export type DireccionesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Direcciones
     */
    select?: DireccionesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Direcciones
     */
    omit?: DireccionesOmit<ExtArgs> | null
    /**
     * The data used to update Direcciones.
     */
    data: XOR<DireccionesUpdateManyMutationInput, DireccionesUncheckedUpdateManyInput>
    /**
     * Filter which Direcciones to update
     */
    where?: DireccionesWhereInput
    /**
     * Limit how many Direcciones to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DireccionesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Direcciones upsert
   */
  export type DireccionesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Direcciones
     */
    select?: DireccionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Direcciones
     */
    omit?: DireccionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DireccionesInclude<ExtArgs> | null
    /**
     * The filter to search for the Direcciones to update in case it exists.
     */
    where: DireccionesWhereUniqueInput
    /**
     * In case the Direcciones found by the `where` argument doesn't exist, create a new Direcciones with this data.
     */
    create: XOR<DireccionesCreateInput, DireccionesUncheckedCreateInput>
    /**
     * In case the Direcciones was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DireccionesUpdateInput, DireccionesUncheckedUpdateInput>
  }

  /**
   * Direcciones delete
   */
  export type DireccionesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Direcciones
     */
    select?: DireccionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Direcciones
     */
    omit?: DireccionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DireccionesInclude<ExtArgs> | null
    /**
     * Filter which Direcciones to delete.
     */
    where: DireccionesWhereUniqueInput
  }

  /**
   * Direcciones deleteMany
   */
  export type DireccionesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Direcciones to delete
     */
    where?: DireccionesWhereInput
    /**
     * Limit how many Direcciones to delete.
     */
    limit?: number
  }

  /**
   * Direcciones.localidad
   */
  export type Direcciones$localidadArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Localidades
     */
    select?: LocalidadesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Localidades
     */
    omit?: LocalidadesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalidadesInclude<ExtArgs> | null
    where?: LocalidadesWhereInput
  }

  /**
   * Direcciones.clientes
   */
  export type Direcciones$clientesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clientes
     */
    select?: ClientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clientes
     */
    omit?: ClientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientesInclude<ExtArgs> | null
    where?: ClientesWhereInput
    orderBy?: ClientesOrderByWithRelationInput | ClientesOrderByWithRelationInput[]
    cursor?: ClientesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClientesScalarFieldEnum | ClientesScalarFieldEnum[]
  }

  /**
   * Direcciones without action
   */
  export type DireccionesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Direcciones
     */
    select?: DireccionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Direcciones
     */
    omit?: DireccionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DireccionesInclude<ExtArgs> | null
  }


  /**
   * Model Estados
   */

  export type AggregateEstados = {
    _count: EstadosCountAggregateOutputType | null
    _avg: EstadosAvgAggregateOutputType | null
    _sum: EstadosSumAggregateOutputType | null
    _min: EstadosMinAggregateOutputType | null
    _max: EstadosMaxAggregateOutputType | null
  }

  export type EstadosAvgAggregateOutputType = {
    id: number | null
  }

  export type EstadosSumAggregateOutputType = {
    id: number | null
  }

  export type EstadosMinAggregateOutputType = {
    id: number | null
    nombre: string | null
  }

  export type EstadosMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
  }

  export type EstadosCountAggregateOutputType = {
    id: number
    nombre: number
    _all: number
  }


  export type EstadosAvgAggregateInputType = {
    id?: true
  }

  export type EstadosSumAggregateInputType = {
    id?: true
  }

  export type EstadosMinAggregateInputType = {
    id?: true
    nombre?: true
  }

  export type EstadosMaxAggregateInputType = {
    id?: true
    nombre?: true
  }

  export type EstadosCountAggregateInputType = {
    id?: true
    nombre?: true
    _all?: true
  }

  export type EstadosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Estados to aggregate.
     */
    where?: EstadosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Estados to fetch.
     */
    orderBy?: EstadosOrderByWithRelationInput | EstadosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EstadosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Estados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Estados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Estados
    **/
    _count?: true | EstadosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EstadosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EstadosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EstadosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EstadosMaxAggregateInputType
  }

  export type GetEstadosAggregateType<T extends EstadosAggregateArgs> = {
        [P in keyof T & keyof AggregateEstados]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEstados[P]>
      : GetScalarType<T[P], AggregateEstados[P]>
  }




  export type EstadosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EstadosWhereInput
    orderBy?: EstadosOrderByWithAggregationInput | EstadosOrderByWithAggregationInput[]
    by: EstadosScalarFieldEnum[] | EstadosScalarFieldEnum
    having?: EstadosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EstadosCountAggregateInputType | true
    _avg?: EstadosAvgAggregateInputType
    _sum?: EstadosSumAggregateInputType
    _min?: EstadosMinAggregateInputType
    _max?: EstadosMaxAggregateInputType
  }

  export type EstadosGroupByOutputType = {
    id: number
    nombre: string | null
    _count: EstadosCountAggregateOutputType | null
    _avg: EstadosAvgAggregateOutputType | null
    _sum: EstadosSumAggregateOutputType | null
    _min: EstadosMinAggregateOutputType | null
    _max: EstadosMaxAggregateOutputType | null
  }

  type GetEstadosGroupByPayload<T extends EstadosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EstadosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EstadosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EstadosGroupByOutputType[P]>
            : GetScalarType<T[P], EstadosGroupByOutputType[P]>
        }
      >
    >


  export type EstadosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    municipios?: boolean | Estados$municipiosArgs<ExtArgs>
    _count?: boolean | EstadosCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["estados"]>

  export type EstadosSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
  }, ExtArgs["result"]["estados"]>

  export type EstadosSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
  }, ExtArgs["result"]["estados"]>

  export type EstadosSelectScalar = {
    id?: boolean
    nombre?: boolean
  }

  export type EstadosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre", ExtArgs["result"]["estados"]>
  export type EstadosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    municipios?: boolean | Estados$municipiosArgs<ExtArgs>
    _count?: boolean | EstadosCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EstadosIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type EstadosIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $EstadosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Estados"
    objects: {
      municipios: Prisma.$MunicipiosPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string | null
    }, ExtArgs["result"]["estados"]>
    composites: {}
  }

  type EstadosGetPayload<S extends boolean | null | undefined | EstadosDefaultArgs> = $Result.GetResult<Prisma.$EstadosPayload, S>

  type EstadosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EstadosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EstadosCountAggregateInputType | true
    }

  export interface EstadosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Estados'], meta: { name: 'Estados' } }
    /**
     * Find zero or one Estados that matches the filter.
     * @param {EstadosFindUniqueArgs} args - Arguments to find a Estados
     * @example
     * // Get one Estados
     * const estados = await prisma.estados.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EstadosFindUniqueArgs>(args: SelectSubset<T, EstadosFindUniqueArgs<ExtArgs>>): Prisma__EstadosClient<$Result.GetResult<Prisma.$EstadosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Estados that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EstadosFindUniqueOrThrowArgs} args - Arguments to find a Estados
     * @example
     * // Get one Estados
     * const estados = await prisma.estados.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EstadosFindUniqueOrThrowArgs>(args: SelectSubset<T, EstadosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EstadosClient<$Result.GetResult<Prisma.$EstadosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Estados that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstadosFindFirstArgs} args - Arguments to find a Estados
     * @example
     * // Get one Estados
     * const estados = await prisma.estados.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EstadosFindFirstArgs>(args?: SelectSubset<T, EstadosFindFirstArgs<ExtArgs>>): Prisma__EstadosClient<$Result.GetResult<Prisma.$EstadosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Estados that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstadosFindFirstOrThrowArgs} args - Arguments to find a Estados
     * @example
     * // Get one Estados
     * const estados = await prisma.estados.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EstadosFindFirstOrThrowArgs>(args?: SelectSubset<T, EstadosFindFirstOrThrowArgs<ExtArgs>>): Prisma__EstadosClient<$Result.GetResult<Prisma.$EstadosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Estados that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstadosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Estados
     * const estados = await prisma.estados.findMany()
     * 
     * // Get first 10 Estados
     * const estados = await prisma.estados.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const estadosWithIdOnly = await prisma.estados.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EstadosFindManyArgs>(args?: SelectSubset<T, EstadosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EstadosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Estados.
     * @param {EstadosCreateArgs} args - Arguments to create a Estados.
     * @example
     * // Create one Estados
     * const Estados = await prisma.estados.create({
     *   data: {
     *     // ... data to create a Estados
     *   }
     * })
     * 
     */
    create<T extends EstadosCreateArgs>(args: SelectSubset<T, EstadosCreateArgs<ExtArgs>>): Prisma__EstadosClient<$Result.GetResult<Prisma.$EstadosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Estados.
     * @param {EstadosCreateManyArgs} args - Arguments to create many Estados.
     * @example
     * // Create many Estados
     * const estados = await prisma.estados.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EstadosCreateManyArgs>(args?: SelectSubset<T, EstadosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Estados and returns the data saved in the database.
     * @param {EstadosCreateManyAndReturnArgs} args - Arguments to create many Estados.
     * @example
     * // Create many Estados
     * const estados = await prisma.estados.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Estados and only return the `id`
     * const estadosWithIdOnly = await prisma.estados.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EstadosCreateManyAndReturnArgs>(args?: SelectSubset<T, EstadosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EstadosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Estados.
     * @param {EstadosDeleteArgs} args - Arguments to delete one Estados.
     * @example
     * // Delete one Estados
     * const Estados = await prisma.estados.delete({
     *   where: {
     *     // ... filter to delete one Estados
     *   }
     * })
     * 
     */
    delete<T extends EstadosDeleteArgs>(args: SelectSubset<T, EstadosDeleteArgs<ExtArgs>>): Prisma__EstadosClient<$Result.GetResult<Prisma.$EstadosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Estados.
     * @param {EstadosUpdateArgs} args - Arguments to update one Estados.
     * @example
     * // Update one Estados
     * const estados = await prisma.estados.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EstadosUpdateArgs>(args: SelectSubset<T, EstadosUpdateArgs<ExtArgs>>): Prisma__EstadosClient<$Result.GetResult<Prisma.$EstadosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Estados.
     * @param {EstadosDeleteManyArgs} args - Arguments to filter Estados to delete.
     * @example
     * // Delete a few Estados
     * const { count } = await prisma.estados.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EstadosDeleteManyArgs>(args?: SelectSubset<T, EstadosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Estados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstadosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Estados
     * const estados = await prisma.estados.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EstadosUpdateManyArgs>(args: SelectSubset<T, EstadosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Estados and returns the data updated in the database.
     * @param {EstadosUpdateManyAndReturnArgs} args - Arguments to update many Estados.
     * @example
     * // Update many Estados
     * const estados = await prisma.estados.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Estados and only return the `id`
     * const estadosWithIdOnly = await prisma.estados.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EstadosUpdateManyAndReturnArgs>(args: SelectSubset<T, EstadosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EstadosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Estados.
     * @param {EstadosUpsertArgs} args - Arguments to update or create a Estados.
     * @example
     * // Update or create a Estados
     * const estados = await prisma.estados.upsert({
     *   create: {
     *     // ... data to create a Estados
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Estados we want to update
     *   }
     * })
     */
    upsert<T extends EstadosUpsertArgs>(args: SelectSubset<T, EstadosUpsertArgs<ExtArgs>>): Prisma__EstadosClient<$Result.GetResult<Prisma.$EstadosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Estados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstadosCountArgs} args - Arguments to filter Estados to count.
     * @example
     * // Count the number of Estados
     * const count = await prisma.estados.count({
     *   where: {
     *     // ... the filter for the Estados we want to count
     *   }
     * })
    **/
    count<T extends EstadosCountArgs>(
      args?: Subset<T, EstadosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EstadosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Estados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstadosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EstadosAggregateArgs>(args: Subset<T, EstadosAggregateArgs>): Prisma.PrismaPromise<GetEstadosAggregateType<T>>

    /**
     * Group by Estados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstadosGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EstadosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EstadosGroupByArgs['orderBy'] }
        : { orderBy?: EstadosGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EstadosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEstadosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Estados model
   */
  readonly fields: EstadosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Estados.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EstadosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    municipios<T extends Estados$municipiosArgs<ExtArgs> = {}>(args?: Subset<T, Estados$municipiosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MunicipiosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Estados model
   */
  interface EstadosFieldRefs {
    readonly id: FieldRef<"Estados", 'Int'>
    readonly nombre: FieldRef<"Estados", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Estados findUnique
   */
  export type EstadosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estados
     */
    select?: EstadosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estados
     */
    omit?: EstadosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstadosInclude<ExtArgs> | null
    /**
     * Filter, which Estados to fetch.
     */
    where: EstadosWhereUniqueInput
  }

  /**
   * Estados findUniqueOrThrow
   */
  export type EstadosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estados
     */
    select?: EstadosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estados
     */
    omit?: EstadosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstadosInclude<ExtArgs> | null
    /**
     * Filter, which Estados to fetch.
     */
    where: EstadosWhereUniqueInput
  }

  /**
   * Estados findFirst
   */
  export type EstadosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estados
     */
    select?: EstadosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estados
     */
    omit?: EstadosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstadosInclude<ExtArgs> | null
    /**
     * Filter, which Estados to fetch.
     */
    where?: EstadosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Estados to fetch.
     */
    orderBy?: EstadosOrderByWithRelationInput | EstadosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Estados.
     */
    cursor?: EstadosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Estados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Estados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Estados.
     */
    distinct?: EstadosScalarFieldEnum | EstadosScalarFieldEnum[]
  }

  /**
   * Estados findFirstOrThrow
   */
  export type EstadosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estados
     */
    select?: EstadosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estados
     */
    omit?: EstadosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstadosInclude<ExtArgs> | null
    /**
     * Filter, which Estados to fetch.
     */
    where?: EstadosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Estados to fetch.
     */
    orderBy?: EstadosOrderByWithRelationInput | EstadosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Estados.
     */
    cursor?: EstadosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Estados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Estados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Estados.
     */
    distinct?: EstadosScalarFieldEnum | EstadosScalarFieldEnum[]
  }

  /**
   * Estados findMany
   */
  export type EstadosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estados
     */
    select?: EstadosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estados
     */
    omit?: EstadosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstadosInclude<ExtArgs> | null
    /**
     * Filter, which Estados to fetch.
     */
    where?: EstadosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Estados to fetch.
     */
    orderBy?: EstadosOrderByWithRelationInput | EstadosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Estados.
     */
    cursor?: EstadosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Estados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Estados.
     */
    skip?: number
    distinct?: EstadosScalarFieldEnum | EstadosScalarFieldEnum[]
  }

  /**
   * Estados create
   */
  export type EstadosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estados
     */
    select?: EstadosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estados
     */
    omit?: EstadosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstadosInclude<ExtArgs> | null
    /**
     * The data needed to create a Estados.
     */
    data: XOR<EstadosCreateInput, EstadosUncheckedCreateInput>
  }

  /**
   * Estados createMany
   */
  export type EstadosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Estados.
     */
    data: EstadosCreateManyInput | EstadosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Estados createManyAndReturn
   */
  export type EstadosCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estados
     */
    select?: EstadosSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Estados
     */
    omit?: EstadosOmit<ExtArgs> | null
    /**
     * The data used to create many Estados.
     */
    data: EstadosCreateManyInput | EstadosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Estados update
   */
  export type EstadosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estados
     */
    select?: EstadosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estados
     */
    omit?: EstadosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstadosInclude<ExtArgs> | null
    /**
     * The data needed to update a Estados.
     */
    data: XOR<EstadosUpdateInput, EstadosUncheckedUpdateInput>
    /**
     * Choose, which Estados to update.
     */
    where: EstadosWhereUniqueInput
  }

  /**
   * Estados updateMany
   */
  export type EstadosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Estados.
     */
    data: XOR<EstadosUpdateManyMutationInput, EstadosUncheckedUpdateManyInput>
    /**
     * Filter which Estados to update
     */
    where?: EstadosWhereInput
    /**
     * Limit how many Estados to update.
     */
    limit?: number
  }

  /**
   * Estados updateManyAndReturn
   */
  export type EstadosUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estados
     */
    select?: EstadosSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Estados
     */
    omit?: EstadosOmit<ExtArgs> | null
    /**
     * The data used to update Estados.
     */
    data: XOR<EstadosUpdateManyMutationInput, EstadosUncheckedUpdateManyInput>
    /**
     * Filter which Estados to update
     */
    where?: EstadosWhereInput
    /**
     * Limit how many Estados to update.
     */
    limit?: number
  }

  /**
   * Estados upsert
   */
  export type EstadosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estados
     */
    select?: EstadosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estados
     */
    omit?: EstadosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstadosInclude<ExtArgs> | null
    /**
     * The filter to search for the Estados to update in case it exists.
     */
    where: EstadosWhereUniqueInput
    /**
     * In case the Estados found by the `where` argument doesn't exist, create a new Estados with this data.
     */
    create: XOR<EstadosCreateInput, EstadosUncheckedCreateInput>
    /**
     * In case the Estados was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EstadosUpdateInput, EstadosUncheckedUpdateInput>
  }

  /**
   * Estados delete
   */
  export type EstadosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estados
     */
    select?: EstadosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estados
     */
    omit?: EstadosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstadosInclude<ExtArgs> | null
    /**
     * Filter which Estados to delete.
     */
    where: EstadosWhereUniqueInput
  }

  /**
   * Estados deleteMany
   */
  export type EstadosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Estados to delete
     */
    where?: EstadosWhereInput
    /**
     * Limit how many Estados to delete.
     */
    limit?: number
  }

  /**
   * Estados.municipios
   */
  export type Estados$municipiosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Municipios
     */
    select?: MunicipiosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Municipios
     */
    omit?: MunicipiosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MunicipiosInclude<ExtArgs> | null
    where?: MunicipiosWhereInput
    orderBy?: MunicipiosOrderByWithRelationInput | MunicipiosOrderByWithRelationInput[]
    cursor?: MunicipiosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MunicipiosScalarFieldEnum | MunicipiosScalarFieldEnum[]
  }

  /**
   * Estados without action
   */
  export type EstadosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estados
     */
    select?: EstadosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estados
     */
    omit?: EstadosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstadosInclude<ExtArgs> | null
  }


  /**
   * Model Localidades
   */

  export type AggregateLocalidades = {
    _count: LocalidadesCountAggregateOutputType | null
    _avg: LocalidadesAvgAggregateOutputType | null
    _sum: LocalidadesSumAggregateOutputType | null
    _min: LocalidadesMinAggregateOutputType | null
    _max: LocalidadesMaxAggregateOutputType | null
  }

  export type LocalidadesAvgAggregateOutputType = {
    id: number | null
    idCiudad: number | null
  }

  export type LocalidadesSumAggregateOutputType = {
    id: number | null
    idCiudad: number | null
  }

  export type LocalidadesMinAggregateOutputType = {
    id: number | null
    idCiudad: number | null
    nombre: string | null
  }

  export type LocalidadesMaxAggregateOutputType = {
    id: number | null
    idCiudad: number | null
    nombre: string | null
  }

  export type LocalidadesCountAggregateOutputType = {
    id: number
    idCiudad: number
    nombre: number
    _all: number
  }


  export type LocalidadesAvgAggregateInputType = {
    id?: true
    idCiudad?: true
  }

  export type LocalidadesSumAggregateInputType = {
    id?: true
    idCiudad?: true
  }

  export type LocalidadesMinAggregateInputType = {
    id?: true
    idCiudad?: true
    nombre?: true
  }

  export type LocalidadesMaxAggregateInputType = {
    id?: true
    idCiudad?: true
    nombre?: true
  }

  export type LocalidadesCountAggregateInputType = {
    id?: true
    idCiudad?: true
    nombre?: true
    _all?: true
  }

  export type LocalidadesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Localidades to aggregate.
     */
    where?: LocalidadesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Localidades to fetch.
     */
    orderBy?: LocalidadesOrderByWithRelationInput | LocalidadesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LocalidadesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Localidades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Localidades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Localidades
    **/
    _count?: true | LocalidadesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LocalidadesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LocalidadesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LocalidadesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LocalidadesMaxAggregateInputType
  }

  export type GetLocalidadesAggregateType<T extends LocalidadesAggregateArgs> = {
        [P in keyof T & keyof AggregateLocalidades]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLocalidades[P]>
      : GetScalarType<T[P], AggregateLocalidades[P]>
  }




  export type LocalidadesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LocalidadesWhereInput
    orderBy?: LocalidadesOrderByWithAggregationInput | LocalidadesOrderByWithAggregationInput[]
    by: LocalidadesScalarFieldEnum[] | LocalidadesScalarFieldEnum
    having?: LocalidadesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LocalidadesCountAggregateInputType | true
    _avg?: LocalidadesAvgAggregateInputType
    _sum?: LocalidadesSumAggregateInputType
    _min?: LocalidadesMinAggregateInputType
    _max?: LocalidadesMaxAggregateInputType
  }

  export type LocalidadesGroupByOutputType = {
    id: number
    idCiudad: number | null
    nombre: string | null
    _count: LocalidadesCountAggregateOutputType | null
    _avg: LocalidadesAvgAggregateOutputType | null
    _sum: LocalidadesSumAggregateOutputType | null
    _min: LocalidadesMinAggregateOutputType | null
    _max: LocalidadesMaxAggregateOutputType | null
  }

  type GetLocalidadesGroupByPayload<T extends LocalidadesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LocalidadesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LocalidadesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LocalidadesGroupByOutputType[P]>
            : GetScalarType<T[P], LocalidadesGroupByOutputType[P]>
        }
      >
    >


  export type LocalidadesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idCiudad?: boolean
    nombre?: boolean
    ciudad?: boolean | Localidades$ciudadArgs<ExtArgs>
    direcciones?: boolean | Localidades$direccionesArgs<ExtArgs>
    _count?: boolean | LocalidadesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["localidades"]>

  export type LocalidadesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idCiudad?: boolean
    nombre?: boolean
    ciudad?: boolean | Localidades$ciudadArgs<ExtArgs>
  }, ExtArgs["result"]["localidades"]>

  export type LocalidadesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idCiudad?: boolean
    nombre?: boolean
    ciudad?: boolean | Localidades$ciudadArgs<ExtArgs>
  }, ExtArgs["result"]["localidades"]>

  export type LocalidadesSelectScalar = {
    id?: boolean
    idCiudad?: boolean
    nombre?: boolean
  }

  export type LocalidadesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "idCiudad" | "nombre", ExtArgs["result"]["localidades"]>
  export type LocalidadesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ciudad?: boolean | Localidades$ciudadArgs<ExtArgs>
    direcciones?: boolean | Localidades$direccionesArgs<ExtArgs>
    _count?: boolean | LocalidadesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LocalidadesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ciudad?: boolean | Localidades$ciudadArgs<ExtArgs>
  }
  export type LocalidadesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ciudad?: boolean | Localidades$ciudadArgs<ExtArgs>
  }

  export type $LocalidadesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Localidades"
    objects: {
      ciudad: Prisma.$CiudadesPayload<ExtArgs> | null
      direcciones: Prisma.$DireccionesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      idCiudad: number | null
      nombre: string | null
    }, ExtArgs["result"]["localidades"]>
    composites: {}
  }

  type LocalidadesGetPayload<S extends boolean | null | undefined | LocalidadesDefaultArgs> = $Result.GetResult<Prisma.$LocalidadesPayload, S>

  type LocalidadesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LocalidadesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LocalidadesCountAggregateInputType | true
    }

  export interface LocalidadesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Localidades'], meta: { name: 'Localidades' } }
    /**
     * Find zero or one Localidades that matches the filter.
     * @param {LocalidadesFindUniqueArgs} args - Arguments to find a Localidades
     * @example
     * // Get one Localidades
     * const localidades = await prisma.localidades.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LocalidadesFindUniqueArgs>(args: SelectSubset<T, LocalidadesFindUniqueArgs<ExtArgs>>): Prisma__LocalidadesClient<$Result.GetResult<Prisma.$LocalidadesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Localidades that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LocalidadesFindUniqueOrThrowArgs} args - Arguments to find a Localidades
     * @example
     * // Get one Localidades
     * const localidades = await prisma.localidades.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LocalidadesFindUniqueOrThrowArgs>(args: SelectSubset<T, LocalidadesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LocalidadesClient<$Result.GetResult<Prisma.$LocalidadesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Localidades that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocalidadesFindFirstArgs} args - Arguments to find a Localidades
     * @example
     * // Get one Localidades
     * const localidades = await prisma.localidades.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LocalidadesFindFirstArgs>(args?: SelectSubset<T, LocalidadesFindFirstArgs<ExtArgs>>): Prisma__LocalidadesClient<$Result.GetResult<Prisma.$LocalidadesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Localidades that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocalidadesFindFirstOrThrowArgs} args - Arguments to find a Localidades
     * @example
     * // Get one Localidades
     * const localidades = await prisma.localidades.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LocalidadesFindFirstOrThrowArgs>(args?: SelectSubset<T, LocalidadesFindFirstOrThrowArgs<ExtArgs>>): Prisma__LocalidadesClient<$Result.GetResult<Prisma.$LocalidadesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Localidades that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocalidadesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Localidades
     * const localidades = await prisma.localidades.findMany()
     * 
     * // Get first 10 Localidades
     * const localidades = await prisma.localidades.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const localidadesWithIdOnly = await prisma.localidades.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LocalidadesFindManyArgs>(args?: SelectSubset<T, LocalidadesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocalidadesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Localidades.
     * @param {LocalidadesCreateArgs} args - Arguments to create a Localidades.
     * @example
     * // Create one Localidades
     * const Localidades = await prisma.localidades.create({
     *   data: {
     *     // ... data to create a Localidades
     *   }
     * })
     * 
     */
    create<T extends LocalidadesCreateArgs>(args: SelectSubset<T, LocalidadesCreateArgs<ExtArgs>>): Prisma__LocalidadesClient<$Result.GetResult<Prisma.$LocalidadesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Localidades.
     * @param {LocalidadesCreateManyArgs} args - Arguments to create many Localidades.
     * @example
     * // Create many Localidades
     * const localidades = await prisma.localidades.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LocalidadesCreateManyArgs>(args?: SelectSubset<T, LocalidadesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Localidades and returns the data saved in the database.
     * @param {LocalidadesCreateManyAndReturnArgs} args - Arguments to create many Localidades.
     * @example
     * // Create many Localidades
     * const localidades = await prisma.localidades.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Localidades and only return the `id`
     * const localidadesWithIdOnly = await prisma.localidades.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LocalidadesCreateManyAndReturnArgs>(args?: SelectSubset<T, LocalidadesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocalidadesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Localidades.
     * @param {LocalidadesDeleteArgs} args - Arguments to delete one Localidades.
     * @example
     * // Delete one Localidades
     * const Localidades = await prisma.localidades.delete({
     *   where: {
     *     // ... filter to delete one Localidades
     *   }
     * })
     * 
     */
    delete<T extends LocalidadesDeleteArgs>(args: SelectSubset<T, LocalidadesDeleteArgs<ExtArgs>>): Prisma__LocalidadesClient<$Result.GetResult<Prisma.$LocalidadesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Localidades.
     * @param {LocalidadesUpdateArgs} args - Arguments to update one Localidades.
     * @example
     * // Update one Localidades
     * const localidades = await prisma.localidades.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LocalidadesUpdateArgs>(args: SelectSubset<T, LocalidadesUpdateArgs<ExtArgs>>): Prisma__LocalidadesClient<$Result.GetResult<Prisma.$LocalidadesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Localidades.
     * @param {LocalidadesDeleteManyArgs} args - Arguments to filter Localidades to delete.
     * @example
     * // Delete a few Localidades
     * const { count } = await prisma.localidades.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LocalidadesDeleteManyArgs>(args?: SelectSubset<T, LocalidadesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Localidades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocalidadesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Localidades
     * const localidades = await prisma.localidades.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LocalidadesUpdateManyArgs>(args: SelectSubset<T, LocalidadesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Localidades and returns the data updated in the database.
     * @param {LocalidadesUpdateManyAndReturnArgs} args - Arguments to update many Localidades.
     * @example
     * // Update many Localidades
     * const localidades = await prisma.localidades.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Localidades and only return the `id`
     * const localidadesWithIdOnly = await prisma.localidades.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LocalidadesUpdateManyAndReturnArgs>(args: SelectSubset<T, LocalidadesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocalidadesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Localidades.
     * @param {LocalidadesUpsertArgs} args - Arguments to update or create a Localidades.
     * @example
     * // Update or create a Localidades
     * const localidades = await prisma.localidades.upsert({
     *   create: {
     *     // ... data to create a Localidades
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Localidades we want to update
     *   }
     * })
     */
    upsert<T extends LocalidadesUpsertArgs>(args: SelectSubset<T, LocalidadesUpsertArgs<ExtArgs>>): Prisma__LocalidadesClient<$Result.GetResult<Prisma.$LocalidadesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Localidades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocalidadesCountArgs} args - Arguments to filter Localidades to count.
     * @example
     * // Count the number of Localidades
     * const count = await prisma.localidades.count({
     *   where: {
     *     // ... the filter for the Localidades we want to count
     *   }
     * })
    **/
    count<T extends LocalidadesCountArgs>(
      args?: Subset<T, LocalidadesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LocalidadesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Localidades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocalidadesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LocalidadesAggregateArgs>(args: Subset<T, LocalidadesAggregateArgs>): Prisma.PrismaPromise<GetLocalidadesAggregateType<T>>

    /**
     * Group by Localidades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocalidadesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LocalidadesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LocalidadesGroupByArgs['orderBy'] }
        : { orderBy?: LocalidadesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LocalidadesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLocalidadesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Localidades model
   */
  readonly fields: LocalidadesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Localidades.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LocalidadesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ciudad<T extends Localidades$ciudadArgs<ExtArgs> = {}>(args?: Subset<T, Localidades$ciudadArgs<ExtArgs>>): Prisma__CiudadesClient<$Result.GetResult<Prisma.$CiudadesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    direcciones<T extends Localidades$direccionesArgs<ExtArgs> = {}>(args?: Subset<T, Localidades$direccionesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DireccionesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Localidades model
   */
  interface LocalidadesFieldRefs {
    readonly id: FieldRef<"Localidades", 'Int'>
    readonly idCiudad: FieldRef<"Localidades", 'Int'>
    readonly nombre: FieldRef<"Localidades", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Localidades findUnique
   */
  export type LocalidadesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Localidades
     */
    select?: LocalidadesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Localidades
     */
    omit?: LocalidadesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalidadesInclude<ExtArgs> | null
    /**
     * Filter, which Localidades to fetch.
     */
    where: LocalidadesWhereUniqueInput
  }

  /**
   * Localidades findUniqueOrThrow
   */
  export type LocalidadesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Localidades
     */
    select?: LocalidadesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Localidades
     */
    omit?: LocalidadesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalidadesInclude<ExtArgs> | null
    /**
     * Filter, which Localidades to fetch.
     */
    where: LocalidadesWhereUniqueInput
  }

  /**
   * Localidades findFirst
   */
  export type LocalidadesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Localidades
     */
    select?: LocalidadesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Localidades
     */
    omit?: LocalidadesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalidadesInclude<ExtArgs> | null
    /**
     * Filter, which Localidades to fetch.
     */
    where?: LocalidadesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Localidades to fetch.
     */
    orderBy?: LocalidadesOrderByWithRelationInput | LocalidadesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Localidades.
     */
    cursor?: LocalidadesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Localidades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Localidades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Localidades.
     */
    distinct?: LocalidadesScalarFieldEnum | LocalidadesScalarFieldEnum[]
  }

  /**
   * Localidades findFirstOrThrow
   */
  export type LocalidadesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Localidades
     */
    select?: LocalidadesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Localidades
     */
    omit?: LocalidadesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalidadesInclude<ExtArgs> | null
    /**
     * Filter, which Localidades to fetch.
     */
    where?: LocalidadesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Localidades to fetch.
     */
    orderBy?: LocalidadesOrderByWithRelationInput | LocalidadesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Localidades.
     */
    cursor?: LocalidadesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Localidades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Localidades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Localidades.
     */
    distinct?: LocalidadesScalarFieldEnum | LocalidadesScalarFieldEnum[]
  }

  /**
   * Localidades findMany
   */
  export type LocalidadesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Localidades
     */
    select?: LocalidadesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Localidades
     */
    omit?: LocalidadesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalidadesInclude<ExtArgs> | null
    /**
     * Filter, which Localidades to fetch.
     */
    where?: LocalidadesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Localidades to fetch.
     */
    orderBy?: LocalidadesOrderByWithRelationInput | LocalidadesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Localidades.
     */
    cursor?: LocalidadesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Localidades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Localidades.
     */
    skip?: number
    distinct?: LocalidadesScalarFieldEnum | LocalidadesScalarFieldEnum[]
  }

  /**
   * Localidades create
   */
  export type LocalidadesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Localidades
     */
    select?: LocalidadesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Localidades
     */
    omit?: LocalidadesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalidadesInclude<ExtArgs> | null
    /**
     * The data needed to create a Localidades.
     */
    data: XOR<LocalidadesCreateInput, LocalidadesUncheckedCreateInput>
  }

  /**
   * Localidades createMany
   */
  export type LocalidadesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Localidades.
     */
    data: LocalidadesCreateManyInput | LocalidadesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Localidades createManyAndReturn
   */
  export type LocalidadesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Localidades
     */
    select?: LocalidadesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Localidades
     */
    omit?: LocalidadesOmit<ExtArgs> | null
    /**
     * The data used to create many Localidades.
     */
    data: LocalidadesCreateManyInput | LocalidadesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalidadesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Localidades update
   */
  export type LocalidadesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Localidades
     */
    select?: LocalidadesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Localidades
     */
    omit?: LocalidadesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalidadesInclude<ExtArgs> | null
    /**
     * The data needed to update a Localidades.
     */
    data: XOR<LocalidadesUpdateInput, LocalidadesUncheckedUpdateInput>
    /**
     * Choose, which Localidades to update.
     */
    where: LocalidadesWhereUniqueInput
  }

  /**
   * Localidades updateMany
   */
  export type LocalidadesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Localidades.
     */
    data: XOR<LocalidadesUpdateManyMutationInput, LocalidadesUncheckedUpdateManyInput>
    /**
     * Filter which Localidades to update
     */
    where?: LocalidadesWhereInput
    /**
     * Limit how many Localidades to update.
     */
    limit?: number
  }

  /**
   * Localidades updateManyAndReturn
   */
  export type LocalidadesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Localidades
     */
    select?: LocalidadesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Localidades
     */
    omit?: LocalidadesOmit<ExtArgs> | null
    /**
     * The data used to update Localidades.
     */
    data: XOR<LocalidadesUpdateManyMutationInput, LocalidadesUncheckedUpdateManyInput>
    /**
     * Filter which Localidades to update
     */
    where?: LocalidadesWhereInput
    /**
     * Limit how many Localidades to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalidadesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Localidades upsert
   */
  export type LocalidadesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Localidades
     */
    select?: LocalidadesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Localidades
     */
    omit?: LocalidadesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalidadesInclude<ExtArgs> | null
    /**
     * The filter to search for the Localidades to update in case it exists.
     */
    where: LocalidadesWhereUniqueInput
    /**
     * In case the Localidades found by the `where` argument doesn't exist, create a new Localidades with this data.
     */
    create: XOR<LocalidadesCreateInput, LocalidadesUncheckedCreateInput>
    /**
     * In case the Localidades was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LocalidadesUpdateInput, LocalidadesUncheckedUpdateInput>
  }

  /**
   * Localidades delete
   */
  export type LocalidadesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Localidades
     */
    select?: LocalidadesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Localidades
     */
    omit?: LocalidadesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalidadesInclude<ExtArgs> | null
    /**
     * Filter which Localidades to delete.
     */
    where: LocalidadesWhereUniqueInput
  }

  /**
   * Localidades deleteMany
   */
  export type LocalidadesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Localidades to delete
     */
    where?: LocalidadesWhereInput
    /**
     * Limit how many Localidades to delete.
     */
    limit?: number
  }

  /**
   * Localidades.ciudad
   */
  export type Localidades$ciudadArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ciudades
     */
    select?: CiudadesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ciudades
     */
    omit?: CiudadesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CiudadesInclude<ExtArgs> | null
    where?: CiudadesWhereInput
  }

  /**
   * Localidades.direcciones
   */
  export type Localidades$direccionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Direcciones
     */
    select?: DireccionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Direcciones
     */
    omit?: DireccionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DireccionesInclude<ExtArgs> | null
    where?: DireccionesWhereInput
    orderBy?: DireccionesOrderByWithRelationInput | DireccionesOrderByWithRelationInput[]
    cursor?: DireccionesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DireccionesScalarFieldEnum | DireccionesScalarFieldEnum[]
  }

  /**
   * Localidades without action
   */
  export type LocalidadesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Localidades
     */
    select?: LocalidadesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Localidades
     */
    omit?: LocalidadesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalidadesInclude<ExtArgs> | null
  }


  /**
   * Model MetodoPago
   */

  export type AggregateMetodoPago = {
    _count: MetodoPagoCountAggregateOutputType | null
    _avg: MetodoPagoAvgAggregateOutputType | null
    _sum: MetodoPagoSumAggregateOutputType | null
    _min: MetodoPagoMinAggregateOutputType | null
    _max: MetodoPagoMaxAggregateOutputType | null
  }

  export type MetodoPagoAvgAggregateOutputType = {
    id: number | null
  }

  export type MetodoPagoSumAggregateOutputType = {
    id: number | null
  }

  export type MetodoPagoMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    status: boolean | null
  }

  export type MetodoPagoMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    status: boolean | null
  }

  export type MetodoPagoCountAggregateOutputType = {
    id: number
    nombre: number
    status: number
    _all: number
  }


  export type MetodoPagoAvgAggregateInputType = {
    id?: true
  }

  export type MetodoPagoSumAggregateInputType = {
    id?: true
  }

  export type MetodoPagoMinAggregateInputType = {
    id?: true
    nombre?: true
    status?: true
  }

  export type MetodoPagoMaxAggregateInputType = {
    id?: true
    nombre?: true
    status?: true
  }

  export type MetodoPagoCountAggregateInputType = {
    id?: true
    nombre?: true
    status?: true
    _all?: true
  }

  export type MetodoPagoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MetodoPago to aggregate.
     */
    where?: MetodoPagoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MetodoPagos to fetch.
     */
    orderBy?: MetodoPagoOrderByWithRelationInput | MetodoPagoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MetodoPagoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MetodoPagos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MetodoPagos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MetodoPagos
    **/
    _count?: true | MetodoPagoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MetodoPagoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MetodoPagoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MetodoPagoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MetodoPagoMaxAggregateInputType
  }

  export type GetMetodoPagoAggregateType<T extends MetodoPagoAggregateArgs> = {
        [P in keyof T & keyof AggregateMetodoPago]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMetodoPago[P]>
      : GetScalarType<T[P], AggregateMetodoPago[P]>
  }




  export type MetodoPagoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MetodoPagoWhereInput
    orderBy?: MetodoPagoOrderByWithAggregationInput | MetodoPagoOrderByWithAggregationInput[]
    by: MetodoPagoScalarFieldEnum[] | MetodoPagoScalarFieldEnum
    having?: MetodoPagoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MetodoPagoCountAggregateInputType | true
    _avg?: MetodoPagoAvgAggregateInputType
    _sum?: MetodoPagoSumAggregateInputType
    _min?: MetodoPagoMinAggregateInputType
    _max?: MetodoPagoMaxAggregateInputType
  }

  export type MetodoPagoGroupByOutputType = {
    id: number
    nombre: string | null
    status: boolean | null
    _count: MetodoPagoCountAggregateOutputType | null
    _avg: MetodoPagoAvgAggregateOutputType | null
    _sum: MetodoPagoSumAggregateOutputType | null
    _min: MetodoPagoMinAggregateOutputType | null
    _max: MetodoPagoMaxAggregateOutputType | null
  }

  type GetMetodoPagoGroupByPayload<T extends MetodoPagoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MetodoPagoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MetodoPagoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MetodoPagoGroupByOutputType[P]>
            : GetScalarType<T[P], MetodoPagoGroupByOutputType[P]>
        }
      >
    >


  export type MetodoPagoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    status?: boolean
    pagos?: boolean | MetodoPago$pagosArgs<ExtArgs>
    _count?: boolean | MetodoPagoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["metodoPago"]>

  export type MetodoPagoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    status?: boolean
  }, ExtArgs["result"]["metodoPago"]>

  export type MetodoPagoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    status?: boolean
  }, ExtArgs["result"]["metodoPago"]>

  export type MetodoPagoSelectScalar = {
    id?: boolean
    nombre?: boolean
    status?: boolean
  }

  export type MetodoPagoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "status", ExtArgs["result"]["metodoPago"]>
  export type MetodoPagoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pagos?: boolean | MetodoPago$pagosArgs<ExtArgs>
    _count?: boolean | MetodoPagoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MetodoPagoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type MetodoPagoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $MetodoPagoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MetodoPago"
    objects: {
      pagos: Prisma.$PagosPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string | null
      status: boolean | null
    }, ExtArgs["result"]["metodoPago"]>
    composites: {}
  }

  type MetodoPagoGetPayload<S extends boolean | null | undefined | MetodoPagoDefaultArgs> = $Result.GetResult<Prisma.$MetodoPagoPayload, S>

  type MetodoPagoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MetodoPagoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MetodoPagoCountAggregateInputType | true
    }

  export interface MetodoPagoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MetodoPago'], meta: { name: 'MetodoPago' } }
    /**
     * Find zero or one MetodoPago that matches the filter.
     * @param {MetodoPagoFindUniqueArgs} args - Arguments to find a MetodoPago
     * @example
     * // Get one MetodoPago
     * const metodoPago = await prisma.metodoPago.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MetodoPagoFindUniqueArgs>(args: SelectSubset<T, MetodoPagoFindUniqueArgs<ExtArgs>>): Prisma__MetodoPagoClient<$Result.GetResult<Prisma.$MetodoPagoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MetodoPago that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MetodoPagoFindUniqueOrThrowArgs} args - Arguments to find a MetodoPago
     * @example
     * // Get one MetodoPago
     * const metodoPago = await prisma.metodoPago.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MetodoPagoFindUniqueOrThrowArgs>(args: SelectSubset<T, MetodoPagoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MetodoPagoClient<$Result.GetResult<Prisma.$MetodoPagoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MetodoPago that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetodoPagoFindFirstArgs} args - Arguments to find a MetodoPago
     * @example
     * // Get one MetodoPago
     * const metodoPago = await prisma.metodoPago.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MetodoPagoFindFirstArgs>(args?: SelectSubset<T, MetodoPagoFindFirstArgs<ExtArgs>>): Prisma__MetodoPagoClient<$Result.GetResult<Prisma.$MetodoPagoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MetodoPago that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetodoPagoFindFirstOrThrowArgs} args - Arguments to find a MetodoPago
     * @example
     * // Get one MetodoPago
     * const metodoPago = await prisma.metodoPago.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MetodoPagoFindFirstOrThrowArgs>(args?: SelectSubset<T, MetodoPagoFindFirstOrThrowArgs<ExtArgs>>): Prisma__MetodoPagoClient<$Result.GetResult<Prisma.$MetodoPagoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MetodoPagos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetodoPagoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MetodoPagos
     * const metodoPagos = await prisma.metodoPago.findMany()
     * 
     * // Get first 10 MetodoPagos
     * const metodoPagos = await prisma.metodoPago.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const metodoPagoWithIdOnly = await prisma.metodoPago.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MetodoPagoFindManyArgs>(args?: SelectSubset<T, MetodoPagoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MetodoPagoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MetodoPago.
     * @param {MetodoPagoCreateArgs} args - Arguments to create a MetodoPago.
     * @example
     * // Create one MetodoPago
     * const MetodoPago = await prisma.metodoPago.create({
     *   data: {
     *     // ... data to create a MetodoPago
     *   }
     * })
     * 
     */
    create<T extends MetodoPagoCreateArgs>(args: SelectSubset<T, MetodoPagoCreateArgs<ExtArgs>>): Prisma__MetodoPagoClient<$Result.GetResult<Prisma.$MetodoPagoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MetodoPagos.
     * @param {MetodoPagoCreateManyArgs} args - Arguments to create many MetodoPagos.
     * @example
     * // Create many MetodoPagos
     * const metodoPago = await prisma.metodoPago.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MetodoPagoCreateManyArgs>(args?: SelectSubset<T, MetodoPagoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MetodoPagos and returns the data saved in the database.
     * @param {MetodoPagoCreateManyAndReturnArgs} args - Arguments to create many MetodoPagos.
     * @example
     * // Create many MetodoPagos
     * const metodoPago = await prisma.metodoPago.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MetodoPagos and only return the `id`
     * const metodoPagoWithIdOnly = await prisma.metodoPago.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MetodoPagoCreateManyAndReturnArgs>(args?: SelectSubset<T, MetodoPagoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MetodoPagoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MetodoPago.
     * @param {MetodoPagoDeleteArgs} args - Arguments to delete one MetodoPago.
     * @example
     * // Delete one MetodoPago
     * const MetodoPago = await prisma.metodoPago.delete({
     *   where: {
     *     // ... filter to delete one MetodoPago
     *   }
     * })
     * 
     */
    delete<T extends MetodoPagoDeleteArgs>(args: SelectSubset<T, MetodoPagoDeleteArgs<ExtArgs>>): Prisma__MetodoPagoClient<$Result.GetResult<Prisma.$MetodoPagoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MetodoPago.
     * @param {MetodoPagoUpdateArgs} args - Arguments to update one MetodoPago.
     * @example
     * // Update one MetodoPago
     * const metodoPago = await prisma.metodoPago.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MetodoPagoUpdateArgs>(args: SelectSubset<T, MetodoPagoUpdateArgs<ExtArgs>>): Prisma__MetodoPagoClient<$Result.GetResult<Prisma.$MetodoPagoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MetodoPagos.
     * @param {MetodoPagoDeleteManyArgs} args - Arguments to filter MetodoPagos to delete.
     * @example
     * // Delete a few MetodoPagos
     * const { count } = await prisma.metodoPago.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MetodoPagoDeleteManyArgs>(args?: SelectSubset<T, MetodoPagoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MetodoPagos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetodoPagoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MetodoPagos
     * const metodoPago = await prisma.metodoPago.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MetodoPagoUpdateManyArgs>(args: SelectSubset<T, MetodoPagoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MetodoPagos and returns the data updated in the database.
     * @param {MetodoPagoUpdateManyAndReturnArgs} args - Arguments to update many MetodoPagos.
     * @example
     * // Update many MetodoPagos
     * const metodoPago = await prisma.metodoPago.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MetodoPagos and only return the `id`
     * const metodoPagoWithIdOnly = await prisma.metodoPago.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MetodoPagoUpdateManyAndReturnArgs>(args: SelectSubset<T, MetodoPagoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MetodoPagoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MetodoPago.
     * @param {MetodoPagoUpsertArgs} args - Arguments to update or create a MetodoPago.
     * @example
     * // Update or create a MetodoPago
     * const metodoPago = await prisma.metodoPago.upsert({
     *   create: {
     *     // ... data to create a MetodoPago
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MetodoPago we want to update
     *   }
     * })
     */
    upsert<T extends MetodoPagoUpsertArgs>(args: SelectSubset<T, MetodoPagoUpsertArgs<ExtArgs>>): Prisma__MetodoPagoClient<$Result.GetResult<Prisma.$MetodoPagoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MetodoPagos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetodoPagoCountArgs} args - Arguments to filter MetodoPagos to count.
     * @example
     * // Count the number of MetodoPagos
     * const count = await prisma.metodoPago.count({
     *   where: {
     *     // ... the filter for the MetodoPagos we want to count
     *   }
     * })
    **/
    count<T extends MetodoPagoCountArgs>(
      args?: Subset<T, MetodoPagoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MetodoPagoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MetodoPago.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetodoPagoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MetodoPagoAggregateArgs>(args: Subset<T, MetodoPagoAggregateArgs>): Prisma.PrismaPromise<GetMetodoPagoAggregateType<T>>

    /**
     * Group by MetodoPago.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetodoPagoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MetodoPagoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MetodoPagoGroupByArgs['orderBy'] }
        : { orderBy?: MetodoPagoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MetodoPagoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMetodoPagoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MetodoPago model
   */
  readonly fields: MetodoPagoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MetodoPago.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MetodoPagoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pagos<T extends MetodoPago$pagosArgs<ExtArgs> = {}>(args?: Subset<T, MetodoPago$pagosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PagosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MetodoPago model
   */
  interface MetodoPagoFieldRefs {
    readonly id: FieldRef<"MetodoPago", 'Int'>
    readonly nombre: FieldRef<"MetodoPago", 'String'>
    readonly status: FieldRef<"MetodoPago", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * MetodoPago findUnique
   */
  export type MetodoPagoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetodoPago
     */
    select?: MetodoPagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetodoPago
     */
    omit?: MetodoPagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetodoPagoInclude<ExtArgs> | null
    /**
     * Filter, which MetodoPago to fetch.
     */
    where: MetodoPagoWhereUniqueInput
  }

  /**
   * MetodoPago findUniqueOrThrow
   */
  export type MetodoPagoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetodoPago
     */
    select?: MetodoPagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetodoPago
     */
    omit?: MetodoPagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetodoPagoInclude<ExtArgs> | null
    /**
     * Filter, which MetodoPago to fetch.
     */
    where: MetodoPagoWhereUniqueInput
  }

  /**
   * MetodoPago findFirst
   */
  export type MetodoPagoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetodoPago
     */
    select?: MetodoPagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetodoPago
     */
    omit?: MetodoPagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetodoPagoInclude<ExtArgs> | null
    /**
     * Filter, which MetodoPago to fetch.
     */
    where?: MetodoPagoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MetodoPagos to fetch.
     */
    orderBy?: MetodoPagoOrderByWithRelationInput | MetodoPagoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MetodoPagos.
     */
    cursor?: MetodoPagoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MetodoPagos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MetodoPagos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MetodoPagos.
     */
    distinct?: MetodoPagoScalarFieldEnum | MetodoPagoScalarFieldEnum[]
  }

  /**
   * MetodoPago findFirstOrThrow
   */
  export type MetodoPagoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetodoPago
     */
    select?: MetodoPagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetodoPago
     */
    omit?: MetodoPagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetodoPagoInclude<ExtArgs> | null
    /**
     * Filter, which MetodoPago to fetch.
     */
    where?: MetodoPagoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MetodoPagos to fetch.
     */
    orderBy?: MetodoPagoOrderByWithRelationInput | MetodoPagoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MetodoPagos.
     */
    cursor?: MetodoPagoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MetodoPagos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MetodoPagos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MetodoPagos.
     */
    distinct?: MetodoPagoScalarFieldEnum | MetodoPagoScalarFieldEnum[]
  }

  /**
   * MetodoPago findMany
   */
  export type MetodoPagoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetodoPago
     */
    select?: MetodoPagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetodoPago
     */
    omit?: MetodoPagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetodoPagoInclude<ExtArgs> | null
    /**
     * Filter, which MetodoPagos to fetch.
     */
    where?: MetodoPagoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MetodoPagos to fetch.
     */
    orderBy?: MetodoPagoOrderByWithRelationInput | MetodoPagoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MetodoPagos.
     */
    cursor?: MetodoPagoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MetodoPagos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MetodoPagos.
     */
    skip?: number
    distinct?: MetodoPagoScalarFieldEnum | MetodoPagoScalarFieldEnum[]
  }

  /**
   * MetodoPago create
   */
  export type MetodoPagoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetodoPago
     */
    select?: MetodoPagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetodoPago
     */
    omit?: MetodoPagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetodoPagoInclude<ExtArgs> | null
    /**
     * The data needed to create a MetodoPago.
     */
    data: XOR<MetodoPagoCreateInput, MetodoPagoUncheckedCreateInput>
  }

  /**
   * MetodoPago createMany
   */
  export type MetodoPagoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MetodoPagos.
     */
    data: MetodoPagoCreateManyInput | MetodoPagoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MetodoPago createManyAndReturn
   */
  export type MetodoPagoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetodoPago
     */
    select?: MetodoPagoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MetodoPago
     */
    omit?: MetodoPagoOmit<ExtArgs> | null
    /**
     * The data used to create many MetodoPagos.
     */
    data: MetodoPagoCreateManyInput | MetodoPagoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MetodoPago update
   */
  export type MetodoPagoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetodoPago
     */
    select?: MetodoPagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetodoPago
     */
    omit?: MetodoPagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetodoPagoInclude<ExtArgs> | null
    /**
     * The data needed to update a MetodoPago.
     */
    data: XOR<MetodoPagoUpdateInput, MetodoPagoUncheckedUpdateInput>
    /**
     * Choose, which MetodoPago to update.
     */
    where: MetodoPagoWhereUniqueInput
  }

  /**
   * MetodoPago updateMany
   */
  export type MetodoPagoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MetodoPagos.
     */
    data: XOR<MetodoPagoUpdateManyMutationInput, MetodoPagoUncheckedUpdateManyInput>
    /**
     * Filter which MetodoPagos to update
     */
    where?: MetodoPagoWhereInput
    /**
     * Limit how many MetodoPagos to update.
     */
    limit?: number
  }

  /**
   * MetodoPago updateManyAndReturn
   */
  export type MetodoPagoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetodoPago
     */
    select?: MetodoPagoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MetodoPago
     */
    omit?: MetodoPagoOmit<ExtArgs> | null
    /**
     * The data used to update MetodoPagos.
     */
    data: XOR<MetodoPagoUpdateManyMutationInput, MetodoPagoUncheckedUpdateManyInput>
    /**
     * Filter which MetodoPagos to update
     */
    where?: MetodoPagoWhereInput
    /**
     * Limit how many MetodoPagos to update.
     */
    limit?: number
  }

  /**
   * MetodoPago upsert
   */
  export type MetodoPagoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetodoPago
     */
    select?: MetodoPagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetodoPago
     */
    omit?: MetodoPagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetodoPagoInclude<ExtArgs> | null
    /**
     * The filter to search for the MetodoPago to update in case it exists.
     */
    where: MetodoPagoWhereUniqueInput
    /**
     * In case the MetodoPago found by the `where` argument doesn't exist, create a new MetodoPago with this data.
     */
    create: XOR<MetodoPagoCreateInput, MetodoPagoUncheckedCreateInput>
    /**
     * In case the MetodoPago was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MetodoPagoUpdateInput, MetodoPagoUncheckedUpdateInput>
  }

  /**
   * MetodoPago delete
   */
  export type MetodoPagoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetodoPago
     */
    select?: MetodoPagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetodoPago
     */
    omit?: MetodoPagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetodoPagoInclude<ExtArgs> | null
    /**
     * Filter which MetodoPago to delete.
     */
    where: MetodoPagoWhereUniqueInput
  }

  /**
   * MetodoPago deleteMany
   */
  export type MetodoPagoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MetodoPagos to delete
     */
    where?: MetodoPagoWhereInput
    /**
     * Limit how many MetodoPagos to delete.
     */
    limit?: number
  }

  /**
   * MetodoPago.pagos
   */
  export type MetodoPago$pagosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pagos
     */
    select?: PagosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pagos
     */
    omit?: PagosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagosInclude<ExtArgs> | null
    where?: PagosWhereInput
    orderBy?: PagosOrderByWithRelationInput | PagosOrderByWithRelationInput[]
    cursor?: PagosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PagosScalarFieldEnum | PagosScalarFieldEnum[]
  }

  /**
   * MetodoPago without action
   */
  export type MetodoPagoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetodoPago
     */
    select?: MetodoPagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetodoPago
     */
    omit?: MetodoPagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetodoPagoInclude<ExtArgs> | null
  }


  /**
   * Model Municipios
   */

  export type AggregateMunicipios = {
    _count: MunicipiosCountAggregateOutputType | null
    _avg: MunicipiosAvgAggregateOutputType | null
    _sum: MunicipiosSumAggregateOutputType | null
    _min: MunicipiosMinAggregateOutputType | null
    _max: MunicipiosMaxAggregateOutputType | null
  }

  export type MunicipiosAvgAggregateOutputType = {
    id: number | null
    idEstado: number | null
  }

  export type MunicipiosSumAggregateOutputType = {
    id: number | null
    idEstado: number | null
  }

  export type MunicipiosMinAggregateOutputType = {
    id: number | null
    idEstado: number | null
    nombre: string | null
  }

  export type MunicipiosMaxAggregateOutputType = {
    id: number | null
    idEstado: number | null
    nombre: string | null
  }

  export type MunicipiosCountAggregateOutputType = {
    id: number
    idEstado: number
    nombre: number
    _all: number
  }


  export type MunicipiosAvgAggregateInputType = {
    id?: true
    idEstado?: true
  }

  export type MunicipiosSumAggregateInputType = {
    id?: true
    idEstado?: true
  }

  export type MunicipiosMinAggregateInputType = {
    id?: true
    idEstado?: true
    nombre?: true
  }

  export type MunicipiosMaxAggregateInputType = {
    id?: true
    idEstado?: true
    nombre?: true
  }

  export type MunicipiosCountAggregateInputType = {
    id?: true
    idEstado?: true
    nombre?: true
    _all?: true
  }

  export type MunicipiosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Municipios to aggregate.
     */
    where?: MunicipiosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Municipios to fetch.
     */
    orderBy?: MunicipiosOrderByWithRelationInput | MunicipiosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MunicipiosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Municipios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Municipios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Municipios
    **/
    _count?: true | MunicipiosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MunicipiosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MunicipiosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MunicipiosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MunicipiosMaxAggregateInputType
  }

  export type GetMunicipiosAggregateType<T extends MunicipiosAggregateArgs> = {
        [P in keyof T & keyof AggregateMunicipios]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMunicipios[P]>
      : GetScalarType<T[P], AggregateMunicipios[P]>
  }




  export type MunicipiosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MunicipiosWhereInput
    orderBy?: MunicipiosOrderByWithAggregationInput | MunicipiosOrderByWithAggregationInput[]
    by: MunicipiosScalarFieldEnum[] | MunicipiosScalarFieldEnum
    having?: MunicipiosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MunicipiosCountAggregateInputType | true
    _avg?: MunicipiosAvgAggregateInputType
    _sum?: MunicipiosSumAggregateInputType
    _min?: MunicipiosMinAggregateInputType
    _max?: MunicipiosMaxAggregateInputType
  }

  export type MunicipiosGroupByOutputType = {
    id: number
    idEstado: number | null
    nombre: string | null
    _count: MunicipiosCountAggregateOutputType | null
    _avg: MunicipiosAvgAggregateOutputType | null
    _sum: MunicipiosSumAggregateOutputType | null
    _min: MunicipiosMinAggregateOutputType | null
    _max: MunicipiosMaxAggregateOutputType | null
  }

  type GetMunicipiosGroupByPayload<T extends MunicipiosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MunicipiosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MunicipiosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MunicipiosGroupByOutputType[P]>
            : GetScalarType<T[P], MunicipiosGroupByOutputType[P]>
        }
      >
    >


  export type MunicipiosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idEstado?: boolean
    nombre?: boolean
    estado?: boolean | Municipios$estadoArgs<ExtArgs>
    ciudades?: boolean | Municipios$ciudadesArgs<ExtArgs>
    _count?: boolean | MunicipiosCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["municipios"]>

  export type MunicipiosSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idEstado?: boolean
    nombre?: boolean
    estado?: boolean | Municipios$estadoArgs<ExtArgs>
  }, ExtArgs["result"]["municipios"]>

  export type MunicipiosSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idEstado?: boolean
    nombre?: boolean
    estado?: boolean | Municipios$estadoArgs<ExtArgs>
  }, ExtArgs["result"]["municipios"]>

  export type MunicipiosSelectScalar = {
    id?: boolean
    idEstado?: boolean
    nombre?: boolean
  }

  export type MunicipiosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "idEstado" | "nombre", ExtArgs["result"]["municipios"]>
  export type MunicipiosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    estado?: boolean | Municipios$estadoArgs<ExtArgs>
    ciudades?: boolean | Municipios$ciudadesArgs<ExtArgs>
    _count?: boolean | MunicipiosCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MunicipiosIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    estado?: boolean | Municipios$estadoArgs<ExtArgs>
  }
  export type MunicipiosIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    estado?: boolean | Municipios$estadoArgs<ExtArgs>
  }

  export type $MunicipiosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Municipios"
    objects: {
      estado: Prisma.$EstadosPayload<ExtArgs> | null
      ciudades: Prisma.$CiudadesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      idEstado: number | null
      nombre: string | null
    }, ExtArgs["result"]["municipios"]>
    composites: {}
  }

  type MunicipiosGetPayload<S extends boolean | null | undefined | MunicipiosDefaultArgs> = $Result.GetResult<Prisma.$MunicipiosPayload, S>

  type MunicipiosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MunicipiosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MunicipiosCountAggregateInputType | true
    }

  export interface MunicipiosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Municipios'], meta: { name: 'Municipios' } }
    /**
     * Find zero or one Municipios that matches the filter.
     * @param {MunicipiosFindUniqueArgs} args - Arguments to find a Municipios
     * @example
     * // Get one Municipios
     * const municipios = await prisma.municipios.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MunicipiosFindUniqueArgs>(args: SelectSubset<T, MunicipiosFindUniqueArgs<ExtArgs>>): Prisma__MunicipiosClient<$Result.GetResult<Prisma.$MunicipiosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Municipios that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MunicipiosFindUniqueOrThrowArgs} args - Arguments to find a Municipios
     * @example
     * // Get one Municipios
     * const municipios = await prisma.municipios.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MunicipiosFindUniqueOrThrowArgs>(args: SelectSubset<T, MunicipiosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MunicipiosClient<$Result.GetResult<Prisma.$MunicipiosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Municipios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MunicipiosFindFirstArgs} args - Arguments to find a Municipios
     * @example
     * // Get one Municipios
     * const municipios = await prisma.municipios.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MunicipiosFindFirstArgs>(args?: SelectSubset<T, MunicipiosFindFirstArgs<ExtArgs>>): Prisma__MunicipiosClient<$Result.GetResult<Prisma.$MunicipiosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Municipios that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MunicipiosFindFirstOrThrowArgs} args - Arguments to find a Municipios
     * @example
     * // Get one Municipios
     * const municipios = await prisma.municipios.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MunicipiosFindFirstOrThrowArgs>(args?: SelectSubset<T, MunicipiosFindFirstOrThrowArgs<ExtArgs>>): Prisma__MunicipiosClient<$Result.GetResult<Prisma.$MunicipiosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Municipios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MunicipiosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Municipios
     * const municipios = await prisma.municipios.findMany()
     * 
     * // Get first 10 Municipios
     * const municipios = await prisma.municipios.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const municipiosWithIdOnly = await prisma.municipios.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MunicipiosFindManyArgs>(args?: SelectSubset<T, MunicipiosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MunicipiosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Municipios.
     * @param {MunicipiosCreateArgs} args - Arguments to create a Municipios.
     * @example
     * // Create one Municipios
     * const Municipios = await prisma.municipios.create({
     *   data: {
     *     // ... data to create a Municipios
     *   }
     * })
     * 
     */
    create<T extends MunicipiosCreateArgs>(args: SelectSubset<T, MunicipiosCreateArgs<ExtArgs>>): Prisma__MunicipiosClient<$Result.GetResult<Prisma.$MunicipiosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Municipios.
     * @param {MunicipiosCreateManyArgs} args - Arguments to create many Municipios.
     * @example
     * // Create many Municipios
     * const municipios = await prisma.municipios.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MunicipiosCreateManyArgs>(args?: SelectSubset<T, MunicipiosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Municipios and returns the data saved in the database.
     * @param {MunicipiosCreateManyAndReturnArgs} args - Arguments to create many Municipios.
     * @example
     * // Create many Municipios
     * const municipios = await prisma.municipios.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Municipios and only return the `id`
     * const municipiosWithIdOnly = await prisma.municipios.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MunicipiosCreateManyAndReturnArgs>(args?: SelectSubset<T, MunicipiosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MunicipiosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Municipios.
     * @param {MunicipiosDeleteArgs} args - Arguments to delete one Municipios.
     * @example
     * // Delete one Municipios
     * const Municipios = await prisma.municipios.delete({
     *   where: {
     *     // ... filter to delete one Municipios
     *   }
     * })
     * 
     */
    delete<T extends MunicipiosDeleteArgs>(args: SelectSubset<T, MunicipiosDeleteArgs<ExtArgs>>): Prisma__MunicipiosClient<$Result.GetResult<Prisma.$MunicipiosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Municipios.
     * @param {MunicipiosUpdateArgs} args - Arguments to update one Municipios.
     * @example
     * // Update one Municipios
     * const municipios = await prisma.municipios.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MunicipiosUpdateArgs>(args: SelectSubset<T, MunicipiosUpdateArgs<ExtArgs>>): Prisma__MunicipiosClient<$Result.GetResult<Prisma.$MunicipiosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Municipios.
     * @param {MunicipiosDeleteManyArgs} args - Arguments to filter Municipios to delete.
     * @example
     * // Delete a few Municipios
     * const { count } = await prisma.municipios.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MunicipiosDeleteManyArgs>(args?: SelectSubset<T, MunicipiosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Municipios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MunicipiosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Municipios
     * const municipios = await prisma.municipios.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MunicipiosUpdateManyArgs>(args: SelectSubset<T, MunicipiosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Municipios and returns the data updated in the database.
     * @param {MunicipiosUpdateManyAndReturnArgs} args - Arguments to update many Municipios.
     * @example
     * // Update many Municipios
     * const municipios = await prisma.municipios.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Municipios and only return the `id`
     * const municipiosWithIdOnly = await prisma.municipios.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MunicipiosUpdateManyAndReturnArgs>(args: SelectSubset<T, MunicipiosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MunicipiosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Municipios.
     * @param {MunicipiosUpsertArgs} args - Arguments to update or create a Municipios.
     * @example
     * // Update or create a Municipios
     * const municipios = await prisma.municipios.upsert({
     *   create: {
     *     // ... data to create a Municipios
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Municipios we want to update
     *   }
     * })
     */
    upsert<T extends MunicipiosUpsertArgs>(args: SelectSubset<T, MunicipiosUpsertArgs<ExtArgs>>): Prisma__MunicipiosClient<$Result.GetResult<Prisma.$MunicipiosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Municipios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MunicipiosCountArgs} args - Arguments to filter Municipios to count.
     * @example
     * // Count the number of Municipios
     * const count = await prisma.municipios.count({
     *   where: {
     *     // ... the filter for the Municipios we want to count
     *   }
     * })
    **/
    count<T extends MunicipiosCountArgs>(
      args?: Subset<T, MunicipiosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MunicipiosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Municipios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MunicipiosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MunicipiosAggregateArgs>(args: Subset<T, MunicipiosAggregateArgs>): Prisma.PrismaPromise<GetMunicipiosAggregateType<T>>

    /**
     * Group by Municipios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MunicipiosGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MunicipiosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MunicipiosGroupByArgs['orderBy'] }
        : { orderBy?: MunicipiosGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MunicipiosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMunicipiosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Municipios model
   */
  readonly fields: MunicipiosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Municipios.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MunicipiosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    estado<T extends Municipios$estadoArgs<ExtArgs> = {}>(args?: Subset<T, Municipios$estadoArgs<ExtArgs>>): Prisma__EstadosClient<$Result.GetResult<Prisma.$EstadosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    ciudades<T extends Municipios$ciudadesArgs<ExtArgs> = {}>(args?: Subset<T, Municipios$ciudadesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CiudadesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Municipios model
   */
  interface MunicipiosFieldRefs {
    readonly id: FieldRef<"Municipios", 'Int'>
    readonly idEstado: FieldRef<"Municipios", 'Int'>
    readonly nombre: FieldRef<"Municipios", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Municipios findUnique
   */
  export type MunicipiosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Municipios
     */
    select?: MunicipiosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Municipios
     */
    omit?: MunicipiosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MunicipiosInclude<ExtArgs> | null
    /**
     * Filter, which Municipios to fetch.
     */
    where: MunicipiosWhereUniqueInput
  }

  /**
   * Municipios findUniqueOrThrow
   */
  export type MunicipiosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Municipios
     */
    select?: MunicipiosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Municipios
     */
    omit?: MunicipiosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MunicipiosInclude<ExtArgs> | null
    /**
     * Filter, which Municipios to fetch.
     */
    where: MunicipiosWhereUniqueInput
  }

  /**
   * Municipios findFirst
   */
  export type MunicipiosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Municipios
     */
    select?: MunicipiosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Municipios
     */
    omit?: MunicipiosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MunicipiosInclude<ExtArgs> | null
    /**
     * Filter, which Municipios to fetch.
     */
    where?: MunicipiosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Municipios to fetch.
     */
    orderBy?: MunicipiosOrderByWithRelationInput | MunicipiosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Municipios.
     */
    cursor?: MunicipiosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Municipios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Municipios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Municipios.
     */
    distinct?: MunicipiosScalarFieldEnum | MunicipiosScalarFieldEnum[]
  }

  /**
   * Municipios findFirstOrThrow
   */
  export type MunicipiosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Municipios
     */
    select?: MunicipiosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Municipios
     */
    omit?: MunicipiosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MunicipiosInclude<ExtArgs> | null
    /**
     * Filter, which Municipios to fetch.
     */
    where?: MunicipiosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Municipios to fetch.
     */
    orderBy?: MunicipiosOrderByWithRelationInput | MunicipiosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Municipios.
     */
    cursor?: MunicipiosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Municipios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Municipios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Municipios.
     */
    distinct?: MunicipiosScalarFieldEnum | MunicipiosScalarFieldEnum[]
  }

  /**
   * Municipios findMany
   */
  export type MunicipiosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Municipios
     */
    select?: MunicipiosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Municipios
     */
    omit?: MunicipiosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MunicipiosInclude<ExtArgs> | null
    /**
     * Filter, which Municipios to fetch.
     */
    where?: MunicipiosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Municipios to fetch.
     */
    orderBy?: MunicipiosOrderByWithRelationInput | MunicipiosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Municipios.
     */
    cursor?: MunicipiosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Municipios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Municipios.
     */
    skip?: number
    distinct?: MunicipiosScalarFieldEnum | MunicipiosScalarFieldEnum[]
  }

  /**
   * Municipios create
   */
  export type MunicipiosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Municipios
     */
    select?: MunicipiosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Municipios
     */
    omit?: MunicipiosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MunicipiosInclude<ExtArgs> | null
    /**
     * The data needed to create a Municipios.
     */
    data: XOR<MunicipiosCreateInput, MunicipiosUncheckedCreateInput>
  }

  /**
   * Municipios createMany
   */
  export type MunicipiosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Municipios.
     */
    data: MunicipiosCreateManyInput | MunicipiosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Municipios createManyAndReturn
   */
  export type MunicipiosCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Municipios
     */
    select?: MunicipiosSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Municipios
     */
    omit?: MunicipiosOmit<ExtArgs> | null
    /**
     * The data used to create many Municipios.
     */
    data: MunicipiosCreateManyInput | MunicipiosCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MunicipiosIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Municipios update
   */
  export type MunicipiosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Municipios
     */
    select?: MunicipiosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Municipios
     */
    omit?: MunicipiosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MunicipiosInclude<ExtArgs> | null
    /**
     * The data needed to update a Municipios.
     */
    data: XOR<MunicipiosUpdateInput, MunicipiosUncheckedUpdateInput>
    /**
     * Choose, which Municipios to update.
     */
    where: MunicipiosWhereUniqueInput
  }

  /**
   * Municipios updateMany
   */
  export type MunicipiosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Municipios.
     */
    data: XOR<MunicipiosUpdateManyMutationInput, MunicipiosUncheckedUpdateManyInput>
    /**
     * Filter which Municipios to update
     */
    where?: MunicipiosWhereInput
    /**
     * Limit how many Municipios to update.
     */
    limit?: number
  }

  /**
   * Municipios updateManyAndReturn
   */
  export type MunicipiosUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Municipios
     */
    select?: MunicipiosSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Municipios
     */
    omit?: MunicipiosOmit<ExtArgs> | null
    /**
     * The data used to update Municipios.
     */
    data: XOR<MunicipiosUpdateManyMutationInput, MunicipiosUncheckedUpdateManyInput>
    /**
     * Filter which Municipios to update
     */
    where?: MunicipiosWhereInput
    /**
     * Limit how many Municipios to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MunicipiosIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Municipios upsert
   */
  export type MunicipiosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Municipios
     */
    select?: MunicipiosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Municipios
     */
    omit?: MunicipiosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MunicipiosInclude<ExtArgs> | null
    /**
     * The filter to search for the Municipios to update in case it exists.
     */
    where: MunicipiosWhereUniqueInput
    /**
     * In case the Municipios found by the `where` argument doesn't exist, create a new Municipios with this data.
     */
    create: XOR<MunicipiosCreateInput, MunicipiosUncheckedCreateInput>
    /**
     * In case the Municipios was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MunicipiosUpdateInput, MunicipiosUncheckedUpdateInput>
  }

  /**
   * Municipios delete
   */
  export type MunicipiosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Municipios
     */
    select?: MunicipiosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Municipios
     */
    omit?: MunicipiosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MunicipiosInclude<ExtArgs> | null
    /**
     * Filter which Municipios to delete.
     */
    where: MunicipiosWhereUniqueInput
  }

  /**
   * Municipios deleteMany
   */
  export type MunicipiosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Municipios to delete
     */
    where?: MunicipiosWhereInput
    /**
     * Limit how many Municipios to delete.
     */
    limit?: number
  }

  /**
   * Municipios.estado
   */
  export type Municipios$estadoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estados
     */
    select?: EstadosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estados
     */
    omit?: EstadosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstadosInclude<ExtArgs> | null
    where?: EstadosWhereInput
  }

  /**
   * Municipios.ciudades
   */
  export type Municipios$ciudadesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ciudades
     */
    select?: CiudadesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ciudades
     */
    omit?: CiudadesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CiudadesInclude<ExtArgs> | null
    where?: CiudadesWhereInput
    orderBy?: CiudadesOrderByWithRelationInput | CiudadesOrderByWithRelationInput[]
    cursor?: CiudadesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CiudadesScalarFieldEnum | CiudadesScalarFieldEnum[]
  }

  /**
   * Municipios without action
   */
  export type MunicipiosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Municipios
     */
    select?: MunicipiosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Municipios
     */
    omit?: MunicipiosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MunicipiosInclude<ExtArgs> | null
  }


  /**
   * Model Pagos
   */

  export type AggregatePagos = {
    _count: PagosCountAggregateOutputType | null
    _avg: PagosAvgAggregateOutputType | null
    _sum: PagosSumAggregateOutputType | null
    _min: PagosMinAggregateOutputType | null
    _max: PagosMaxAggregateOutputType | null
  }

  export type PagosAvgAggregateOutputType = {
    id: number | null
    idPrestamos: number | null
    idMetodoPago: number | null
    monto: number | null
  }

  export type PagosSumAggregateOutputType = {
    id: number | null
    idPrestamos: number | null
    idMetodoPago: number | null
    monto: number | null
  }

  export type PagosMinAggregateOutputType = {
    id: number | null
    idPrestamos: number | null
    idMetodoPago: number | null
    monto: number | null
    fechaPago: Date | null
    status: boolean | null
  }

  export type PagosMaxAggregateOutputType = {
    id: number | null
    idPrestamos: number | null
    idMetodoPago: number | null
    monto: number | null
    fechaPago: Date | null
    status: boolean | null
  }

  export type PagosCountAggregateOutputType = {
    id: number
    idPrestamos: number
    idMetodoPago: number
    monto: number
    fechaPago: number
    status: number
    _all: number
  }


  export type PagosAvgAggregateInputType = {
    id?: true
    idPrestamos?: true
    idMetodoPago?: true
    monto?: true
  }

  export type PagosSumAggregateInputType = {
    id?: true
    idPrestamos?: true
    idMetodoPago?: true
    monto?: true
  }

  export type PagosMinAggregateInputType = {
    id?: true
    idPrestamos?: true
    idMetodoPago?: true
    monto?: true
    fechaPago?: true
    status?: true
  }

  export type PagosMaxAggregateInputType = {
    id?: true
    idPrestamos?: true
    idMetodoPago?: true
    monto?: true
    fechaPago?: true
    status?: true
  }

  export type PagosCountAggregateInputType = {
    id?: true
    idPrestamos?: true
    idMetodoPago?: true
    monto?: true
    fechaPago?: true
    status?: true
    _all?: true
  }

  export type PagosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pagos to aggregate.
     */
    where?: PagosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pagos to fetch.
     */
    orderBy?: PagosOrderByWithRelationInput | PagosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PagosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pagos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pagos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pagos
    **/
    _count?: true | PagosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PagosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PagosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PagosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PagosMaxAggregateInputType
  }

  export type GetPagosAggregateType<T extends PagosAggregateArgs> = {
        [P in keyof T & keyof AggregatePagos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePagos[P]>
      : GetScalarType<T[P], AggregatePagos[P]>
  }




  export type PagosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PagosWhereInput
    orderBy?: PagosOrderByWithAggregationInput | PagosOrderByWithAggregationInput[]
    by: PagosScalarFieldEnum[] | PagosScalarFieldEnum
    having?: PagosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PagosCountAggregateInputType | true
    _avg?: PagosAvgAggregateInputType
    _sum?: PagosSumAggregateInputType
    _min?: PagosMinAggregateInputType
    _max?: PagosMaxAggregateInputType
  }

  export type PagosGroupByOutputType = {
    id: number
    idPrestamos: number | null
    idMetodoPago: number | null
    monto: number | null
    fechaPago: Date | null
    status: boolean | null
    _count: PagosCountAggregateOutputType | null
    _avg: PagosAvgAggregateOutputType | null
    _sum: PagosSumAggregateOutputType | null
    _min: PagosMinAggregateOutputType | null
    _max: PagosMaxAggregateOutputType | null
  }

  type GetPagosGroupByPayload<T extends PagosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PagosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PagosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PagosGroupByOutputType[P]>
            : GetScalarType<T[P], PagosGroupByOutputType[P]>
        }
      >
    >


  export type PagosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idPrestamos?: boolean
    idMetodoPago?: boolean
    monto?: boolean
    fechaPago?: boolean
    status?: boolean
    prestamo?: boolean | Pagos$prestamoArgs<ExtArgs>
    metodoPago?: boolean | Pagos$metodoPagoArgs<ExtArgs>
  }, ExtArgs["result"]["pagos"]>

  export type PagosSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idPrestamos?: boolean
    idMetodoPago?: boolean
    monto?: boolean
    fechaPago?: boolean
    status?: boolean
    prestamo?: boolean | Pagos$prestamoArgs<ExtArgs>
    metodoPago?: boolean | Pagos$metodoPagoArgs<ExtArgs>
  }, ExtArgs["result"]["pagos"]>

  export type PagosSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idPrestamos?: boolean
    idMetodoPago?: boolean
    monto?: boolean
    fechaPago?: boolean
    status?: boolean
    prestamo?: boolean | Pagos$prestamoArgs<ExtArgs>
    metodoPago?: boolean | Pagos$metodoPagoArgs<ExtArgs>
  }, ExtArgs["result"]["pagos"]>

  export type PagosSelectScalar = {
    id?: boolean
    idPrestamos?: boolean
    idMetodoPago?: boolean
    monto?: boolean
    fechaPago?: boolean
    status?: boolean
  }

  export type PagosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "idPrestamos" | "idMetodoPago" | "monto" | "fechaPago" | "status", ExtArgs["result"]["pagos"]>
  export type PagosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prestamo?: boolean | Pagos$prestamoArgs<ExtArgs>
    metodoPago?: boolean | Pagos$metodoPagoArgs<ExtArgs>
  }
  export type PagosIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prestamo?: boolean | Pagos$prestamoArgs<ExtArgs>
    metodoPago?: boolean | Pagos$metodoPagoArgs<ExtArgs>
  }
  export type PagosIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prestamo?: boolean | Pagos$prestamoArgs<ExtArgs>
    metodoPago?: boolean | Pagos$metodoPagoArgs<ExtArgs>
  }

  export type $PagosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pagos"
    objects: {
      prestamo: Prisma.$PrestamosPayload<ExtArgs> | null
      metodoPago: Prisma.$MetodoPagoPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      idPrestamos: number | null
      idMetodoPago: number | null
      monto: number | null
      fechaPago: Date | null
      status: boolean | null
    }, ExtArgs["result"]["pagos"]>
    composites: {}
  }

  type PagosGetPayload<S extends boolean | null | undefined | PagosDefaultArgs> = $Result.GetResult<Prisma.$PagosPayload, S>

  type PagosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PagosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PagosCountAggregateInputType | true
    }

  export interface PagosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pagos'], meta: { name: 'Pagos' } }
    /**
     * Find zero or one Pagos that matches the filter.
     * @param {PagosFindUniqueArgs} args - Arguments to find a Pagos
     * @example
     * // Get one Pagos
     * const pagos = await prisma.pagos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PagosFindUniqueArgs>(args: SelectSubset<T, PagosFindUniqueArgs<ExtArgs>>): Prisma__PagosClient<$Result.GetResult<Prisma.$PagosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pagos that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PagosFindUniqueOrThrowArgs} args - Arguments to find a Pagos
     * @example
     * // Get one Pagos
     * const pagos = await prisma.pagos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PagosFindUniqueOrThrowArgs>(args: SelectSubset<T, PagosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PagosClient<$Result.GetResult<Prisma.$PagosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pagos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagosFindFirstArgs} args - Arguments to find a Pagos
     * @example
     * // Get one Pagos
     * const pagos = await prisma.pagos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PagosFindFirstArgs>(args?: SelectSubset<T, PagosFindFirstArgs<ExtArgs>>): Prisma__PagosClient<$Result.GetResult<Prisma.$PagosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pagos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagosFindFirstOrThrowArgs} args - Arguments to find a Pagos
     * @example
     * // Get one Pagos
     * const pagos = await prisma.pagos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PagosFindFirstOrThrowArgs>(args?: SelectSubset<T, PagosFindFirstOrThrowArgs<ExtArgs>>): Prisma__PagosClient<$Result.GetResult<Prisma.$PagosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pagos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pagos
     * const pagos = await prisma.pagos.findMany()
     * 
     * // Get first 10 Pagos
     * const pagos = await prisma.pagos.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pagosWithIdOnly = await prisma.pagos.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PagosFindManyArgs>(args?: SelectSubset<T, PagosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PagosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pagos.
     * @param {PagosCreateArgs} args - Arguments to create a Pagos.
     * @example
     * // Create one Pagos
     * const Pagos = await prisma.pagos.create({
     *   data: {
     *     // ... data to create a Pagos
     *   }
     * })
     * 
     */
    create<T extends PagosCreateArgs>(args: SelectSubset<T, PagosCreateArgs<ExtArgs>>): Prisma__PagosClient<$Result.GetResult<Prisma.$PagosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pagos.
     * @param {PagosCreateManyArgs} args - Arguments to create many Pagos.
     * @example
     * // Create many Pagos
     * const pagos = await prisma.pagos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PagosCreateManyArgs>(args?: SelectSubset<T, PagosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pagos and returns the data saved in the database.
     * @param {PagosCreateManyAndReturnArgs} args - Arguments to create many Pagos.
     * @example
     * // Create many Pagos
     * const pagos = await prisma.pagos.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pagos and only return the `id`
     * const pagosWithIdOnly = await prisma.pagos.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PagosCreateManyAndReturnArgs>(args?: SelectSubset<T, PagosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PagosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Pagos.
     * @param {PagosDeleteArgs} args - Arguments to delete one Pagos.
     * @example
     * // Delete one Pagos
     * const Pagos = await prisma.pagos.delete({
     *   where: {
     *     // ... filter to delete one Pagos
     *   }
     * })
     * 
     */
    delete<T extends PagosDeleteArgs>(args: SelectSubset<T, PagosDeleteArgs<ExtArgs>>): Prisma__PagosClient<$Result.GetResult<Prisma.$PagosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pagos.
     * @param {PagosUpdateArgs} args - Arguments to update one Pagos.
     * @example
     * // Update one Pagos
     * const pagos = await prisma.pagos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PagosUpdateArgs>(args: SelectSubset<T, PagosUpdateArgs<ExtArgs>>): Prisma__PagosClient<$Result.GetResult<Prisma.$PagosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pagos.
     * @param {PagosDeleteManyArgs} args - Arguments to filter Pagos to delete.
     * @example
     * // Delete a few Pagos
     * const { count } = await prisma.pagos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PagosDeleteManyArgs>(args?: SelectSubset<T, PagosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pagos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pagos
     * const pagos = await prisma.pagos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PagosUpdateManyArgs>(args: SelectSubset<T, PagosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pagos and returns the data updated in the database.
     * @param {PagosUpdateManyAndReturnArgs} args - Arguments to update many Pagos.
     * @example
     * // Update many Pagos
     * const pagos = await prisma.pagos.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pagos and only return the `id`
     * const pagosWithIdOnly = await prisma.pagos.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PagosUpdateManyAndReturnArgs>(args: SelectSubset<T, PagosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PagosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Pagos.
     * @param {PagosUpsertArgs} args - Arguments to update or create a Pagos.
     * @example
     * // Update or create a Pagos
     * const pagos = await prisma.pagos.upsert({
     *   create: {
     *     // ... data to create a Pagos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pagos we want to update
     *   }
     * })
     */
    upsert<T extends PagosUpsertArgs>(args: SelectSubset<T, PagosUpsertArgs<ExtArgs>>): Prisma__PagosClient<$Result.GetResult<Prisma.$PagosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pagos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagosCountArgs} args - Arguments to filter Pagos to count.
     * @example
     * // Count the number of Pagos
     * const count = await prisma.pagos.count({
     *   where: {
     *     // ... the filter for the Pagos we want to count
     *   }
     * })
    **/
    count<T extends PagosCountArgs>(
      args?: Subset<T, PagosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PagosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pagos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PagosAggregateArgs>(args: Subset<T, PagosAggregateArgs>): Prisma.PrismaPromise<GetPagosAggregateType<T>>

    /**
     * Group by Pagos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagosGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PagosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PagosGroupByArgs['orderBy'] }
        : { orderBy?: PagosGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PagosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPagosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pagos model
   */
  readonly fields: PagosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pagos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PagosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    prestamo<T extends Pagos$prestamoArgs<ExtArgs> = {}>(args?: Subset<T, Pagos$prestamoArgs<ExtArgs>>): Prisma__PrestamosClient<$Result.GetResult<Prisma.$PrestamosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    metodoPago<T extends Pagos$metodoPagoArgs<ExtArgs> = {}>(args?: Subset<T, Pagos$metodoPagoArgs<ExtArgs>>): Prisma__MetodoPagoClient<$Result.GetResult<Prisma.$MetodoPagoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Pagos model
   */
  interface PagosFieldRefs {
    readonly id: FieldRef<"Pagos", 'Int'>
    readonly idPrestamos: FieldRef<"Pagos", 'Int'>
    readonly idMetodoPago: FieldRef<"Pagos", 'Int'>
    readonly monto: FieldRef<"Pagos", 'Float'>
    readonly fechaPago: FieldRef<"Pagos", 'DateTime'>
    readonly status: FieldRef<"Pagos", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Pagos findUnique
   */
  export type PagosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pagos
     */
    select?: PagosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pagos
     */
    omit?: PagosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagosInclude<ExtArgs> | null
    /**
     * Filter, which Pagos to fetch.
     */
    where: PagosWhereUniqueInput
  }

  /**
   * Pagos findUniqueOrThrow
   */
  export type PagosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pagos
     */
    select?: PagosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pagos
     */
    omit?: PagosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagosInclude<ExtArgs> | null
    /**
     * Filter, which Pagos to fetch.
     */
    where: PagosWhereUniqueInput
  }

  /**
   * Pagos findFirst
   */
  export type PagosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pagos
     */
    select?: PagosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pagos
     */
    omit?: PagosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagosInclude<ExtArgs> | null
    /**
     * Filter, which Pagos to fetch.
     */
    where?: PagosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pagos to fetch.
     */
    orderBy?: PagosOrderByWithRelationInput | PagosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pagos.
     */
    cursor?: PagosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pagos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pagos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pagos.
     */
    distinct?: PagosScalarFieldEnum | PagosScalarFieldEnum[]
  }

  /**
   * Pagos findFirstOrThrow
   */
  export type PagosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pagos
     */
    select?: PagosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pagos
     */
    omit?: PagosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagosInclude<ExtArgs> | null
    /**
     * Filter, which Pagos to fetch.
     */
    where?: PagosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pagos to fetch.
     */
    orderBy?: PagosOrderByWithRelationInput | PagosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pagos.
     */
    cursor?: PagosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pagos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pagos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pagos.
     */
    distinct?: PagosScalarFieldEnum | PagosScalarFieldEnum[]
  }

  /**
   * Pagos findMany
   */
  export type PagosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pagos
     */
    select?: PagosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pagos
     */
    omit?: PagosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagosInclude<ExtArgs> | null
    /**
     * Filter, which Pagos to fetch.
     */
    where?: PagosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pagos to fetch.
     */
    orderBy?: PagosOrderByWithRelationInput | PagosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pagos.
     */
    cursor?: PagosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pagos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pagos.
     */
    skip?: number
    distinct?: PagosScalarFieldEnum | PagosScalarFieldEnum[]
  }

  /**
   * Pagos create
   */
  export type PagosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pagos
     */
    select?: PagosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pagos
     */
    omit?: PagosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagosInclude<ExtArgs> | null
    /**
     * The data needed to create a Pagos.
     */
    data: XOR<PagosCreateInput, PagosUncheckedCreateInput>
  }

  /**
   * Pagos createMany
   */
  export type PagosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pagos.
     */
    data: PagosCreateManyInput | PagosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pagos createManyAndReturn
   */
  export type PagosCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pagos
     */
    select?: PagosSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pagos
     */
    omit?: PagosOmit<ExtArgs> | null
    /**
     * The data used to create many Pagos.
     */
    data: PagosCreateManyInput | PagosCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagosIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pagos update
   */
  export type PagosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pagos
     */
    select?: PagosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pagos
     */
    omit?: PagosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagosInclude<ExtArgs> | null
    /**
     * The data needed to update a Pagos.
     */
    data: XOR<PagosUpdateInput, PagosUncheckedUpdateInput>
    /**
     * Choose, which Pagos to update.
     */
    where: PagosWhereUniqueInput
  }

  /**
   * Pagos updateMany
   */
  export type PagosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pagos.
     */
    data: XOR<PagosUpdateManyMutationInput, PagosUncheckedUpdateManyInput>
    /**
     * Filter which Pagos to update
     */
    where?: PagosWhereInput
    /**
     * Limit how many Pagos to update.
     */
    limit?: number
  }

  /**
   * Pagos updateManyAndReturn
   */
  export type PagosUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pagos
     */
    select?: PagosSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pagos
     */
    omit?: PagosOmit<ExtArgs> | null
    /**
     * The data used to update Pagos.
     */
    data: XOR<PagosUpdateManyMutationInput, PagosUncheckedUpdateManyInput>
    /**
     * Filter which Pagos to update
     */
    where?: PagosWhereInput
    /**
     * Limit how many Pagos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagosIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pagos upsert
   */
  export type PagosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pagos
     */
    select?: PagosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pagos
     */
    omit?: PagosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagosInclude<ExtArgs> | null
    /**
     * The filter to search for the Pagos to update in case it exists.
     */
    where: PagosWhereUniqueInput
    /**
     * In case the Pagos found by the `where` argument doesn't exist, create a new Pagos with this data.
     */
    create: XOR<PagosCreateInput, PagosUncheckedCreateInput>
    /**
     * In case the Pagos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PagosUpdateInput, PagosUncheckedUpdateInput>
  }

  /**
   * Pagos delete
   */
  export type PagosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pagos
     */
    select?: PagosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pagos
     */
    omit?: PagosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagosInclude<ExtArgs> | null
    /**
     * Filter which Pagos to delete.
     */
    where: PagosWhereUniqueInput
  }

  /**
   * Pagos deleteMany
   */
  export type PagosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pagos to delete
     */
    where?: PagosWhereInput
    /**
     * Limit how many Pagos to delete.
     */
    limit?: number
  }

  /**
   * Pagos.prestamo
   */
  export type Pagos$prestamoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prestamos
     */
    select?: PrestamosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prestamos
     */
    omit?: PrestamosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrestamosInclude<ExtArgs> | null
    where?: PrestamosWhereInput
  }

  /**
   * Pagos.metodoPago
   */
  export type Pagos$metodoPagoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetodoPago
     */
    select?: MetodoPagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetodoPago
     */
    omit?: MetodoPagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetodoPagoInclude<ExtArgs> | null
    where?: MetodoPagoWhereInput
  }

  /**
   * Pagos without action
   */
  export type PagosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pagos
     */
    select?: PagosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pagos
     */
    omit?: PagosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagosInclude<ExtArgs> | null
  }


  /**
   * Model Permisos
   */

  export type AggregatePermisos = {
    _count: PermisosCountAggregateOutputType | null
    _avg: PermisosAvgAggregateOutputType | null
    _sum: PermisosSumAggregateOutputType | null
    _min: PermisosMinAggregateOutputType | null
    _max: PermisosMaxAggregateOutputType | null
  }

  export type PermisosAvgAggregateOutputType = {
    id: number | null
    idRolPermiso: number | null
  }

  export type PermisosSumAggregateOutputType = {
    id: number | null
    idRolPermiso: number | null
  }

  export type PermisosMinAggregateOutputType = {
    id: number | null
    idRolPermiso: number | null
    nombre: string | null
    status: boolean | null
  }

  export type PermisosMaxAggregateOutputType = {
    id: number | null
    idRolPermiso: number | null
    nombre: string | null
    status: boolean | null
  }

  export type PermisosCountAggregateOutputType = {
    id: number
    idRolPermiso: number
    nombre: number
    status: number
    _all: number
  }


  export type PermisosAvgAggregateInputType = {
    id?: true
    idRolPermiso?: true
  }

  export type PermisosSumAggregateInputType = {
    id?: true
    idRolPermiso?: true
  }

  export type PermisosMinAggregateInputType = {
    id?: true
    idRolPermiso?: true
    nombre?: true
    status?: true
  }

  export type PermisosMaxAggregateInputType = {
    id?: true
    idRolPermiso?: true
    nombre?: true
    status?: true
  }

  export type PermisosCountAggregateInputType = {
    id?: true
    idRolPermiso?: true
    nombre?: true
    status?: true
    _all?: true
  }

  export type PermisosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Permisos to aggregate.
     */
    where?: PermisosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Permisos to fetch.
     */
    orderBy?: PermisosOrderByWithRelationInput | PermisosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PermisosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Permisos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Permisos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Permisos
    **/
    _count?: true | PermisosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PermisosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PermisosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PermisosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PermisosMaxAggregateInputType
  }

  export type GetPermisosAggregateType<T extends PermisosAggregateArgs> = {
        [P in keyof T & keyof AggregatePermisos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePermisos[P]>
      : GetScalarType<T[P], AggregatePermisos[P]>
  }




  export type PermisosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PermisosWhereInput
    orderBy?: PermisosOrderByWithAggregationInput | PermisosOrderByWithAggregationInput[]
    by: PermisosScalarFieldEnum[] | PermisosScalarFieldEnum
    having?: PermisosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PermisosCountAggregateInputType | true
    _avg?: PermisosAvgAggregateInputType
    _sum?: PermisosSumAggregateInputType
    _min?: PermisosMinAggregateInputType
    _max?: PermisosMaxAggregateInputType
  }

  export type PermisosGroupByOutputType = {
    id: number
    idRolPermiso: number | null
    nombre: string | null
    status: boolean | null
    _count: PermisosCountAggregateOutputType | null
    _avg: PermisosAvgAggregateOutputType | null
    _sum: PermisosSumAggregateOutputType | null
    _min: PermisosMinAggregateOutputType | null
    _max: PermisosMaxAggregateOutputType | null
  }

  type GetPermisosGroupByPayload<T extends PermisosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PermisosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PermisosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PermisosGroupByOutputType[P]>
            : GetScalarType<T[P], PermisosGroupByOutputType[P]>
        }
      >
    >


  export type PermisosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idRolPermiso?: boolean
    nombre?: boolean
    status?: boolean
    rolPermiso?: boolean | Permisos$rolPermisoArgs<ExtArgs>
  }, ExtArgs["result"]["permisos"]>

  export type PermisosSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idRolPermiso?: boolean
    nombre?: boolean
    status?: boolean
    rolPermiso?: boolean | Permisos$rolPermisoArgs<ExtArgs>
  }, ExtArgs["result"]["permisos"]>

  export type PermisosSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idRolPermiso?: boolean
    nombre?: boolean
    status?: boolean
    rolPermiso?: boolean | Permisos$rolPermisoArgs<ExtArgs>
  }, ExtArgs["result"]["permisos"]>

  export type PermisosSelectScalar = {
    id?: boolean
    idRolPermiso?: boolean
    nombre?: boolean
    status?: boolean
  }

  export type PermisosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "idRolPermiso" | "nombre" | "status", ExtArgs["result"]["permisos"]>
  export type PermisosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rolPermiso?: boolean | Permisos$rolPermisoArgs<ExtArgs>
  }
  export type PermisosIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rolPermiso?: boolean | Permisos$rolPermisoArgs<ExtArgs>
  }
  export type PermisosIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rolPermiso?: boolean | Permisos$rolPermisoArgs<ExtArgs>
  }

  export type $PermisosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Permisos"
    objects: {
      rolPermiso: Prisma.$RolPermisosPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      idRolPermiso: number | null
      nombre: string | null
      status: boolean | null
    }, ExtArgs["result"]["permisos"]>
    composites: {}
  }

  type PermisosGetPayload<S extends boolean | null | undefined | PermisosDefaultArgs> = $Result.GetResult<Prisma.$PermisosPayload, S>

  type PermisosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PermisosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PermisosCountAggregateInputType | true
    }

  export interface PermisosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Permisos'], meta: { name: 'Permisos' } }
    /**
     * Find zero or one Permisos that matches the filter.
     * @param {PermisosFindUniqueArgs} args - Arguments to find a Permisos
     * @example
     * // Get one Permisos
     * const permisos = await prisma.permisos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PermisosFindUniqueArgs>(args: SelectSubset<T, PermisosFindUniqueArgs<ExtArgs>>): Prisma__PermisosClient<$Result.GetResult<Prisma.$PermisosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Permisos that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PermisosFindUniqueOrThrowArgs} args - Arguments to find a Permisos
     * @example
     * // Get one Permisos
     * const permisos = await prisma.permisos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PermisosFindUniqueOrThrowArgs>(args: SelectSubset<T, PermisosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PermisosClient<$Result.GetResult<Prisma.$PermisosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Permisos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermisosFindFirstArgs} args - Arguments to find a Permisos
     * @example
     * // Get one Permisos
     * const permisos = await prisma.permisos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PermisosFindFirstArgs>(args?: SelectSubset<T, PermisosFindFirstArgs<ExtArgs>>): Prisma__PermisosClient<$Result.GetResult<Prisma.$PermisosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Permisos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermisosFindFirstOrThrowArgs} args - Arguments to find a Permisos
     * @example
     * // Get one Permisos
     * const permisos = await prisma.permisos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PermisosFindFirstOrThrowArgs>(args?: SelectSubset<T, PermisosFindFirstOrThrowArgs<ExtArgs>>): Prisma__PermisosClient<$Result.GetResult<Prisma.$PermisosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Permisos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermisosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Permisos
     * const permisos = await prisma.permisos.findMany()
     * 
     * // Get first 10 Permisos
     * const permisos = await prisma.permisos.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const permisosWithIdOnly = await prisma.permisos.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PermisosFindManyArgs>(args?: SelectSubset<T, PermisosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PermisosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Permisos.
     * @param {PermisosCreateArgs} args - Arguments to create a Permisos.
     * @example
     * // Create one Permisos
     * const Permisos = await prisma.permisos.create({
     *   data: {
     *     // ... data to create a Permisos
     *   }
     * })
     * 
     */
    create<T extends PermisosCreateArgs>(args: SelectSubset<T, PermisosCreateArgs<ExtArgs>>): Prisma__PermisosClient<$Result.GetResult<Prisma.$PermisosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Permisos.
     * @param {PermisosCreateManyArgs} args - Arguments to create many Permisos.
     * @example
     * // Create many Permisos
     * const permisos = await prisma.permisos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PermisosCreateManyArgs>(args?: SelectSubset<T, PermisosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Permisos and returns the data saved in the database.
     * @param {PermisosCreateManyAndReturnArgs} args - Arguments to create many Permisos.
     * @example
     * // Create many Permisos
     * const permisos = await prisma.permisos.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Permisos and only return the `id`
     * const permisosWithIdOnly = await prisma.permisos.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PermisosCreateManyAndReturnArgs>(args?: SelectSubset<T, PermisosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PermisosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Permisos.
     * @param {PermisosDeleteArgs} args - Arguments to delete one Permisos.
     * @example
     * // Delete one Permisos
     * const Permisos = await prisma.permisos.delete({
     *   where: {
     *     // ... filter to delete one Permisos
     *   }
     * })
     * 
     */
    delete<T extends PermisosDeleteArgs>(args: SelectSubset<T, PermisosDeleteArgs<ExtArgs>>): Prisma__PermisosClient<$Result.GetResult<Prisma.$PermisosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Permisos.
     * @param {PermisosUpdateArgs} args - Arguments to update one Permisos.
     * @example
     * // Update one Permisos
     * const permisos = await prisma.permisos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PermisosUpdateArgs>(args: SelectSubset<T, PermisosUpdateArgs<ExtArgs>>): Prisma__PermisosClient<$Result.GetResult<Prisma.$PermisosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Permisos.
     * @param {PermisosDeleteManyArgs} args - Arguments to filter Permisos to delete.
     * @example
     * // Delete a few Permisos
     * const { count } = await prisma.permisos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PermisosDeleteManyArgs>(args?: SelectSubset<T, PermisosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Permisos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermisosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Permisos
     * const permisos = await prisma.permisos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PermisosUpdateManyArgs>(args: SelectSubset<T, PermisosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Permisos and returns the data updated in the database.
     * @param {PermisosUpdateManyAndReturnArgs} args - Arguments to update many Permisos.
     * @example
     * // Update many Permisos
     * const permisos = await prisma.permisos.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Permisos and only return the `id`
     * const permisosWithIdOnly = await prisma.permisos.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PermisosUpdateManyAndReturnArgs>(args: SelectSubset<T, PermisosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PermisosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Permisos.
     * @param {PermisosUpsertArgs} args - Arguments to update or create a Permisos.
     * @example
     * // Update or create a Permisos
     * const permisos = await prisma.permisos.upsert({
     *   create: {
     *     // ... data to create a Permisos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Permisos we want to update
     *   }
     * })
     */
    upsert<T extends PermisosUpsertArgs>(args: SelectSubset<T, PermisosUpsertArgs<ExtArgs>>): Prisma__PermisosClient<$Result.GetResult<Prisma.$PermisosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Permisos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermisosCountArgs} args - Arguments to filter Permisos to count.
     * @example
     * // Count the number of Permisos
     * const count = await prisma.permisos.count({
     *   where: {
     *     // ... the filter for the Permisos we want to count
     *   }
     * })
    **/
    count<T extends PermisosCountArgs>(
      args?: Subset<T, PermisosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PermisosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Permisos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermisosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PermisosAggregateArgs>(args: Subset<T, PermisosAggregateArgs>): Prisma.PrismaPromise<GetPermisosAggregateType<T>>

    /**
     * Group by Permisos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermisosGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PermisosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PermisosGroupByArgs['orderBy'] }
        : { orderBy?: PermisosGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PermisosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPermisosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Permisos model
   */
  readonly fields: PermisosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Permisos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PermisosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    rolPermiso<T extends Permisos$rolPermisoArgs<ExtArgs> = {}>(args?: Subset<T, Permisos$rolPermisoArgs<ExtArgs>>): Prisma__RolPermisosClient<$Result.GetResult<Prisma.$RolPermisosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Permisos model
   */
  interface PermisosFieldRefs {
    readonly id: FieldRef<"Permisos", 'Int'>
    readonly idRolPermiso: FieldRef<"Permisos", 'Int'>
    readonly nombre: FieldRef<"Permisos", 'String'>
    readonly status: FieldRef<"Permisos", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Permisos findUnique
   */
  export type PermisosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permisos
     */
    select?: PermisosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permisos
     */
    omit?: PermisosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermisosInclude<ExtArgs> | null
    /**
     * Filter, which Permisos to fetch.
     */
    where: PermisosWhereUniqueInput
  }

  /**
   * Permisos findUniqueOrThrow
   */
  export type PermisosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permisos
     */
    select?: PermisosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permisos
     */
    omit?: PermisosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermisosInclude<ExtArgs> | null
    /**
     * Filter, which Permisos to fetch.
     */
    where: PermisosWhereUniqueInput
  }

  /**
   * Permisos findFirst
   */
  export type PermisosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permisos
     */
    select?: PermisosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permisos
     */
    omit?: PermisosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermisosInclude<ExtArgs> | null
    /**
     * Filter, which Permisos to fetch.
     */
    where?: PermisosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Permisos to fetch.
     */
    orderBy?: PermisosOrderByWithRelationInput | PermisosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Permisos.
     */
    cursor?: PermisosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Permisos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Permisos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Permisos.
     */
    distinct?: PermisosScalarFieldEnum | PermisosScalarFieldEnum[]
  }

  /**
   * Permisos findFirstOrThrow
   */
  export type PermisosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permisos
     */
    select?: PermisosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permisos
     */
    omit?: PermisosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermisosInclude<ExtArgs> | null
    /**
     * Filter, which Permisos to fetch.
     */
    where?: PermisosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Permisos to fetch.
     */
    orderBy?: PermisosOrderByWithRelationInput | PermisosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Permisos.
     */
    cursor?: PermisosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Permisos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Permisos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Permisos.
     */
    distinct?: PermisosScalarFieldEnum | PermisosScalarFieldEnum[]
  }

  /**
   * Permisos findMany
   */
  export type PermisosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permisos
     */
    select?: PermisosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permisos
     */
    omit?: PermisosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermisosInclude<ExtArgs> | null
    /**
     * Filter, which Permisos to fetch.
     */
    where?: PermisosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Permisos to fetch.
     */
    orderBy?: PermisosOrderByWithRelationInput | PermisosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Permisos.
     */
    cursor?: PermisosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Permisos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Permisos.
     */
    skip?: number
    distinct?: PermisosScalarFieldEnum | PermisosScalarFieldEnum[]
  }

  /**
   * Permisos create
   */
  export type PermisosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permisos
     */
    select?: PermisosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permisos
     */
    omit?: PermisosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermisosInclude<ExtArgs> | null
    /**
     * The data needed to create a Permisos.
     */
    data: XOR<PermisosCreateInput, PermisosUncheckedCreateInput>
  }

  /**
   * Permisos createMany
   */
  export type PermisosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Permisos.
     */
    data: PermisosCreateManyInput | PermisosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Permisos createManyAndReturn
   */
  export type PermisosCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permisos
     */
    select?: PermisosSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Permisos
     */
    omit?: PermisosOmit<ExtArgs> | null
    /**
     * The data used to create many Permisos.
     */
    data: PermisosCreateManyInput | PermisosCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermisosIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Permisos update
   */
  export type PermisosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permisos
     */
    select?: PermisosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permisos
     */
    omit?: PermisosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermisosInclude<ExtArgs> | null
    /**
     * The data needed to update a Permisos.
     */
    data: XOR<PermisosUpdateInput, PermisosUncheckedUpdateInput>
    /**
     * Choose, which Permisos to update.
     */
    where: PermisosWhereUniqueInput
  }

  /**
   * Permisos updateMany
   */
  export type PermisosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Permisos.
     */
    data: XOR<PermisosUpdateManyMutationInput, PermisosUncheckedUpdateManyInput>
    /**
     * Filter which Permisos to update
     */
    where?: PermisosWhereInput
    /**
     * Limit how many Permisos to update.
     */
    limit?: number
  }

  /**
   * Permisos updateManyAndReturn
   */
  export type PermisosUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permisos
     */
    select?: PermisosSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Permisos
     */
    omit?: PermisosOmit<ExtArgs> | null
    /**
     * The data used to update Permisos.
     */
    data: XOR<PermisosUpdateManyMutationInput, PermisosUncheckedUpdateManyInput>
    /**
     * Filter which Permisos to update
     */
    where?: PermisosWhereInput
    /**
     * Limit how many Permisos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermisosIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Permisos upsert
   */
  export type PermisosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permisos
     */
    select?: PermisosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permisos
     */
    omit?: PermisosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermisosInclude<ExtArgs> | null
    /**
     * The filter to search for the Permisos to update in case it exists.
     */
    where: PermisosWhereUniqueInput
    /**
     * In case the Permisos found by the `where` argument doesn't exist, create a new Permisos with this data.
     */
    create: XOR<PermisosCreateInput, PermisosUncheckedCreateInput>
    /**
     * In case the Permisos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PermisosUpdateInput, PermisosUncheckedUpdateInput>
  }

  /**
   * Permisos delete
   */
  export type PermisosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permisos
     */
    select?: PermisosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permisos
     */
    omit?: PermisosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermisosInclude<ExtArgs> | null
    /**
     * Filter which Permisos to delete.
     */
    where: PermisosWhereUniqueInput
  }

  /**
   * Permisos deleteMany
   */
  export type PermisosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Permisos to delete
     */
    where?: PermisosWhereInput
    /**
     * Limit how many Permisos to delete.
     */
    limit?: number
  }

  /**
   * Permisos.rolPermiso
   */
  export type Permisos$rolPermisoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolPermisos
     */
    select?: RolPermisosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolPermisos
     */
    omit?: RolPermisosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolPermisosInclude<ExtArgs> | null
    where?: RolPermisosWhereInput
  }

  /**
   * Permisos without action
   */
  export type PermisosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permisos
     */
    select?: PermisosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permisos
     */
    omit?: PermisosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermisosInclude<ExtArgs> | null
  }


  /**
   * Model Prestamos
   */

  export type AggregatePrestamos = {
    _count: PrestamosCountAggregateOutputType | null
    _avg: PrestamosAvgAggregateOutputType | null
    _sum: PrestamosSumAggregateOutputType | null
    _min: PrestamosMinAggregateOutputType | null
    _max: PrestamosMaxAggregateOutputType | null
  }

  export type PrestamosAvgAggregateOutputType = {
    id: number | null
    idCliente: number | null
    idUsuario: number | null
    monto: number | null
    pagoMinimo: number | null
    tasa: number | null
  }

  export type PrestamosSumAggregateOutputType = {
    id: number | null
    idCliente: number | null
    idUsuario: number | null
    monto: number | null
    pagoMinimo: number | null
    tasa: number | null
  }

  export type PrestamosMinAggregateOutputType = {
    id: number | null
    idCliente: number | null
    idUsuario: number | null
    monto: number | null
    fechaInicio: Date | null
    intervaloPago: Date | null
    pagoMinimo: number | null
    fechaFin: Date | null
    tasa: number | null
    status: boolean | null
  }

  export type PrestamosMaxAggregateOutputType = {
    id: number | null
    idCliente: number | null
    idUsuario: number | null
    monto: number | null
    fechaInicio: Date | null
    intervaloPago: Date | null
    pagoMinimo: number | null
    fechaFin: Date | null
    tasa: number | null
    status: boolean | null
  }

  export type PrestamosCountAggregateOutputType = {
    id: number
    idCliente: number
    idUsuario: number
    monto: number
    fechaInicio: number
    intervaloPago: number
    pagoMinimo: number
    fechaFin: number
    tasa: number
    status: number
    _all: number
  }


  export type PrestamosAvgAggregateInputType = {
    id?: true
    idCliente?: true
    idUsuario?: true
    monto?: true
    pagoMinimo?: true
    tasa?: true
  }

  export type PrestamosSumAggregateInputType = {
    id?: true
    idCliente?: true
    idUsuario?: true
    monto?: true
    pagoMinimo?: true
    tasa?: true
  }

  export type PrestamosMinAggregateInputType = {
    id?: true
    idCliente?: true
    idUsuario?: true
    monto?: true
    fechaInicio?: true
    intervaloPago?: true
    pagoMinimo?: true
    fechaFin?: true
    tasa?: true
    status?: true
  }

  export type PrestamosMaxAggregateInputType = {
    id?: true
    idCliente?: true
    idUsuario?: true
    monto?: true
    fechaInicio?: true
    intervaloPago?: true
    pagoMinimo?: true
    fechaFin?: true
    tasa?: true
    status?: true
  }

  export type PrestamosCountAggregateInputType = {
    id?: true
    idCliente?: true
    idUsuario?: true
    monto?: true
    fechaInicio?: true
    intervaloPago?: true
    pagoMinimo?: true
    fechaFin?: true
    tasa?: true
    status?: true
    _all?: true
  }

  export type PrestamosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Prestamos to aggregate.
     */
    where?: PrestamosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prestamos to fetch.
     */
    orderBy?: PrestamosOrderByWithRelationInput | PrestamosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PrestamosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prestamos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prestamos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Prestamos
    **/
    _count?: true | PrestamosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PrestamosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PrestamosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PrestamosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PrestamosMaxAggregateInputType
  }

  export type GetPrestamosAggregateType<T extends PrestamosAggregateArgs> = {
        [P in keyof T & keyof AggregatePrestamos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePrestamos[P]>
      : GetScalarType<T[P], AggregatePrestamos[P]>
  }




  export type PrestamosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PrestamosWhereInput
    orderBy?: PrestamosOrderByWithAggregationInput | PrestamosOrderByWithAggregationInput[]
    by: PrestamosScalarFieldEnum[] | PrestamosScalarFieldEnum
    having?: PrestamosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PrestamosCountAggregateInputType | true
    _avg?: PrestamosAvgAggregateInputType
    _sum?: PrestamosSumAggregateInputType
    _min?: PrestamosMinAggregateInputType
    _max?: PrestamosMaxAggregateInputType
  }

  export type PrestamosGroupByOutputType = {
    id: number
    idCliente: number | null
    idUsuario: number | null
    monto: number | null
    fechaInicio: Date | null
    intervaloPago: Date | null
    pagoMinimo: number | null
    fechaFin: Date | null
    tasa: number | null
    status: boolean | null
    _count: PrestamosCountAggregateOutputType | null
    _avg: PrestamosAvgAggregateOutputType | null
    _sum: PrestamosSumAggregateOutputType | null
    _min: PrestamosMinAggregateOutputType | null
    _max: PrestamosMaxAggregateOutputType | null
  }

  type GetPrestamosGroupByPayload<T extends PrestamosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PrestamosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PrestamosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PrestamosGroupByOutputType[P]>
            : GetScalarType<T[P], PrestamosGroupByOutputType[P]>
        }
      >
    >


  export type PrestamosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idCliente?: boolean
    idUsuario?: boolean
    monto?: boolean
    fechaInicio?: boolean
    intervaloPago?: boolean
    pagoMinimo?: boolean
    fechaFin?: boolean
    tasa?: boolean
    status?: boolean
    cliente?: boolean | Prestamos$clienteArgs<ExtArgs>
    usuario?: boolean | Prestamos$usuarioArgs<ExtArgs>
    contratos?: boolean | Prestamos$contratosArgs<ExtArgs>
    pagos?: boolean | Prestamos$pagosArgs<ExtArgs>
    _count?: boolean | PrestamosCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["prestamos"]>

  export type PrestamosSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idCliente?: boolean
    idUsuario?: boolean
    monto?: boolean
    fechaInicio?: boolean
    intervaloPago?: boolean
    pagoMinimo?: boolean
    fechaFin?: boolean
    tasa?: boolean
    status?: boolean
    cliente?: boolean | Prestamos$clienteArgs<ExtArgs>
    usuario?: boolean | Prestamos$usuarioArgs<ExtArgs>
  }, ExtArgs["result"]["prestamos"]>

  export type PrestamosSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idCliente?: boolean
    idUsuario?: boolean
    monto?: boolean
    fechaInicio?: boolean
    intervaloPago?: boolean
    pagoMinimo?: boolean
    fechaFin?: boolean
    tasa?: boolean
    status?: boolean
    cliente?: boolean | Prestamos$clienteArgs<ExtArgs>
    usuario?: boolean | Prestamos$usuarioArgs<ExtArgs>
  }, ExtArgs["result"]["prestamos"]>

  export type PrestamosSelectScalar = {
    id?: boolean
    idCliente?: boolean
    idUsuario?: boolean
    monto?: boolean
    fechaInicio?: boolean
    intervaloPago?: boolean
    pagoMinimo?: boolean
    fechaFin?: boolean
    tasa?: boolean
    status?: boolean
  }

  export type PrestamosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "idCliente" | "idUsuario" | "monto" | "fechaInicio" | "intervaloPago" | "pagoMinimo" | "fechaFin" | "tasa" | "status", ExtArgs["result"]["prestamos"]>
  export type PrestamosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | Prestamos$clienteArgs<ExtArgs>
    usuario?: boolean | Prestamos$usuarioArgs<ExtArgs>
    contratos?: boolean | Prestamos$contratosArgs<ExtArgs>
    pagos?: boolean | Prestamos$pagosArgs<ExtArgs>
    _count?: boolean | PrestamosCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PrestamosIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | Prestamos$clienteArgs<ExtArgs>
    usuario?: boolean | Prestamos$usuarioArgs<ExtArgs>
  }
  export type PrestamosIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | Prestamos$clienteArgs<ExtArgs>
    usuario?: boolean | Prestamos$usuarioArgs<ExtArgs>
  }

  export type $PrestamosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Prestamos"
    objects: {
      cliente: Prisma.$ClientesPayload<ExtArgs> | null
      usuario: Prisma.$UsuariosPayload<ExtArgs> | null
      contratos: Prisma.$ContratosPayload<ExtArgs>[]
      pagos: Prisma.$PagosPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      idCliente: number | null
      idUsuario: number | null
      monto: number | null
      fechaInicio: Date | null
      intervaloPago: Date | null
      pagoMinimo: number | null
      fechaFin: Date | null
      tasa: number | null
      status: boolean | null
    }, ExtArgs["result"]["prestamos"]>
    composites: {}
  }

  type PrestamosGetPayload<S extends boolean | null | undefined | PrestamosDefaultArgs> = $Result.GetResult<Prisma.$PrestamosPayload, S>

  type PrestamosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PrestamosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PrestamosCountAggregateInputType | true
    }

  export interface PrestamosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Prestamos'], meta: { name: 'Prestamos' } }
    /**
     * Find zero or one Prestamos that matches the filter.
     * @param {PrestamosFindUniqueArgs} args - Arguments to find a Prestamos
     * @example
     * // Get one Prestamos
     * const prestamos = await prisma.prestamos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PrestamosFindUniqueArgs>(args: SelectSubset<T, PrestamosFindUniqueArgs<ExtArgs>>): Prisma__PrestamosClient<$Result.GetResult<Prisma.$PrestamosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Prestamos that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PrestamosFindUniqueOrThrowArgs} args - Arguments to find a Prestamos
     * @example
     * // Get one Prestamos
     * const prestamos = await prisma.prestamos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PrestamosFindUniqueOrThrowArgs>(args: SelectSubset<T, PrestamosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PrestamosClient<$Result.GetResult<Prisma.$PrestamosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Prestamos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrestamosFindFirstArgs} args - Arguments to find a Prestamos
     * @example
     * // Get one Prestamos
     * const prestamos = await prisma.prestamos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PrestamosFindFirstArgs>(args?: SelectSubset<T, PrestamosFindFirstArgs<ExtArgs>>): Prisma__PrestamosClient<$Result.GetResult<Prisma.$PrestamosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Prestamos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrestamosFindFirstOrThrowArgs} args - Arguments to find a Prestamos
     * @example
     * // Get one Prestamos
     * const prestamos = await prisma.prestamos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PrestamosFindFirstOrThrowArgs>(args?: SelectSubset<T, PrestamosFindFirstOrThrowArgs<ExtArgs>>): Prisma__PrestamosClient<$Result.GetResult<Prisma.$PrestamosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Prestamos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrestamosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Prestamos
     * const prestamos = await prisma.prestamos.findMany()
     * 
     * // Get first 10 Prestamos
     * const prestamos = await prisma.prestamos.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const prestamosWithIdOnly = await prisma.prestamos.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PrestamosFindManyArgs>(args?: SelectSubset<T, PrestamosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrestamosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Prestamos.
     * @param {PrestamosCreateArgs} args - Arguments to create a Prestamos.
     * @example
     * // Create one Prestamos
     * const Prestamos = await prisma.prestamos.create({
     *   data: {
     *     // ... data to create a Prestamos
     *   }
     * })
     * 
     */
    create<T extends PrestamosCreateArgs>(args: SelectSubset<T, PrestamosCreateArgs<ExtArgs>>): Prisma__PrestamosClient<$Result.GetResult<Prisma.$PrestamosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Prestamos.
     * @param {PrestamosCreateManyArgs} args - Arguments to create many Prestamos.
     * @example
     * // Create many Prestamos
     * const prestamos = await prisma.prestamos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PrestamosCreateManyArgs>(args?: SelectSubset<T, PrestamosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Prestamos and returns the data saved in the database.
     * @param {PrestamosCreateManyAndReturnArgs} args - Arguments to create many Prestamos.
     * @example
     * // Create many Prestamos
     * const prestamos = await prisma.prestamos.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Prestamos and only return the `id`
     * const prestamosWithIdOnly = await prisma.prestamos.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PrestamosCreateManyAndReturnArgs>(args?: SelectSubset<T, PrestamosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrestamosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Prestamos.
     * @param {PrestamosDeleteArgs} args - Arguments to delete one Prestamos.
     * @example
     * // Delete one Prestamos
     * const Prestamos = await prisma.prestamos.delete({
     *   where: {
     *     // ... filter to delete one Prestamos
     *   }
     * })
     * 
     */
    delete<T extends PrestamosDeleteArgs>(args: SelectSubset<T, PrestamosDeleteArgs<ExtArgs>>): Prisma__PrestamosClient<$Result.GetResult<Prisma.$PrestamosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Prestamos.
     * @param {PrestamosUpdateArgs} args - Arguments to update one Prestamos.
     * @example
     * // Update one Prestamos
     * const prestamos = await prisma.prestamos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PrestamosUpdateArgs>(args: SelectSubset<T, PrestamosUpdateArgs<ExtArgs>>): Prisma__PrestamosClient<$Result.GetResult<Prisma.$PrestamosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Prestamos.
     * @param {PrestamosDeleteManyArgs} args - Arguments to filter Prestamos to delete.
     * @example
     * // Delete a few Prestamos
     * const { count } = await prisma.prestamos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PrestamosDeleteManyArgs>(args?: SelectSubset<T, PrestamosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Prestamos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrestamosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Prestamos
     * const prestamos = await prisma.prestamos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PrestamosUpdateManyArgs>(args: SelectSubset<T, PrestamosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Prestamos and returns the data updated in the database.
     * @param {PrestamosUpdateManyAndReturnArgs} args - Arguments to update many Prestamos.
     * @example
     * // Update many Prestamos
     * const prestamos = await prisma.prestamos.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Prestamos and only return the `id`
     * const prestamosWithIdOnly = await prisma.prestamos.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PrestamosUpdateManyAndReturnArgs>(args: SelectSubset<T, PrestamosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrestamosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Prestamos.
     * @param {PrestamosUpsertArgs} args - Arguments to update or create a Prestamos.
     * @example
     * // Update or create a Prestamos
     * const prestamos = await prisma.prestamos.upsert({
     *   create: {
     *     // ... data to create a Prestamos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Prestamos we want to update
     *   }
     * })
     */
    upsert<T extends PrestamosUpsertArgs>(args: SelectSubset<T, PrestamosUpsertArgs<ExtArgs>>): Prisma__PrestamosClient<$Result.GetResult<Prisma.$PrestamosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Prestamos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrestamosCountArgs} args - Arguments to filter Prestamos to count.
     * @example
     * // Count the number of Prestamos
     * const count = await prisma.prestamos.count({
     *   where: {
     *     // ... the filter for the Prestamos we want to count
     *   }
     * })
    **/
    count<T extends PrestamosCountArgs>(
      args?: Subset<T, PrestamosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PrestamosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Prestamos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrestamosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PrestamosAggregateArgs>(args: Subset<T, PrestamosAggregateArgs>): Prisma.PrismaPromise<GetPrestamosAggregateType<T>>

    /**
     * Group by Prestamos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrestamosGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PrestamosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PrestamosGroupByArgs['orderBy'] }
        : { orderBy?: PrestamosGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PrestamosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPrestamosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Prestamos model
   */
  readonly fields: PrestamosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Prestamos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PrestamosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cliente<T extends Prestamos$clienteArgs<ExtArgs> = {}>(args?: Subset<T, Prestamos$clienteArgs<ExtArgs>>): Prisma__ClientesClient<$Result.GetResult<Prisma.$ClientesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    usuario<T extends Prestamos$usuarioArgs<ExtArgs> = {}>(args?: Subset<T, Prestamos$usuarioArgs<ExtArgs>>): Prisma__UsuariosClient<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    contratos<T extends Prestamos$contratosArgs<ExtArgs> = {}>(args?: Subset<T, Prestamos$contratosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContratosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    pagos<T extends Prestamos$pagosArgs<ExtArgs> = {}>(args?: Subset<T, Prestamos$pagosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PagosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Prestamos model
   */
  interface PrestamosFieldRefs {
    readonly id: FieldRef<"Prestamos", 'Int'>
    readonly idCliente: FieldRef<"Prestamos", 'Int'>
    readonly idUsuario: FieldRef<"Prestamos", 'Int'>
    readonly monto: FieldRef<"Prestamos", 'Float'>
    readonly fechaInicio: FieldRef<"Prestamos", 'DateTime'>
    readonly intervaloPago: FieldRef<"Prestamos", 'DateTime'>
    readonly pagoMinimo: FieldRef<"Prestamos", 'Float'>
    readonly fechaFin: FieldRef<"Prestamos", 'DateTime'>
    readonly tasa: FieldRef<"Prestamos", 'Float'>
    readonly status: FieldRef<"Prestamos", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Prestamos findUnique
   */
  export type PrestamosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prestamos
     */
    select?: PrestamosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prestamos
     */
    omit?: PrestamosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrestamosInclude<ExtArgs> | null
    /**
     * Filter, which Prestamos to fetch.
     */
    where: PrestamosWhereUniqueInput
  }

  /**
   * Prestamos findUniqueOrThrow
   */
  export type PrestamosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prestamos
     */
    select?: PrestamosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prestamos
     */
    omit?: PrestamosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrestamosInclude<ExtArgs> | null
    /**
     * Filter, which Prestamos to fetch.
     */
    where: PrestamosWhereUniqueInput
  }

  /**
   * Prestamos findFirst
   */
  export type PrestamosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prestamos
     */
    select?: PrestamosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prestamos
     */
    omit?: PrestamosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrestamosInclude<ExtArgs> | null
    /**
     * Filter, which Prestamos to fetch.
     */
    where?: PrestamosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prestamos to fetch.
     */
    orderBy?: PrestamosOrderByWithRelationInput | PrestamosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Prestamos.
     */
    cursor?: PrestamosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prestamos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prestamos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Prestamos.
     */
    distinct?: PrestamosScalarFieldEnum | PrestamosScalarFieldEnum[]
  }

  /**
   * Prestamos findFirstOrThrow
   */
  export type PrestamosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prestamos
     */
    select?: PrestamosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prestamos
     */
    omit?: PrestamosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrestamosInclude<ExtArgs> | null
    /**
     * Filter, which Prestamos to fetch.
     */
    where?: PrestamosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prestamos to fetch.
     */
    orderBy?: PrestamosOrderByWithRelationInput | PrestamosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Prestamos.
     */
    cursor?: PrestamosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prestamos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prestamos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Prestamos.
     */
    distinct?: PrestamosScalarFieldEnum | PrestamosScalarFieldEnum[]
  }

  /**
   * Prestamos findMany
   */
  export type PrestamosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prestamos
     */
    select?: PrestamosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prestamos
     */
    omit?: PrestamosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrestamosInclude<ExtArgs> | null
    /**
     * Filter, which Prestamos to fetch.
     */
    where?: PrestamosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prestamos to fetch.
     */
    orderBy?: PrestamosOrderByWithRelationInput | PrestamosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Prestamos.
     */
    cursor?: PrestamosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prestamos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prestamos.
     */
    skip?: number
    distinct?: PrestamosScalarFieldEnum | PrestamosScalarFieldEnum[]
  }

  /**
   * Prestamos create
   */
  export type PrestamosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prestamos
     */
    select?: PrestamosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prestamos
     */
    omit?: PrestamosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrestamosInclude<ExtArgs> | null
    /**
     * The data needed to create a Prestamos.
     */
    data: XOR<PrestamosCreateInput, PrestamosUncheckedCreateInput>
  }

  /**
   * Prestamos createMany
   */
  export type PrestamosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Prestamos.
     */
    data: PrestamosCreateManyInput | PrestamosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Prestamos createManyAndReturn
   */
  export type PrestamosCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prestamos
     */
    select?: PrestamosSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Prestamos
     */
    omit?: PrestamosOmit<ExtArgs> | null
    /**
     * The data used to create many Prestamos.
     */
    data: PrestamosCreateManyInput | PrestamosCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrestamosIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Prestamos update
   */
  export type PrestamosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prestamos
     */
    select?: PrestamosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prestamos
     */
    omit?: PrestamosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrestamosInclude<ExtArgs> | null
    /**
     * The data needed to update a Prestamos.
     */
    data: XOR<PrestamosUpdateInput, PrestamosUncheckedUpdateInput>
    /**
     * Choose, which Prestamos to update.
     */
    where: PrestamosWhereUniqueInput
  }

  /**
   * Prestamos updateMany
   */
  export type PrestamosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Prestamos.
     */
    data: XOR<PrestamosUpdateManyMutationInput, PrestamosUncheckedUpdateManyInput>
    /**
     * Filter which Prestamos to update
     */
    where?: PrestamosWhereInput
    /**
     * Limit how many Prestamos to update.
     */
    limit?: number
  }

  /**
   * Prestamos updateManyAndReturn
   */
  export type PrestamosUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prestamos
     */
    select?: PrestamosSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Prestamos
     */
    omit?: PrestamosOmit<ExtArgs> | null
    /**
     * The data used to update Prestamos.
     */
    data: XOR<PrestamosUpdateManyMutationInput, PrestamosUncheckedUpdateManyInput>
    /**
     * Filter which Prestamos to update
     */
    where?: PrestamosWhereInput
    /**
     * Limit how many Prestamos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrestamosIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Prestamos upsert
   */
  export type PrestamosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prestamos
     */
    select?: PrestamosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prestamos
     */
    omit?: PrestamosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrestamosInclude<ExtArgs> | null
    /**
     * The filter to search for the Prestamos to update in case it exists.
     */
    where: PrestamosWhereUniqueInput
    /**
     * In case the Prestamos found by the `where` argument doesn't exist, create a new Prestamos with this data.
     */
    create: XOR<PrestamosCreateInput, PrestamosUncheckedCreateInput>
    /**
     * In case the Prestamos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PrestamosUpdateInput, PrestamosUncheckedUpdateInput>
  }

  /**
   * Prestamos delete
   */
  export type PrestamosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prestamos
     */
    select?: PrestamosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prestamos
     */
    omit?: PrestamosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrestamosInclude<ExtArgs> | null
    /**
     * Filter which Prestamos to delete.
     */
    where: PrestamosWhereUniqueInput
  }

  /**
   * Prestamos deleteMany
   */
  export type PrestamosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Prestamos to delete
     */
    where?: PrestamosWhereInput
    /**
     * Limit how many Prestamos to delete.
     */
    limit?: number
  }

  /**
   * Prestamos.cliente
   */
  export type Prestamos$clienteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clientes
     */
    select?: ClientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clientes
     */
    omit?: ClientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientesInclude<ExtArgs> | null
    where?: ClientesWhereInput
  }

  /**
   * Prestamos.usuario
   */
  export type Prestamos$usuarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuarios
     */
    omit?: UsuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuariosInclude<ExtArgs> | null
    where?: UsuariosWhereInput
  }

  /**
   * Prestamos.contratos
   */
  export type Prestamos$contratosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contratos
     */
    select?: ContratosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contratos
     */
    omit?: ContratosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContratosInclude<ExtArgs> | null
    where?: ContratosWhereInput
    orderBy?: ContratosOrderByWithRelationInput | ContratosOrderByWithRelationInput[]
    cursor?: ContratosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContratosScalarFieldEnum | ContratosScalarFieldEnum[]
  }

  /**
   * Prestamos.pagos
   */
  export type Prestamos$pagosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pagos
     */
    select?: PagosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pagos
     */
    omit?: PagosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagosInclude<ExtArgs> | null
    where?: PagosWhereInput
    orderBy?: PagosOrderByWithRelationInput | PagosOrderByWithRelationInput[]
    cursor?: PagosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PagosScalarFieldEnum | PagosScalarFieldEnum[]
  }

  /**
   * Prestamos without action
   */
  export type PrestamosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prestamos
     */
    select?: PrestamosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prestamos
     */
    omit?: PrestamosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrestamosInclude<ExtArgs> | null
  }


  /**
   * Model Roles
   */

  export type AggregateRoles = {
    _count: RolesCountAggregateOutputType | null
    _avg: RolesAvgAggregateOutputType | null
    _sum: RolesSumAggregateOutputType | null
    _min: RolesMinAggregateOutputType | null
    _max: RolesMaxAggregateOutputType | null
  }

  export type RolesAvgAggregateOutputType = {
    id: number | null
    idRolUsuario: number | null
  }

  export type RolesSumAggregateOutputType = {
    id: number | null
    idRolUsuario: number | null
  }

  export type RolesMinAggregateOutputType = {
    id: number | null
    idRolUsuario: number | null
    nombre: string | null
    status: string | null
  }

  export type RolesMaxAggregateOutputType = {
    id: number | null
    idRolUsuario: number | null
    nombre: string | null
    status: string | null
  }

  export type RolesCountAggregateOutputType = {
    id: number
    idRolUsuario: number
    nombre: number
    status: number
    _all: number
  }


  export type RolesAvgAggregateInputType = {
    id?: true
    idRolUsuario?: true
  }

  export type RolesSumAggregateInputType = {
    id?: true
    idRolUsuario?: true
  }

  export type RolesMinAggregateInputType = {
    id?: true
    idRolUsuario?: true
    nombre?: true
    status?: true
  }

  export type RolesMaxAggregateInputType = {
    id?: true
    idRolUsuario?: true
    nombre?: true
    status?: true
  }

  export type RolesCountAggregateInputType = {
    id?: true
    idRolUsuario?: true
    nombre?: true
    status?: true
    _all?: true
  }

  export type RolesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Roles to aggregate.
     */
    where?: RolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RolesOrderByWithRelationInput | RolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Roles
    **/
    _count?: true | RolesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RolesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RolesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RolesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RolesMaxAggregateInputType
  }

  export type GetRolesAggregateType<T extends RolesAggregateArgs> = {
        [P in keyof T & keyof AggregateRoles]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoles[P]>
      : GetScalarType<T[P], AggregateRoles[P]>
  }




  export type RolesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RolesWhereInput
    orderBy?: RolesOrderByWithAggregationInput | RolesOrderByWithAggregationInput[]
    by: RolesScalarFieldEnum[] | RolesScalarFieldEnum
    having?: RolesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RolesCountAggregateInputType | true
    _avg?: RolesAvgAggregateInputType
    _sum?: RolesSumAggregateInputType
    _min?: RolesMinAggregateInputType
    _max?: RolesMaxAggregateInputType
  }

  export type RolesGroupByOutputType = {
    id: number
    idRolUsuario: number | null
    nombre: string | null
    status: string | null
    _count: RolesCountAggregateOutputType | null
    _avg: RolesAvgAggregateOutputType | null
    _sum: RolesSumAggregateOutputType | null
    _min: RolesMinAggregateOutputType | null
    _max: RolesMaxAggregateOutputType | null
  }

  type GetRolesGroupByPayload<T extends RolesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RolesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RolesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RolesGroupByOutputType[P]>
            : GetScalarType<T[P], RolesGroupByOutputType[P]>
        }
      >
    >


  export type RolesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idRolUsuario?: boolean
    nombre?: boolean
    status?: boolean
    rolUsuario?: boolean | Roles$rolUsuarioArgs<ExtArgs>
    rolPermisos?: boolean | Roles$rolPermisosArgs<ExtArgs>
    _count?: boolean | RolesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roles"]>

  export type RolesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idRolUsuario?: boolean
    nombre?: boolean
    status?: boolean
    rolUsuario?: boolean | Roles$rolUsuarioArgs<ExtArgs>
  }, ExtArgs["result"]["roles"]>

  export type RolesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idRolUsuario?: boolean
    nombre?: boolean
    status?: boolean
    rolUsuario?: boolean | Roles$rolUsuarioArgs<ExtArgs>
  }, ExtArgs["result"]["roles"]>

  export type RolesSelectScalar = {
    id?: boolean
    idRolUsuario?: boolean
    nombre?: boolean
    status?: boolean
  }

  export type RolesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "idRolUsuario" | "nombre" | "status", ExtArgs["result"]["roles"]>
  export type RolesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rolUsuario?: boolean | Roles$rolUsuarioArgs<ExtArgs>
    rolPermisos?: boolean | Roles$rolPermisosArgs<ExtArgs>
    _count?: boolean | RolesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RolesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rolUsuario?: boolean | Roles$rolUsuarioArgs<ExtArgs>
  }
  export type RolesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rolUsuario?: boolean | Roles$rolUsuarioArgs<ExtArgs>
  }

  export type $RolesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Roles"
    objects: {
      rolUsuario: Prisma.$RolUsuarioPayload<ExtArgs> | null
      rolPermisos: Prisma.$RolPermisosPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      idRolUsuario: number | null
      nombre: string | null
      status: string | null
    }, ExtArgs["result"]["roles"]>
    composites: {}
  }

  type RolesGetPayload<S extends boolean | null | undefined | RolesDefaultArgs> = $Result.GetResult<Prisma.$RolesPayload, S>

  type RolesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RolesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RolesCountAggregateInputType | true
    }

  export interface RolesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Roles'], meta: { name: 'Roles' } }
    /**
     * Find zero or one Roles that matches the filter.
     * @param {RolesFindUniqueArgs} args - Arguments to find a Roles
     * @example
     * // Get one Roles
     * const roles = await prisma.roles.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RolesFindUniqueArgs>(args: SelectSubset<T, RolesFindUniqueArgs<ExtArgs>>): Prisma__RolesClient<$Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Roles that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RolesFindUniqueOrThrowArgs} args - Arguments to find a Roles
     * @example
     * // Get one Roles
     * const roles = await prisma.roles.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RolesFindUniqueOrThrowArgs>(args: SelectSubset<T, RolesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RolesClient<$Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolesFindFirstArgs} args - Arguments to find a Roles
     * @example
     * // Get one Roles
     * const roles = await prisma.roles.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RolesFindFirstArgs>(args?: SelectSubset<T, RolesFindFirstArgs<ExtArgs>>): Prisma__RolesClient<$Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Roles that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolesFindFirstOrThrowArgs} args - Arguments to find a Roles
     * @example
     * // Get one Roles
     * const roles = await prisma.roles.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RolesFindFirstOrThrowArgs>(args?: SelectSubset<T, RolesFindFirstOrThrowArgs<ExtArgs>>): Prisma__RolesClient<$Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roles
     * const roles = await prisma.roles.findMany()
     * 
     * // Get first 10 Roles
     * const roles = await prisma.roles.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rolesWithIdOnly = await prisma.roles.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RolesFindManyArgs>(args?: SelectSubset<T, RolesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Roles.
     * @param {RolesCreateArgs} args - Arguments to create a Roles.
     * @example
     * // Create one Roles
     * const Roles = await prisma.roles.create({
     *   data: {
     *     // ... data to create a Roles
     *   }
     * })
     * 
     */
    create<T extends RolesCreateArgs>(args: SelectSubset<T, RolesCreateArgs<ExtArgs>>): Prisma__RolesClient<$Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Roles.
     * @param {RolesCreateManyArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const roles = await prisma.roles.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RolesCreateManyArgs>(args?: SelectSubset<T, RolesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Roles and returns the data saved in the database.
     * @param {RolesCreateManyAndReturnArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const roles = await prisma.roles.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Roles and only return the `id`
     * const rolesWithIdOnly = await prisma.roles.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RolesCreateManyAndReturnArgs>(args?: SelectSubset<T, RolesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Roles.
     * @param {RolesDeleteArgs} args - Arguments to delete one Roles.
     * @example
     * // Delete one Roles
     * const Roles = await prisma.roles.delete({
     *   where: {
     *     // ... filter to delete one Roles
     *   }
     * })
     * 
     */
    delete<T extends RolesDeleteArgs>(args: SelectSubset<T, RolesDeleteArgs<ExtArgs>>): Prisma__RolesClient<$Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Roles.
     * @param {RolesUpdateArgs} args - Arguments to update one Roles.
     * @example
     * // Update one Roles
     * const roles = await prisma.roles.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RolesUpdateArgs>(args: SelectSubset<T, RolesUpdateArgs<ExtArgs>>): Prisma__RolesClient<$Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Roles.
     * @param {RolesDeleteManyArgs} args - Arguments to filter Roles to delete.
     * @example
     * // Delete a few Roles
     * const { count } = await prisma.roles.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RolesDeleteManyArgs>(args?: SelectSubset<T, RolesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roles
     * const roles = await prisma.roles.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RolesUpdateManyArgs>(args: SelectSubset<T, RolesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles and returns the data updated in the database.
     * @param {RolesUpdateManyAndReturnArgs} args - Arguments to update many Roles.
     * @example
     * // Update many Roles
     * const roles = await prisma.roles.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Roles and only return the `id`
     * const rolesWithIdOnly = await prisma.roles.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RolesUpdateManyAndReturnArgs>(args: SelectSubset<T, RolesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Roles.
     * @param {RolesUpsertArgs} args - Arguments to update or create a Roles.
     * @example
     * // Update or create a Roles
     * const roles = await prisma.roles.upsert({
     *   create: {
     *     // ... data to create a Roles
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Roles we want to update
     *   }
     * })
     */
    upsert<T extends RolesUpsertArgs>(args: SelectSubset<T, RolesUpsertArgs<ExtArgs>>): Prisma__RolesClient<$Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolesCountArgs} args - Arguments to filter Roles to count.
     * @example
     * // Count the number of Roles
     * const count = await prisma.roles.count({
     *   where: {
     *     // ... the filter for the Roles we want to count
     *   }
     * })
    **/
    count<T extends RolesCountArgs>(
      args?: Subset<T, RolesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RolesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RolesAggregateArgs>(args: Subset<T, RolesAggregateArgs>): Prisma.PrismaPromise<GetRolesAggregateType<T>>

    /**
     * Group by Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RolesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RolesGroupByArgs['orderBy'] }
        : { orderBy?: RolesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RolesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRolesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Roles model
   */
  readonly fields: RolesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Roles.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RolesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    rolUsuario<T extends Roles$rolUsuarioArgs<ExtArgs> = {}>(args?: Subset<T, Roles$rolUsuarioArgs<ExtArgs>>): Prisma__RolUsuarioClient<$Result.GetResult<Prisma.$RolUsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    rolPermisos<T extends Roles$rolPermisosArgs<ExtArgs> = {}>(args?: Subset<T, Roles$rolPermisosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolPermisosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Roles model
   */
  interface RolesFieldRefs {
    readonly id: FieldRef<"Roles", 'Int'>
    readonly idRolUsuario: FieldRef<"Roles", 'Int'>
    readonly nombre: FieldRef<"Roles", 'String'>
    readonly status: FieldRef<"Roles", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Roles findUnique
   */
  export type RolesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roles
     */
    omit?: RolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolesInclude<ExtArgs> | null
    /**
     * Filter, which Roles to fetch.
     */
    where: RolesWhereUniqueInput
  }

  /**
   * Roles findUniqueOrThrow
   */
  export type RolesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roles
     */
    omit?: RolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolesInclude<ExtArgs> | null
    /**
     * Filter, which Roles to fetch.
     */
    where: RolesWhereUniqueInput
  }

  /**
   * Roles findFirst
   */
  export type RolesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roles
     */
    omit?: RolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolesInclude<ExtArgs> | null
    /**
     * Filter, which Roles to fetch.
     */
    where?: RolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RolesOrderByWithRelationInput | RolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RolesScalarFieldEnum | RolesScalarFieldEnum[]
  }

  /**
   * Roles findFirstOrThrow
   */
  export type RolesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roles
     */
    omit?: RolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolesInclude<ExtArgs> | null
    /**
     * Filter, which Roles to fetch.
     */
    where?: RolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RolesOrderByWithRelationInput | RolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RolesScalarFieldEnum | RolesScalarFieldEnum[]
  }

  /**
   * Roles findMany
   */
  export type RolesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roles
     */
    omit?: RolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolesInclude<ExtArgs> | null
    /**
     * Filter, which Roles to fetch.
     */
    where?: RolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RolesOrderByWithRelationInput | RolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Roles.
     */
    cursor?: RolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    distinct?: RolesScalarFieldEnum | RolesScalarFieldEnum[]
  }

  /**
   * Roles create
   */
  export type RolesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roles
     */
    omit?: RolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolesInclude<ExtArgs> | null
    /**
     * The data needed to create a Roles.
     */
    data: XOR<RolesCreateInput, RolesUncheckedCreateInput>
  }

  /**
   * Roles createMany
   */
  export type RolesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Roles.
     */
    data: RolesCreateManyInput | RolesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Roles createManyAndReturn
   */
  export type RolesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Roles
     */
    omit?: RolesOmit<ExtArgs> | null
    /**
     * The data used to create many Roles.
     */
    data: RolesCreateManyInput | RolesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Roles update
   */
  export type RolesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roles
     */
    omit?: RolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolesInclude<ExtArgs> | null
    /**
     * The data needed to update a Roles.
     */
    data: XOR<RolesUpdateInput, RolesUncheckedUpdateInput>
    /**
     * Choose, which Roles to update.
     */
    where: RolesWhereUniqueInput
  }

  /**
   * Roles updateMany
   */
  export type RolesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Roles.
     */
    data: XOR<RolesUpdateManyMutationInput, RolesUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RolesWhereInput
    /**
     * Limit how many Roles to update.
     */
    limit?: number
  }

  /**
   * Roles updateManyAndReturn
   */
  export type RolesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Roles
     */
    omit?: RolesOmit<ExtArgs> | null
    /**
     * The data used to update Roles.
     */
    data: XOR<RolesUpdateManyMutationInput, RolesUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RolesWhereInput
    /**
     * Limit how many Roles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Roles upsert
   */
  export type RolesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roles
     */
    omit?: RolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolesInclude<ExtArgs> | null
    /**
     * The filter to search for the Roles to update in case it exists.
     */
    where: RolesWhereUniqueInput
    /**
     * In case the Roles found by the `where` argument doesn't exist, create a new Roles with this data.
     */
    create: XOR<RolesCreateInput, RolesUncheckedCreateInput>
    /**
     * In case the Roles was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RolesUpdateInput, RolesUncheckedUpdateInput>
  }

  /**
   * Roles delete
   */
  export type RolesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roles
     */
    omit?: RolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolesInclude<ExtArgs> | null
    /**
     * Filter which Roles to delete.
     */
    where: RolesWhereUniqueInput
  }

  /**
   * Roles deleteMany
   */
  export type RolesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Roles to delete
     */
    where?: RolesWhereInput
    /**
     * Limit how many Roles to delete.
     */
    limit?: number
  }

  /**
   * Roles.rolUsuario
   */
  export type Roles$rolUsuarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolUsuario
     */
    select?: RolUsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolUsuario
     */
    omit?: RolUsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolUsuarioInclude<ExtArgs> | null
    where?: RolUsuarioWhereInput
  }

  /**
   * Roles.rolPermisos
   */
  export type Roles$rolPermisosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolPermisos
     */
    select?: RolPermisosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolPermisos
     */
    omit?: RolPermisosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolPermisosInclude<ExtArgs> | null
    where?: RolPermisosWhereInput
    orderBy?: RolPermisosOrderByWithRelationInput | RolPermisosOrderByWithRelationInput[]
    cursor?: RolPermisosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RolPermisosScalarFieldEnum | RolPermisosScalarFieldEnum[]
  }

  /**
   * Roles without action
   */
  export type RolesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roles
     */
    omit?: RolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolesInclude<ExtArgs> | null
  }


  /**
   * Model RolPermisos
   */

  export type AggregateRolPermisos = {
    _count: RolPermisosCountAggregateOutputType | null
    _avg: RolPermisosAvgAggregateOutputType | null
    _sum: RolPermisosSumAggregateOutputType | null
    _min: RolPermisosMinAggregateOutputType | null
    _max: RolPermisosMaxAggregateOutputType | null
  }

  export type RolPermisosAvgAggregateOutputType = {
    id: number | null
    idRol: number | null
  }

  export type RolPermisosSumAggregateOutputType = {
    id: number | null
    idRol: number | null
  }

  export type RolPermisosMinAggregateOutputType = {
    id: number | null
    idRol: number | null
    status: string | null
  }

  export type RolPermisosMaxAggregateOutputType = {
    id: number | null
    idRol: number | null
    status: string | null
  }

  export type RolPermisosCountAggregateOutputType = {
    id: number
    idRol: number
    status: number
    _all: number
  }


  export type RolPermisosAvgAggregateInputType = {
    id?: true
    idRol?: true
  }

  export type RolPermisosSumAggregateInputType = {
    id?: true
    idRol?: true
  }

  export type RolPermisosMinAggregateInputType = {
    id?: true
    idRol?: true
    status?: true
  }

  export type RolPermisosMaxAggregateInputType = {
    id?: true
    idRol?: true
    status?: true
  }

  export type RolPermisosCountAggregateInputType = {
    id?: true
    idRol?: true
    status?: true
    _all?: true
  }

  export type RolPermisosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RolPermisos to aggregate.
     */
    where?: RolPermisosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RolPermisos to fetch.
     */
    orderBy?: RolPermisosOrderByWithRelationInput | RolPermisosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RolPermisosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RolPermisos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RolPermisos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RolPermisos
    **/
    _count?: true | RolPermisosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RolPermisosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RolPermisosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RolPermisosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RolPermisosMaxAggregateInputType
  }

  export type GetRolPermisosAggregateType<T extends RolPermisosAggregateArgs> = {
        [P in keyof T & keyof AggregateRolPermisos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRolPermisos[P]>
      : GetScalarType<T[P], AggregateRolPermisos[P]>
  }




  export type RolPermisosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RolPermisosWhereInput
    orderBy?: RolPermisosOrderByWithAggregationInput | RolPermisosOrderByWithAggregationInput[]
    by: RolPermisosScalarFieldEnum[] | RolPermisosScalarFieldEnum
    having?: RolPermisosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RolPermisosCountAggregateInputType | true
    _avg?: RolPermisosAvgAggregateInputType
    _sum?: RolPermisosSumAggregateInputType
    _min?: RolPermisosMinAggregateInputType
    _max?: RolPermisosMaxAggregateInputType
  }

  export type RolPermisosGroupByOutputType = {
    id: number
    idRol: number | null
    status: string | null
    _count: RolPermisosCountAggregateOutputType | null
    _avg: RolPermisosAvgAggregateOutputType | null
    _sum: RolPermisosSumAggregateOutputType | null
    _min: RolPermisosMinAggregateOutputType | null
    _max: RolPermisosMaxAggregateOutputType | null
  }

  type GetRolPermisosGroupByPayload<T extends RolPermisosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RolPermisosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RolPermisosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RolPermisosGroupByOutputType[P]>
            : GetScalarType<T[P], RolPermisosGroupByOutputType[P]>
        }
      >
    >


  export type RolPermisosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idRol?: boolean
    status?: boolean
    rol?: boolean | RolPermisos$rolArgs<ExtArgs>
    permisos?: boolean | RolPermisos$permisosArgs<ExtArgs>
    _count?: boolean | RolPermisosCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rolPermisos"]>

  export type RolPermisosSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idRol?: boolean
    status?: boolean
    rol?: boolean | RolPermisos$rolArgs<ExtArgs>
  }, ExtArgs["result"]["rolPermisos"]>

  export type RolPermisosSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idRol?: boolean
    status?: boolean
    rol?: boolean | RolPermisos$rolArgs<ExtArgs>
  }, ExtArgs["result"]["rolPermisos"]>

  export type RolPermisosSelectScalar = {
    id?: boolean
    idRol?: boolean
    status?: boolean
  }

  export type RolPermisosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "idRol" | "status", ExtArgs["result"]["rolPermisos"]>
  export type RolPermisosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rol?: boolean | RolPermisos$rolArgs<ExtArgs>
    permisos?: boolean | RolPermisos$permisosArgs<ExtArgs>
    _count?: boolean | RolPermisosCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RolPermisosIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rol?: boolean | RolPermisos$rolArgs<ExtArgs>
  }
  export type RolPermisosIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rol?: boolean | RolPermisos$rolArgs<ExtArgs>
  }

  export type $RolPermisosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RolPermisos"
    objects: {
      rol: Prisma.$RolesPayload<ExtArgs> | null
      permisos: Prisma.$PermisosPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      idRol: number | null
      status: string | null
    }, ExtArgs["result"]["rolPermisos"]>
    composites: {}
  }

  type RolPermisosGetPayload<S extends boolean | null | undefined | RolPermisosDefaultArgs> = $Result.GetResult<Prisma.$RolPermisosPayload, S>

  type RolPermisosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RolPermisosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RolPermisosCountAggregateInputType | true
    }

  export interface RolPermisosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RolPermisos'], meta: { name: 'RolPermisos' } }
    /**
     * Find zero or one RolPermisos that matches the filter.
     * @param {RolPermisosFindUniqueArgs} args - Arguments to find a RolPermisos
     * @example
     * // Get one RolPermisos
     * const rolPermisos = await prisma.rolPermisos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RolPermisosFindUniqueArgs>(args: SelectSubset<T, RolPermisosFindUniqueArgs<ExtArgs>>): Prisma__RolPermisosClient<$Result.GetResult<Prisma.$RolPermisosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RolPermisos that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RolPermisosFindUniqueOrThrowArgs} args - Arguments to find a RolPermisos
     * @example
     * // Get one RolPermisos
     * const rolPermisos = await prisma.rolPermisos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RolPermisosFindUniqueOrThrowArgs>(args: SelectSubset<T, RolPermisosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RolPermisosClient<$Result.GetResult<Prisma.$RolPermisosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RolPermisos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolPermisosFindFirstArgs} args - Arguments to find a RolPermisos
     * @example
     * // Get one RolPermisos
     * const rolPermisos = await prisma.rolPermisos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RolPermisosFindFirstArgs>(args?: SelectSubset<T, RolPermisosFindFirstArgs<ExtArgs>>): Prisma__RolPermisosClient<$Result.GetResult<Prisma.$RolPermisosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RolPermisos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolPermisosFindFirstOrThrowArgs} args - Arguments to find a RolPermisos
     * @example
     * // Get one RolPermisos
     * const rolPermisos = await prisma.rolPermisos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RolPermisosFindFirstOrThrowArgs>(args?: SelectSubset<T, RolPermisosFindFirstOrThrowArgs<ExtArgs>>): Prisma__RolPermisosClient<$Result.GetResult<Prisma.$RolPermisosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RolPermisos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolPermisosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RolPermisos
     * const rolPermisos = await prisma.rolPermisos.findMany()
     * 
     * // Get first 10 RolPermisos
     * const rolPermisos = await prisma.rolPermisos.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rolPermisosWithIdOnly = await prisma.rolPermisos.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RolPermisosFindManyArgs>(args?: SelectSubset<T, RolPermisosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolPermisosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RolPermisos.
     * @param {RolPermisosCreateArgs} args - Arguments to create a RolPermisos.
     * @example
     * // Create one RolPermisos
     * const RolPermisos = await prisma.rolPermisos.create({
     *   data: {
     *     // ... data to create a RolPermisos
     *   }
     * })
     * 
     */
    create<T extends RolPermisosCreateArgs>(args: SelectSubset<T, RolPermisosCreateArgs<ExtArgs>>): Prisma__RolPermisosClient<$Result.GetResult<Prisma.$RolPermisosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RolPermisos.
     * @param {RolPermisosCreateManyArgs} args - Arguments to create many RolPermisos.
     * @example
     * // Create many RolPermisos
     * const rolPermisos = await prisma.rolPermisos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RolPermisosCreateManyArgs>(args?: SelectSubset<T, RolPermisosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RolPermisos and returns the data saved in the database.
     * @param {RolPermisosCreateManyAndReturnArgs} args - Arguments to create many RolPermisos.
     * @example
     * // Create many RolPermisos
     * const rolPermisos = await prisma.rolPermisos.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RolPermisos and only return the `id`
     * const rolPermisosWithIdOnly = await prisma.rolPermisos.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RolPermisosCreateManyAndReturnArgs>(args?: SelectSubset<T, RolPermisosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolPermisosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RolPermisos.
     * @param {RolPermisosDeleteArgs} args - Arguments to delete one RolPermisos.
     * @example
     * // Delete one RolPermisos
     * const RolPermisos = await prisma.rolPermisos.delete({
     *   where: {
     *     // ... filter to delete one RolPermisos
     *   }
     * })
     * 
     */
    delete<T extends RolPermisosDeleteArgs>(args: SelectSubset<T, RolPermisosDeleteArgs<ExtArgs>>): Prisma__RolPermisosClient<$Result.GetResult<Prisma.$RolPermisosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RolPermisos.
     * @param {RolPermisosUpdateArgs} args - Arguments to update one RolPermisos.
     * @example
     * // Update one RolPermisos
     * const rolPermisos = await prisma.rolPermisos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RolPermisosUpdateArgs>(args: SelectSubset<T, RolPermisosUpdateArgs<ExtArgs>>): Prisma__RolPermisosClient<$Result.GetResult<Prisma.$RolPermisosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RolPermisos.
     * @param {RolPermisosDeleteManyArgs} args - Arguments to filter RolPermisos to delete.
     * @example
     * // Delete a few RolPermisos
     * const { count } = await prisma.rolPermisos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RolPermisosDeleteManyArgs>(args?: SelectSubset<T, RolPermisosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RolPermisos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolPermisosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RolPermisos
     * const rolPermisos = await prisma.rolPermisos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RolPermisosUpdateManyArgs>(args: SelectSubset<T, RolPermisosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RolPermisos and returns the data updated in the database.
     * @param {RolPermisosUpdateManyAndReturnArgs} args - Arguments to update many RolPermisos.
     * @example
     * // Update many RolPermisos
     * const rolPermisos = await prisma.rolPermisos.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RolPermisos and only return the `id`
     * const rolPermisosWithIdOnly = await prisma.rolPermisos.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RolPermisosUpdateManyAndReturnArgs>(args: SelectSubset<T, RolPermisosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolPermisosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RolPermisos.
     * @param {RolPermisosUpsertArgs} args - Arguments to update or create a RolPermisos.
     * @example
     * // Update or create a RolPermisos
     * const rolPermisos = await prisma.rolPermisos.upsert({
     *   create: {
     *     // ... data to create a RolPermisos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RolPermisos we want to update
     *   }
     * })
     */
    upsert<T extends RolPermisosUpsertArgs>(args: SelectSubset<T, RolPermisosUpsertArgs<ExtArgs>>): Prisma__RolPermisosClient<$Result.GetResult<Prisma.$RolPermisosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RolPermisos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolPermisosCountArgs} args - Arguments to filter RolPermisos to count.
     * @example
     * // Count the number of RolPermisos
     * const count = await prisma.rolPermisos.count({
     *   where: {
     *     // ... the filter for the RolPermisos we want to count
     *   }
     * })
    **/
    count<T extends RolPermisosCountArgs>(
      args?: Subset<T, RolPermisosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RolPermisosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RolPermisos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolPermisosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RolPermisosAggregateArgs>(args: Subset<T, RolPermisosAggregateArgs>): Prisma.PrismaPromise<GetRolPermisosAggregateType<T>>

    /**
     * Group by RolPermisos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolPermisosGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RolPermisosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RolPermisosGroupByArgs['orderBy'] }
        : { orderBy?: RolPermisosGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RolPermisosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRolPermisosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RolPermisos model
   */
  readonly fields: RolPermisosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RolPermisos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RolPermisosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    rol<T extends RolPermisos$rolArgs<ExtArgs> = {}>(args?: Subset<T, RolPermisos$rolArgs<ExtArgs>>): Prisma__RolesClient<$Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    permisos<T extends RolPermisos$permisosArgs<ExtArgs> = {}>(args?: Subset<T, RolPermisos$permisosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PermisosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RolPermisos model
   */
  interface RolPermisosFieldRefs {
    readonly id: FieldRef<"RolPermisos", 'Int'>
    readonly idRol: FieldRef<"RolPermisos", 'Int'>
    readonly status: FieldRef<"RolPermisos", 'String'>
  }
    

  // Custom InputTypes
  /**
   * RolPermisos findUnique
   */
  export type RolPermisosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolPermisos
     */
    select?: RolPermisosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolPermisos
     */
    omit?: RolPermisosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolPermisosInclude<ExtArgs> | null
    /**
     * Filter, which RolPermisos to fetch.
     */
    where: RolPermisosWhereUniqueInput
  }

  /**
   * RolPermisos findUniqueOrThrow
   */
  export type RolPermisosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolPermisos
     */
    select?: RolPermisosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolPermisos
     */
    omit?: RolPermisosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolPermisosInclude<ExtArgs> | null
    /**
     * Filter, which RolPermisos to fetch.
     */
    where: RolPermisosWhereUniqueInput
  }

  /**
   * RolPermisos findFirst
   */
  export type RolPermisosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolPermisos
     */
    select?: RolPermisosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolPermisos
     */
    omit?: RolPermisosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolPermisosInclude<ExtArgs> | null
    /**
     * Filter, which RolPermisos to fetch.
     */
    where?: RolPermisosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RolPermisos to fetch.
     */
    orderBy?: RolPermisosOrderByWithRelationInput | RolPermisosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RolPermisos.
     */
    cursor?: RolPermisosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RolPermisos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RolPermisos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RolPermisos.
     */
    distinct?: RolPermisosScalarFieldEnum | RolPermisosScalarFieldEnum[]
  }

  /**
   * RolPermisos findFirstOrThrow
   */
  export type RolPermisosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolPermisos
     */
    select?: RolPermisosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolPermisos
     */
    omit?: RolPermisosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolPermisosInclude<ExtArgs> | null
    /**
     * Filter, which RolPermisos to fetch.
     */
    where?: RolPermisosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RolPermisos to fetch.
     */
    orderBy?: RolPermisosOrderByWithRelationInput | RolPermisosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RolPermisos.
     */
    cursor?: RolPermisosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RolPermisos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RolPermisos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RolPermisos.
     */
    distinct?: RolPermisosScalarFieldEnum | RolPermisosScalarFieldEnum[]
  }

  /**
   * RolPermisos findMany
   */
  export type RolPermisosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolPermisos
     */
    select?: RolPermisosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolPermisos
     */
    omit?: RolPermisosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolPermisosInclude<ExtArgs> | null
    /**
     * Filter, which RolPermisos to fetch.
     */
    where?: RolPermisosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RolPermisos to fetch.
     */
    orderBy?: RolPermisosOrderByWithRelationInput | RolPermisosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RolPermisos.
     */
    cursor?: RolPermisosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RolPermisos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RolPermisos.
     */
    skip?: number
    distinct?: RolPermisosScalarFieldEnum | RolPermisosScalarFieldEnum[]
  }

  /**
   * RolPermisos create
   */
  export type RolPermisosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolPermisos
     */
    select?: RolPermisosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolPermisos
     */
    omit?: RolPermisosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolPermisosInclude<ExtArgs> | null
    /**
     * The data needed to create a RolPermisos.
     */
    data: XOR<RolPermisosCreateInput, RolPermisosUncheckedCreateInput>
  }

  /**
   * RolPermisos createMany
   */
  export type RolPermisosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RolPermisos.
     */
    data: RolPermisosCreateManyInput | RolPermisosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RolPermisos createManyAndReturn
   */
  export type RolPermisosCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolPermisos
     */
    select?: RolPermisosSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RolPermisos
     */
    omit?: RolPermisosOmit<ExtArgs> | null
    /**
     * The data used to create many RolPermisos.
     */
    data: RolPermisosCreateManyInput | RolPermisosCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolPermisosIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RolPermisos update
   */
  export type RolPermisosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolPermisos
     */
    select?: RolPermisosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolPermisos
     */
    omit?: RolPermisosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolPermisosInclude<ExtArgs> | null
    /**
     * The data needed to update a RolPermisos.
     */
    data: XOR<RolPermisosUpdateInput, RolPermisosUncheckedUpdateInput>
    /**
     * Choose, which RolPermisos to update.
     */
    where: RolPermisosWhereUniqueInput
  }

  /**
   * RolPermisos updateMany
   */
  export type RolPermisosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RolPermisos.
     */
    data: XOR<RolPermisosUpdateManyMutationInput, RolPermisosUncheckedUpdateManyInput>
    /**
     * Filter which RolPermisos to update
     */
    where?: RolPermisosWhereInput
    /**
     * Limit how many RolPermisos to update.
     */
    limit?: number
  }

  /**
   * RolPermisos updateManyAndReturn
   */
  export type RolPermisosUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolPermisos
     */
    select?: RolPermisosSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RolPermisos
     */
    omit?: RolPermisosOmit<ExtArgs> | null
    /**
     * The data used to update RolPermisos.
     */
    data: XOR<RolPermisosUpdateManyMutationInput, RolPermisosUncheckedUpdateManyInput>
    /**
     * Filter which RolPermisos to update
     */
    where?: RolPermisosWhereInput
    /**
     * Limit how many RolPermisos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolPermisosIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RolPermisos upsert
   */
  export type RolPermisosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolPermisos
     */
    select?: RolPermisosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolPermisos
     */
    omit?: RolPermisosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolPermisosInclude<ExtArgs> | null
    /**
     * The filter to search for the RolPermisos to update in case it exists.
     */
    where: RolPermisosWhereUniqueInput
    /**
     * In case the RolPermisos found by the `where` argument doesn't exist, create a new RolPermisos with this data.
     */
    create: XOR<RolPermisosCreateInput, RolPermisosUncheckedCreateInput>
    /**
     * In case the RolPermisos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RolPermisosUpdateInput, RolPermisosUncheckedUpdateInput>
  }

  /**
   * RolPermisos delete
   */
  export type RolPermisosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolPermisos
     */
    select?: RolPermisosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolPermisos
     */
    omit?: RolPermisosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolPermisosInclude<ExtArgs> | null
    /**
     * Filter which RolPermisos to delete.
     */
    where: RolPermisosWhereUniqueInput
  }

  /**
   * RolPermisos deleteMany
   */
  export type RolPermisosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RolPermisos to delete
     */
    where?: RolPermisosWhereInput
    /**
     * Limit how many RolPermisos to delete.
     */
    limit?: number
  }

  /**
   * RolPermisos.rol
   */
  export type RolPermisos$rolArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roles
     */
    omit?: RolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolesInclude<ExtArgs> | null
    where?: RolesWhereInput
  }

  /**
   * RolPermisos.permisos
   */
  export type RolPermisos$permisosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permisos
     */
    select?: PermisosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permisos
     */
    omit?: PermisosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermisosInclude<ExtArgs> | null
    where?: PermisosWhereInput
    orderBy?: PermisosOrderByWithRelationInput | PermisosOrderByWithRelationInput[]
    cursor?: PermisosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PermisosScalarFieldEnum | PermisosScalarFieldEnum[]
  }

  /**
   * RolPermisos without action
   */
  export type RolPermisosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolPermisos
     */
    select?: RolPermisosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolPermisos
     */
    omit?: RolPermisosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolPermisosInclude<ExtArgs> | null
  }


  /**
   * Model RolUsuario
   */

  export type AggregateRolUsuario = {
    _count: RolUsuarioCountAggregateOutputType | null
    _avg: RolUsuarioAvgAggregateOutputType | null
    _sum: RolUsuarioSumAggregateOutputType | null
    _min: RolUsuarioMinAggregateOutputType | null
    _max: RolUsuarioMaxAggregateOutputType | null
  }

  export type RolUsuarioAvgAggregateOutputType = {
    id: number | null
    idUsuario: number | null
  }

  export type RolUsuarioSumAggregateOutputType = {
    id: number | null
    idUsuario: number | null
  }

  export type RolUsuarioMinAggregateOutputType = {
    id: number | null
    idUsuario: number | null
    status: boolean | null
  }

  export type RolUsuarioMaxAggregateOutputType = {
    id: number | null
    idUsuario: number | null
    status: boolean | null
  }

  export type RolUsuarioCountAggregateOutputType = {
    id: number
    idUsuario: number
    status: number
    _all: number
  }


  export type RolUsuarioAvgAggregateInputType = {
    id?: true
    idUsuario?: true
  }

  export type RolUsuarioSumAggregateInputType = {
    id?: true
    idUsuario?: true
  }

  export type RolUsuarioMinAggregateInputType = {
    id?: true
    idUsuario?: true
    status?: true
  }

  export type RolUsuarioMaxAggregateInputType = {
    id?: true
    idUsuario?: true
    status?: true
  }

  export type RolUsuarioCountAggregateInputType = {
    id?: true
    idUsuario?: true
    status?: true
    _all?: true
  }

  export type RolUsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RolUsuario to aggregate.
     */
    where?: RolUsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RolUsuarios to fetch.
     */
    orderBy?: RolUsuarioOrderByWithRelationInput | RolUsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RolUsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RolUsuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RolUsuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RolUsuarios
    **/
    _count?: true | RolUsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RolUsuarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RolUsuarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RolUsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RolUsuarioMaxAggregateInputType
  }

  export type GetRolUsuarioAggregateType<T extends RolUsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateRolUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRolUsuario[P]>
      : GetScalarType<T[P], AggregateRolUsuario[P]>
  }




  export type RolUsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RolUsuarioWhereInput
    orderBy?: RolUsuarioOrderByWithAggregationInput | RolUsuarioOrderByWithAggregationInput[]
    by: RolUsuarioScalarFieldEnum[] | RolUsuarioScalarFieldEnum
    having?: RolUsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RolUsuarioCountAggregateInputType | true
    _avg?: RolUsuarioAvgAggregateInputType
    _sum?: RolUsuarioSumAggregateInputType
    _min?: RolUsuarioMinAggregateInputType
    _max?: RolUsuarioMaxAggregateInputType
  }

  export type RolUsuarioGroupByOutputType = {
    id: number
    idUsuario: number | null
    status: boolean | null
    _count: RolUsuarioCountAggregateOutputType | null
    _avg: RolUsuarioAvgAggregateOutputType | null
    _sum: RolUsuarioSumAggregateOutputType | null
    _min: RolUsuarioMinAggregateOutputType | null
    _max: RolUsuarioMaxAggregateOutputType | null
  }

  type GetRolUsuarioGroupByPayload<T extends RolUsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RolUsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RolUsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RolUsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], RolUsuarioGroupByOutputType[P]>
        }
      >
    >


  export type RolUsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idUsuario?: boolean
    status?: boolean
    usuario?: boolean | RolUsuario$usuarioArgs<ExtArgs>
    roles?: boolean | RolUsuario$rolesArgs<ExtArgs>
    _count?: boolean | RolUsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rolUsuario"]>

  export type RolUsuarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idUsuario?: boolean
    status?: boolean
    usuario?: boolean | RolUsuario$usuarioArgs<ExtArgs>
  }, ExtArgs["result"]["rolUsuario"]>

  export type RolUsuarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idUsuario?: boolean
    status?: boolean
    usuario?: boolean | RolUsuario$usuarioArgs<ExtArgs>
  }, ExtArgs["result"]["rolUsuario"]>

  export type RolUsuarioSelectScalar = {
    id?: boolean
    idUsuario?: boolean
    status?: boolean
  }

  export type RolUsuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "idUsuario" | "status", ExtArgs["result"]["rolUsuario"]>
  export type RolUsuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | RolUsuario$usuarioArgs<ExtArgs>
    roles?: boolean | RolUsuario$rolesArgs<ExtArgs>
    _count?: boolean | RolUsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RolUsuarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | RolUsuario$usuarioArgs<ExtArgs>
  }
  export type RolUsuarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | RolUsuario$usuarioArgs<ExtArgs>
  }

  export type $RolUsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RolUsuario"
    objects: {
      usuario: Prisma.$UsuariosPayload<ExtArgs> | null
      roles: Prisma.$RolesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      idUsuario: number | null
      status: boolean | null
    }, ExtArgs["result"]["rolUsuario"]>
    composites: {}
  }

  type RolUsuarioGetPayload<S extends boolean | null | undefined | RolUsuarioDefaultArgs> = $Result.GetResult<Prisma.$RolUsuarioPayload, S>

  type RolUsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RolUsuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RolUsuarioCountAggregateInputType | true
    }

  export interface RolUsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RolUsuario'], meta: { name: 'RolUsuario' } }
    /**
     * Find zero or one RolUsuario that matches the filter.
     * @param {RolUsuarioFindUniqueArgs} args - Arguments to find a RolUsuario
     * @example
     * // Get one RolUsuario
     * const rolUsuario = await prisma.rolUsuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RolUsuarioFindUniqueArgs>(args: SelectSubset<T, RolUsuarioFindUniqueArgs<ExtArgs>>): Prisma__RolUsuarioClient<$Result.GetResult<Prisma.$RolUsuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RolUsuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RolUsuarioFindUniqueOrThrowArgs} args - Arguments to find a RolUsuario
     * @example
     * // Get one RolUsuario
     * const rolUsuario = await prisma.rolUsuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RolUsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, RolUsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RolUsuarioClient<$Result.GetResult<Prisma.$RolUsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RolUsuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolUsuarioFindFirstArgs} args - Arguments to find a RolUsuario
     * @example
     * // Get one RolUsuario
     * const rolUsuario = await prisma.rolUsuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RolUsuarioFindFirstArgs>(args?: SelectSubset<T, RolUsuarioFindFirstArgs<ExtArgs>>): Prisma__RolUsuarioClient<$Result.GetResult<Prisma.$RolUsuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RolUsuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolUsuarioFindFirstOrThrowArgs} args - Arguments to find a RolUsuario
     * @example
     * // Get one RolUsuario
     * const rolUsuario = await prisma.rolUsuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RolUsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, RolUsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__RolUsuarioClient<$Result.GetResult<Prisma.$RolUsuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RolUsuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolUsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RolUsuarios
     * const rolUsuarios = await prisma.rolUsuario.findMany()
     * 
     * // Get first 10 RolUsuarios
     * const rolUsuarios = await prisma.rolUsuario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rolUsuarioWithIdOnly = await prisma.rolUsuario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RolUsuarioFindManyArgs>(args?: SelectSubset<T, RolUsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolUsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RolUsuario.
     * @param {RolUsuarioCreateArgs} args - Arguments to create a RolUsuario.
     * @example
     * // Create one RolUsuario
     * const RolUsuario = await prisma.rolUsuario.create({
     *   data: {
     *     // ... data to create a RolUsuario
     *   }
     * })
     * 
     */
    create<T extends RolUsuarioCreateArgs>(args: SelectSubset<T, RolUsuarioCreateArgs<ExtArgs>>): Prisma__RolUsuarioClient<$Result.GetResult<Prisma.$RolUsuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RolUsuarios.
     * @param {RolUsuarioCreateManyArgs} args - Arguments to create many RolUsuarios.
     * @example
     * // Create many RolUsuarios
     * const rolUsuario = await prisma.rolUsuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RolUsuarioCreateManyArgs>(args?: SelectSubset<T, RolUsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RolUsuarios and returns the data saved in the database.
     * @param {RolUsuarioCreateManyAndReturnArgs} args - Arguments to create many RolUsuarios.
     * @example
     * // Create many RolUsuarios
     * const rolUsuario = await prisma.rolUsuario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RolUsuarios and only return the `id`
     * const rolUsuarioWithIdOnly = await prisma.rolUsuario.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RolUsuarioCreateManyAndReturnArgs>(args?: SelectSubset<T, RolUsuarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolUsuarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RolUsuario.
     * @param {RolUsuarioDeleteArgs} args - Arguments to delete one RolUsuario.
     * @example
     * // Delete one RolUsuario
     * const RolUsuario = await prisma.rolUsuario.delete({
     *   where: {
     *     // ... filter to delete one RolUsuario
     *   }
     * })
     * 
     */
    delete<T extends RolUsuarioDeleteArgs>(args: SelectSubset<T, RolUsuarioDeleteArgs<ExtArgs>>): Prisma__RolUsuarioClient<$Result.GetResult<Prisma.$RolUsuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RolUsuario.
     * @param {RolUsuarioUpdateArgs} args - Arguments to update one RolUsuario.
     * @example
     * // Update one RolUsuario
     * const rolUsuario = await prisma.rolUsuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RolUsuarioUpdateArgs>(args: SelectSubset<T, RolUsuarioUpdateArgs<ExtArgs>>): Prisma__RolUsuarioClient<$Result.GetResult<Prisma.$RolUsuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RolUsuarios.
     * @param {RolUsuarioDeleteManyArgs} args - Arguments to filter RolUsuarios to delete.
     * @example
     * // Delete a few RolUsuarios
     * const { count } = await prisma.rolUsuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RolUsuarioDeleteManyArgs>(args?: SelectSubset<T, RolUsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RolUsuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolUsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RolUsuarios
     * const rolUsuario = await prisma.rolUsuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RolUsuarioUpdateManyArgs>(args: SelectSubset<T, RolUsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RolUsuarios and returns the data updated in the database.
     * @param {RolUsuarioUpdateManyAndReturnArgs} args - Arguments to update many RolUsuarios.
     * @example
     * // Update many RolUsuarios
     * const rolUsuario = await prisma.rolUsuario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RolUsuarios and only return the `id`
     * const rolUsuarioWithIdOnly = await prisma.rolUsuario.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RolUsuarioUpdateManyAndReturnArgs>(args: SelectSubset<T, RolUsuarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolUsuarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RolUsuario.
     * @param {RolUsuarioUpsertArgs} args - Arguments to update or create a RolUsuario.
     * @example
     * // Update or create a RolUsuario
     * const rolUsuario = await prisma.rolUsuario.upsert({
     *   create: {
     *     // ... data to create a RolUsuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RolUsuario we want to update
     *   }
     * })
     */
    upsert<T extends RolUsuarioUpsertArgs>(args: SelectSubset<T, RolUsuarioUpsertArgs<ExtArgs>>): Prisma__RolUsuarioClient<$Result.GetResult<Prisma.$RolUsuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RolUsuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolUsuarioCountArgs} args - Arguments to filter RolUsuarios to count.
     * @example
     * // Count the number of RolUsuarios
     * const count = await prisma.rolUsuario.count({
     *   where: {
     *     // ... the filter for the RolUsuarios we want to count
     *   }
     * })
    **/
    count<T extends RolUsuarioCountArgs>(
      args?: Subset<T, RolUsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RolUsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RolUsuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolUsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RolUsuarioAggregateArgs>(args: Subset<T, RolUsuarioAggregateArgs>): Prisma.PrismaPromise<GetRolUsuarioAggregateType<T>>

    /**
     * Group by RolUsuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolUsuarioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RolUsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RolUsuarioGroupByArgs['orderBy'] }
        : { orderBy?: RolUsuarioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RolUsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRolUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RolUsuario model
   */
  readonly fields: RolUsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RolUsuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RolUsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends RolUsuario$usuarioArgs<ExtArgs> = {}>(args?: Subset<T, RolUsuario$usuarioArgs<ExtArgs>>): Prisma__UsuariosClient<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    roles<T extends RolUsuario$rolesArgs<ExtArgs> = {}>(args?: Subset<T, RolUsuario$rolesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RolUsuario model
   */
  interface RolUsuarioFieldRefs {
    readonly id: FieldRef<"RolUsuario", 'Int'>
    readonly idUsuario: FieldRef<"RolUsuario", 'Int'>
    readonly status: FieldRef<"RolUsuario", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * RolUsuario findUnique
   */
  export type RolUsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolUsuario
     */
    select?: RolUsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolUsuario
     */
    omit?: RolUsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolUsuarioInclude<ExtArgs> | null
    /**
     * Filter, which RolUsuario to fetch.
     */
    where: RolUsuarioWhereUniqueInput
  }

  /**
   * RolUsuario findUniqueOrThrow
   */
  export type RolUsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolUsuario
     */
    select?: RolUsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolUsuario
     */
    omit?: RolUsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolUsuarioInclude<ExtArgs> | null
    /**
     * Filter, which RolUsuario to fetch.
     */
    where: RolUsuarioWhereUniqueInput
  }

  /**
   * RolUsuario findFirst
   */
  export type RolUsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolUsuario
     */
    select?: RolUsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolUsuario
     */
    omit?: RolUsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolUsuarioInclude<ExtArgs> | null
    /**
     * Filter, which RolUsuario to fetch.
     */
    where?: RolUsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RolUsuarios to fetch.
     */
    orderBy?: RolUsuarioOrderByWithRelationInput | RolUsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RolUsuarios.
     */
    cursor?: RolUsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RolUsuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RolUsuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RolUsuarios.
     */
    distinct?: RolUsuarioScalarFieldEnum | RolUsuarioScalarFieldEnum[]
  }

  /**
   * RolUsuario findFirstOrThrow
   */
  export type RolUsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolUsuario
     */
    select?: RolUsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolUsuario
     */
    omit?: RolUsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolUsuarioInclude<ExtArgs> | null
    /**
     * Filter, which RolUsuario to fetch.
     */
    where?: RolUsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RolUsuarios to fetch.
     */
    orderBy?: RolUsuarioOrderByWithRelationInput | RolUsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RolUsuarios.
     */
    cursor?: RolUsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RolUsuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RolUsuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RolUsuarios.
     */
    distinct?: RolUsuarioScalarFieldEnum | RolUsuarioScalarFieldEnum[]
  }

  /**
   * RolUsuario findMany
   */
  export type RolUsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolUsuario
     */
    select?: RolUsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolUsuario
     */
    omit?: RolUsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolUsuarioInclude<ExtArgs> | null
    /**
     * Filter, which RolUsuarios to fetch.
     */
    where?: RolUsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RolUsuarios to fetch.
     */
    orderBy?: RolUsuarioOrderByWithRelationInput | RolUsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RolUsuarios.
     */
    cursor?: RolUsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RolUsuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RolUsuarios.
     */
    skip?: number
    distinct?: RolUsuarioScalarFieldEnum | RolUsuarioScalarFieldEnum[]
  }

  /**
   * RolUsuario create
   */
  export type RolUsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolUsuario
     */
    select?: RolUsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolUsuario
     */
    omit?: RolUsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolUsuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a RolUsuario.
     */
    data: XOR<RolUsuarioCreateInput, RolUsuarioUncheckedCreateInput>
  }

  /**
   * RolUsuario createMany
   */
  export type RolUsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RolUsuarios.
     */
    data: RolUsuarioCreateManyInput | RolUsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RolUsuario createManyAndReturn
   */
  export type RolUsuarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolUsuario
     */
    select?: RolUsuarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RolUsuario
     */
    omit?: RolUsuarioOmit<ExtArgs> | null
    /**
     * The data used to create many RolUsuarios.
     */
    data: RolUsuarioCreateManyInput | RolUsuarioCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolUsuarioIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RolUsuario update
   */
  export type RolUsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolUsuario
     */
    select?: RolUsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolUsuario
     */
    omit?: RolUsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolUsuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a RolUsuario.
     */
    data: XOR<RolUsuarioUpdateInput, RolUsuarioUncheckedUpdateInput>
    /**
     * Choose, which RolUsuario to update.
     */
    where: RolUsuarioWhereUniqueInput
  }

  /**
   * RolUsuario updateMany
   */
  export type RolUsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RolUsuarios.
     */
    data: XOR<RolUsuarioUpdateManyMutationInput, RolUsuarioUncheckedUpdateManyInput>
    /**
     * Filter which RolUsuarios to update
     */
    where?: RolUsuarioWhereInput
    /**
     * Limit how many RolUsuarios to update.
     */
    limit?: number
  }

  /**
   * RolUsuario updateManyAndReturn
   */
  export type RolUsuarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolUsuario
     */
    select?: RolUsuarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RolUsuario
     */
    omit?: RolUsuarioOmit<ExtArgs> | null
    /**
     * The data used to update RolUsuarios.
     */
    data: XOR<RolUsuarioUpdateManyMutationInput, RolUsuarioUncheckedUpdateManyInput>
    /**
     * Filter which RolUsuarios to update
     */
    where?: RolUsuarioWhereInput
    /**
     * Limit how many RolUsuarios to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolUsuarioIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RolUsuario upsert
   */
  export type RolUsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolUsuario
     */
    select?: RolUsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolUsuario
     */
    omit?: RolUsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolUsuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the RolUsuario to update in case it exists.
     */
    where: RolUsuarioWhereUniqueInput
    /**
     * In case the RolUsuario found by the `where` argument doesn't exist, create a new RolUsuario with this data.
     */
    create: XOR<RolUsuarioCreateInput, RolUsuarioUncheckedCreateInput>
    /**
     * In case the RolUsuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RolUsuarioUpdateInput, RolUsuarioUncheckedUpdateInput>
  }

  /**
   * RolUsuario delete
   */
  export type RolUsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolUsuario
     */
    select?: RolUsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolUsuario
     */
    omit?: RolUsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolUsuarioInclude<ExtArgs> | null
    /**
     * Filter which RolUsuario to delete.
     */
    where: RolUsuarioWhereUniqueInput
  }

  /**
   * RolUsuario deleteMany
   */
  export type RolUsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RolUsuarios to delete
     */
    where?: RolUsuarioWhereInput
    /**
     * Limit how many RolUsuarios to delete.
     */
    limit?: number
  }

  /**
   * RolUsuario.usuario
   */
  export type RolUsuario$usuarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuarios
     */
    omit?: UsuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuariosInclude<ExtArgs> | null
    where?: UsuariosWhereInput
  }

  /**
   * RolUsuario.roles
   */
  export type RolUsuario$rolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roles
     */
    omit?: RolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolesInclude<ExtArgs> | null
    where?: RolesWhereInput
    orderBy?: RolesOrderByWithRelationInput | RolesOrderByWithRelationInput[]
    cursor?: RolesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RolesScalarFieldEnum | RolesScalarFieldEnum[]
  }

  /**
   * RolUsuario without action
   */
  export type RolUsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolUsuario
     */
    select?: RolUsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolUsuario
     */
    omit?: RolUsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolUsuarioInclude<ExtArgs> | null
  }


  /**
   * Model Usuarios
   */

  export type AggregateUsuarios = {
    _count: UsuariosCountAggregateOutputType | null
    _avg: UsuariosAvgAggregateOutputType | null
    _sum: UsuariosSumAggregateOutputType | null
    _min: UsuariosMinAggregateOutputType | null
    _max: UsuariosMaxAggregateOutputType | null
  }

  export type UsuariosAvgAggregateOutputType = {
    id: number | null
  }

  export type UsuariosSumAggregateOutputType = {
    id: number | null
  }

  export type UsuariosMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    contrasena: string | null
    password: string | null
    correo: string | null
    fechaCreacion: Date | null
    fechaActualizacion: Date | null
    estatus: boolean | null
  }

  export type UsuariosMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    contrasena: string | null
    password: string | null
    correo: string | null
    fechaCreacion: Date | null
    fechaActualizacion: Date | null
    estatus: boolean | null
  }

  export type UsuariosCountAggregateOutputType = {
    id: number
    nombre: number
    contrasena: number
    password: number
    correo: number
    fechaCreacion: number
    fechaActualizacion: number
    estatus: number
    _all: number
  }


  export type UsuariosAvgAggregateInputType = {
    id?: true
  }

  export type UsuariosSumAggregateInputType = {
    id?: true
  }

  export type UsuariosMinAggregateInputType = {
    id?: true
    nombre?: true
    contrasena?: true
    password?: true
    correo?: true
    fechaCreacion?: true
    fechaActualizacion?: true
    estatus?: true
  }

  export type UsuariosMaxAggregateInputType = {
    id?: true
    nombre?: true
    contrasena?: true
    password?: true
    correo?: true
    fechaCreacion?: true
    fechaActualizacion?: true
    estatus?: true
  }

  export type UsuariosCountAggregateInputType = {
    id?: true
    nombre?: true
    contrasena?: true
    password?: true
    correo?: true
    fechaCreacion?: true
    fechaActualizacion?: true
    estatus?: true
    _all?: true
  }

  export type UsuariosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to aggregate.
     */
    where?: UsuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuariosOrderByWithRelationInput | UsuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuariosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuariosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuariosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuariosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuariosMaxAggregateInputType
  }

  export type GetUsuariosAggregateType<T extends UsuariosAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuarios]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuarios[P]>
      : GetScalarType<T[P], AggregateUsuarios[P]>
  }




  export type UsuariosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuariosWhereInput
    orderBy?: UsuariosOrderByWithAggregationInput | UsuariosOrderByWithAggregationInput[]
    by: UsuariosScalarFieldEnum[] | UsuariosScalarFieldEnum
    having?: UsuariosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuariosCountAggregateInputType | true
    _avg?: UsuariosAvgAggregateInputType
    _sum?: UsuariosSumAggregateInputType
    _min?: UsuariosMinAggregateInputType
    _max?: UsuariosMaxAggregateInputType
  }

  export type UsuariosGroupByOutputType = {
    id: number
    nombre: string | null
    contrasena: string | null
    password: string | null
    correo: string | null
    fechaCreacion: Date | null
    fechaActualizacion: Date | null
    estatus: boolean | null
    _count: UsuariosCountAggregateOutputType | null
    _avg: UsuariosAvgAggregateOutputType | null
    _sum: UsuariosSumAggregateOutputType | null
    _min: UsuariosMinAggregateOutputType | null
    _max: UsuariosMaxAggregateOutputType | null
  }

  type GetUsuariosGroupByPayload<T extends UsuariosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuariosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuariosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuariosGroupByOutputType[P]>
            : GetScalarType<T[P], UsuariosGroupByOutputType[P]>
        }
      >
    >


  export type UsuariosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    contrasena?: boolean
    password?: boolean
    correo?: boolean
    fechaCreacion?: boolean
    fechaActualizacion?: boolean
    estatus?: boolean
    clientes?: boolean | Usuarios$clientesArgs<ExtArgs>
    prestamos?: boolean | Usuarios$prestamosArgs<ExtArgs>
    rolUsuario?: boolean | Usuarios$rolUsuarioArgs<ExtArgs>
    _count?: boolean | UsuariosCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuarios"]>

  export type UsuariosSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    contrasena?: boolean
    password?: boolean
    correo?: boolean
    fechaCreacion?: boolean
    fechaActualizacion?: boolean
    estatus?: boolean
  }, ExtArgs["result"]["usuarios"]>

  export type UsuariosSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    contrasena?: boolean
    password?: boolean
    correo?: boolean
    fechaCreacion?: boolean
    fechaActualizacion?: boolean
    estatus?: boolean
  }, ExtArgs["result"]["usuarios"]>

  export type UsuariosSelectScalar = {
    id?: boolean
    nombre?: boolean
    contrasena?: boolean
    password?: boolean
    correo?: boolean
    fechaCreacion?: boolean
    fechaActualizacion?: boolean
    estatus?: boolean
  }

  export type UsuariosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "contrasena" | "password" | "correo" | "fechaCreacion" | "fechaActualizacion" | "estatus", ExtArgs["result"]["usuarios"]>
  export type UsuariosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clientes?: boolean | Usuarios$clientesArgs<ExtArgs>
    prestamos?: boolean | Usuarios$prestamosArgs<ExtArgs>
    rolUsuario?: boolean | Usuarios$rolUsuarioArgs<ExtArgs>
    _count?: boolean | UsuariosCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsuariosIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UsuariosIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UsuariosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuarios"
    objects: {
      clientes: Prisma.$ClientesPayload<ExtArgs>[]
      prestamos: Prisma.$PrestamosPayload<ExtArgs>[]
      rolUsuario: Prisma.$RolUsuarioPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string | null
      contrasena: string | null
      password: string | null
      correo: string | null
      fechaCreacion: Date | null
      fechaActualizacion: Date | null
      estatus: boolean | null
    }, ExtArgs["result"]["usuarios"]>
    composites: {}
  }

  type UsuariosGetPayload<S extends boolean | null | undefined | UsuariosDefaultArgs> = $Result.GetResult<Prisma.$UsuariosPayload, S>

  type UsuariosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuariosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuariosCountAggregateInputType | true
    }

  export interface UsuariosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuarios'], meta: { name: 'Usuarios' } }
    /**
     * Find zero or one Usuarios that matches the filter.
     * @param {UsuariosFindUniqueArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuariosFindUniqueArgs>(args: SelectSubset<T, UsuariosFindUniqueArgs<ExtArgs>>): Prisma__UsuariosClient<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuarios that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuariosFindUniqueOrThrowArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuariosFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuariosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuariosClient<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariosFindFirstArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuariosFindFirstArgs>(args?: SelectSubset<T, UsuariosFindFirstArgs<ExtArgs>>): Prisma__UsuariosClient<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuarios that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariosFindFirstOrThrowArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuariosFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuariosFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuariosClient<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuarios.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuarios.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuariosWithIdOnly = await prisma.usuarios.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsuariosFindManyArgs>(args?: SelectSubset<T, UsuariosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuarios.
     * @param {UsuariosCreateArgs} args - Arguments to create a Usuarios.
     * @example
     * // Create one Usuarios
     * const Usuarios = await prisma.usuarios.create({
     *   data: {
     *     // ... data to create a Usuarios
     *   }
     * })
     * 
     */
    create<T extends UsuariosCreateArgs>(args: SelectSubset<T, UsuariosCreateArgs<ExtArgs>>): Prisma__UsuariosClient<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {UsuariosCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuarios = await prisma.usuarios.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuariosCreateManyArgs>(args?: SelectSubset<T, UsuariosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuarios and returns the data saved in the database.
     * @param {UsuariosCreateManyAndReturnArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuarios = await prisma.usuarios.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuarios and only return the `id`
     * const usuariosWithIdOnly = await prisma.usuarios.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsuariosCreateManyAndReturnArgs>(args?: SelectSubset<T, UsuariosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Usuarios.
     * @param {UsuariosDeleteArgs} args - Arguments to delete one Usuarios.
     * @example
     * // Delete one Usuarios
     * const Usuarios = await prisma.usuarios.delete({
     *   where: {
     *     // ... filter to delete one Usuarios
     *   }
     * })
     * 
     */
    delete<T extends UsuariosDeleteArgs>(args: SelectSubset<T, UsuariosDeleteArgs<ExtArgs>>): Prisma__UsuariosClient<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuarios.
     * @param {UsuariosUpdateArgs} args - Arguments to update one Usuarios.
     * @example
     * // Update one Usuarios
     * const usuarios = await prisma.usuarios.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuariosUpdateArgs>(args: SelectSubset<T, UsuariosUpdateArgs<ExtArgs>>): Prisma__UsuariosClient<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuariosDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuarios.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuariosDeleteManyArgs>(args?: SelectSubset<T, UsuariosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuarios = await prisma.usuarios.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuariosUpdateManyArgs>(args: SelectSubset<T, UsuariosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios and returns the data updated in the database.
     * @param {UsuariosUpdateManyAndReturnArgs} args - Arguments to update many Usuarios.
     * @example
     * // Update many Usuarios
     * const usuarios = await prisma.usuarios.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Usuarios and only return the `id`
     * const usuariosWithIdOnly = await prisma.usuarios.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UsuariosUpdateManyAndReturnArgs>(args: SelectSubset<T, UsuariosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Usuarios.
     * @param {UsuariosUpsertArgs} args - Arguments to update or create a Usuarios.
     * @example
     * // Update or create a Usuarios
     * const usuarios = await prisma.usuarios.upsert({
     *   create: {
     *     // ... data to create a Usuarios
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuarios we want to update
     *   }
     * })
     */
    upsert<T extends UsuariosUpsertArgs>(args: SelectSubset<T, UsuariosUpsertArgs<ExtArgs>>): Prisma__UsuariosClient<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariosCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuarios.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuariosCountArgs>(
      args?: Subset<T, UsuariosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuariosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsuariosAggregateArgs>(args: Subset<T, UsuariosAggregateArgs>): Prisma.PrismaPromise<GetUsuariosAggregateType<T>>

    /**
     * Group by Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariosGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsuariosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuariosGroupByArgs['orderBy'] }
        : { orderBy?: UsuariosGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsuariosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuariosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuarios model
   */
  readonly fields: UsuariosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuarios.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuariosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    clientes<T extends Usuarios$clientesArgs<ExtArgs> = {}>(args?: Subset<T, Usuarios$clientesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    prestamos<T extends Usuarios$prestamosArgs<ExtArgs> = {}>(args?: Subset<T, Usuarios$prestamosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrestamosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    rolUsuario<T extends Usuarios$rolUsuarioArgs<ExtArgs> = {}>(args?: Subset<T, Usuarios$rolUsuarioArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolUsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Usuarios model
   */
  interface UsuariosFieldRefs {
    readonly id: FieldRef<"Usuarios", 'Int'>
    readonly nombre: FieldRef<"Usuarios", 'String'>
    readonly contrasena: FieldRef<"Usuarios", 'String'>
    readonly password: FieldRef<"Usuarios", 'String'>
    readonly correo: FieldRef<"Usuarios", 'String'>
    readonly fechaCreacion: FieldRef<"Usuarios", 'DateTime'>
    readonly fechaActualizacion: FieldRef<"Usuarios", 'DateTime'>
    readonly estatus: FieldRef<"Usuarios", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Usuarios findUnique
   */
  export type UsuariosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuarios
     */
    omit?: UsuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuariosInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where: UsuariosWhereUniqueInput
  }

  /**
   * Usuarios findUniqueOrThrow
   */
  export type UsuariosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuarios
     */
    omit?: UsuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuariosInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where: UsuariosWhereUniqueInput
  }

  /**
   * Usuarios findFirst
   */
  export type UsuariosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuarios
     */
    omit?: UsuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuariosInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuariosOrderByWithRelationInput | UsuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuariosScalarFieldEnum | UsuariosScalarFieldEnum[]
  }

  /**
   * Usuarios findFirstOrThrow
   */
  export type UsuariosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuarios
     */
    omit?: UsuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuariosInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuariosOrderByWithRelationInput | UsuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuariosScalarFieldEnum | UsuariosScalarFieldEnum[]
  }

  /**
   * Usuarios findMany
   */
  export type UsuariosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuarios
     */
    omit?: UsuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuariosInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuariosOrderByWithRelationInput | UsuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    distinct?: UsuariosScalarFieldEnum | UsuariosScalarFieldEnum[]
  }

  /**
   * Usuarios create
   */
  export type UsuariosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuarios
     */
    omit?: UsuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuariosInclude<ExtArgs> | null
    /**
     * The data needed to create a Usuarios.
     */
    data: XOR<UsuariosCreateInput, UsuariosUncheckedCreateInput>
  }

  /**
   * Usuarios createMany
   */
  export type UsuariosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuariosCreateManyInput | UsuariosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuarios createManyAndReturn
   */
  export type UsuariosCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuarios
     */
    omit?: UsuariosOmit<ExtArgs> | null
    /**
     * The data used to create many Usuarios.
     */
    data: UsuariosCreateManyInput | UsuariosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuarios update
   */
  export type UsuariosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuarios
     */
    omit?: UsuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuariosInclude<ExtArgs> | null
    /**
     * The data needed to update a Usuarios.
     */
    data: XOR<UsuariosUpdateInput, UsuariosUncheckedUpdateInput>
    /**
     * Choose, which Usuarios to update.
     */
    where: UsuariosWhereUniqueInput
  }

  /**
   * Usuarios updateMany
   */
  export type UsuariosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuariosUpdateManyMutationInput, UsuariosUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuariosWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuarios updateManyAndReturn
   */
  export type UsuariosUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuarios
     */
    omit?: UsuariosOmit<ExtArgs> | null
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuariosUpdateManyMutationInput, UsuariosUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuariosWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuarios upsert
   */
  export type UsuariosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuarios
     */
    omit?: UsuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuariosInclude<ExtArgs> | null
    /**
     * The filter to search for the Usuarios to update in case it exists.
     */
    where: UsuariosWhereUniqueInput
    /**
     * In case the Usuarios found by the `where` argument doesn't exist, create a new Usuarios with this data.
     */
    create: XOR<UsuariosCreateInput, UsuariosUncheckedCreateInput>
    /**
     * In case the Usuarios was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuariosUpdateInput, UsuariosUncheckedUpdateInput>
  }

  /**
   * Usuarios delete
   */
  export type UsuariosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuarios
     */
    omit?: UsuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuariosInclude<ExtArgs> | null
    /**
     * Filter which Usuarios to delete.
     */
    where: UsuariosWhereUniqueInput
  }

  /**
   * Usuarios deleteMany
   */
  export type UsuariosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuariosWhereInput
    /**
     * Limit how many Usuarios to delete.
     */
    limit?: number
  }

  /**
   * Usuarios.clientes
   */
  export type Usuarios$clientesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clientes
     */
    select?: ClientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clientes
     */
    omit?: ClientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientesInclude<ExtArgs> | null
    where?: ClientesWhereInput
    orderBy?: ClientesOrderByWithRelationInput | ClientesOrderByWithRelationInput[]
    cursor?: ClientesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClientesScalarFieldEnum | ClientesScalarFieldEnum[]
  }

  /**
   * Usuarios.prestamos
   */
  export type Usuarios$prestamosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prestamos
     */
    select?: PrestamosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prestamos
     */
    omit?: PrestamosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrestamosInclude<ExtArgs> | null
    where?: PrestamosWhereInput
    orderBy?: PrestamosOrderByWithRelationInput | PrestamosOrderByWithRelationInput[]
    cursor?: PrestamosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PrestamosScalarFieldEnum | PrestamosScalarFieldEnum[]
  }

  /**
   * Usuarios.rolUsuario
   */
  export type Usuarios$rolUsuarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolUsuario
     */
    select?: RolUsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolUsuario
     */
    omit?: RolUsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolUsuarioInclude<ExtArgs> | null
    where?: RolUsuarioWhereInput
    orderBy?: RolUsuarioOrderByWithRelationInput | RolUsuarioOrderByWithRelationInput[]
    cursor?: RolUsuarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RolUsuarioScalarFieldEnum | RolUsuarioScalarFieldEnum[]
  }

  /**
   * Usuarios without action
   */
  export type UsuariosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuarios
     */
    omit?: UsuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuariosInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CiudadesScalarFieldEnum: {
    id: 'id',
    idMunicipio: 'idMunicipio',
    nombre: 'nombre'
  };

  export type CiudadesScalarFieldEnum = (typeof CiudadesScalarFieldEnum)[keyof typeof CiudadesScalarFieldEnum]


  export const ClientesScalarFieldEnum: {
    id: 'id',
    idDireccion: 'idDireccion',
    idUsuario: 'idUsuario',
    nombre: 'nombre',
    apellidoPaterno: 'apellidoPaterno',
    apellidoMaterno: 'apellidoMaterno',
    rfc: 'rfc',
    ine: 'ine',
    comprobanteDomicilio: 'comprobanteDomicilio',
    curp: 'curp',
    fechaNacimiento: 'fechaNacimiento',
    estatus: 'estatus'
  };

  export type ClientesScalarFieldEnum = (typeof ClientesScalarFieldEnum)[keyof typeof ClientesScalarFieldEnum]


  export const ContratosScalarFieldEnum: {
    id: 'id',
    idPrestamos: 'idPrestamos',
    url: 'url',
    status: 'status'
  };

  export type ContratosScalarFieldEnum = (typeof ContratosScalarFieldEnum)[keyof typeof ContratosScalarFieldEnum]


  export const DireccionesScalarFieldEnum: {
    id: 'id',
    idLocalidad: 'idLocalidad',
    caller: 'caller',
    codigoPostal: 'codigoPostal',
    numeroExterior: 'numeroExterior',
    numeroInterior: 'numeroInterior'
  };

  export type DireccionesScalarFieldEnum = (typeof DireccionesScalarFieldEnum)[keyof typeof DireccionesScalarFieldEnum]


  export const EstadosScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre'
  };

  export type EstadosScalarFieldEnum = (typeof EstadosScalarFieldEnum)[keyof typeof EstadosScalarFieldEnum]


  export const LocalidadesScalarFieldEnum: {
    id: 'id',
    idCiudad: 'idCiudad',
    nombre: 'nombre'
  };

  export type LocalidadesScalarFieldEnum = (typeof LocalidadesScalarFieldEnum)[keyof typeof LocalidadesScalarFieldEnum]


  export const MetodoPagoScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    status: 'status'
  };

  export type MetodoPagoScalarFieldEnum = (typeof MetodoPagoScalarFieldEnum)[keyof typeof MetodoPagoScalarFieldEnum]


  export const MunicipiosScalarFieldEnum: {
    id: 'id',
    idEstado: 'idEstado',
    nombre: 'nombre'
  };

  export type MunicipiosScalarFieldEnum = (typeof MunicipiosScalarFieldEnum)[keyof typeof MunicipiosScalarFieldEnum]


  export const PagosScalarFieldEnum: {
    id: 'id',
    idPrestamos: 'idPrestamos',
    idMetodoPago: 'idMetodoPago',
    monto: 'monto',
    fechaPago: 'fechaPago',
    status: 'status'
  };

  export type PagosScalarFieldEnum = (typeof PagosScalarFieldEnum)[keyof typeof PagosScalarFieldEnum]


  export const PermisosScalarFieldEnum: {
    id: 'id',
    idRolPermiso: 'idRolPermiso',
    nombre: 'nombre',
    status: 'status'
  };

  export type PermisosScalarFieldEnum = (typeof PermisosScalarFieldEnum)[keyof typeof PermisosScalarFieldEnum]


  export const PrestamosScalarFieldEnum: {
    id: 'id',
    idCliente: 'idCliente',
    idUsuario: 'idUsuario',
    monto: 'monto',
    fechaInicio: 'fechaInicio',
    intervaloPago: 'intervaloPago',
    pagoMinimo: 'pagoMinimo',
    fechaFin: 'fechaFin',
    tasa: 'tasa',
    status: 'status'
  };

  export type PrestamosScalarFieldEnum = (typeof PrestamosScalarFieldEnum)[keyof typeof PrestamosScalarFieldEnum]


  export const RolesScalarFieldEnum: {
    id: 'id',
    idRolUsuario: 'idRolUsuario',
    nombre: 'nombre',
    status: 'status'
  };

  export type RolesScalarFieldEnum = (typeof RolesScalarFieldEnum)[keyof typeof RolesScalarFieldEnum]


  export const RolPermisosScalarFieldEnum: {
    id: 'id',
    idRol: 'idRol',
    status: 'status'
  };

  export type RolPermisosScalarFieldEnum = (typeof RolPermisosScalarFieldEnum)[keyof typeof RolPermisosScalarFieldEnum]


  export const RolUsuarioScalarFieldEnum: {
    id: 'id',
    idUsuario: 'idUsuario',
    status: 'status'
  };

  export type RolUsuarioScalarFieldEnum = (typeof RolUsuarioScalarFieldEnum)[keyof typeof RolUsuarioScalarFieldEnum]


  export const UsuariosScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    contrasena: 'contrasena',
    password: 'password',
    correo: 'correo',
    fechaCreacion: 'fechaCreacion',
    fechaActualizacion: 'fechaActualizacion',
    estatus: 'estatus'
  };

  export type UsuariosScalarFieldEnum = (typeof UsuariosScalarFieldEnum)[keyof typeof UsuariosScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type CiudadesWhereInput = {
    AND?: CiudadesWhereInput | CiudadesWhereInput[]
    OR?: CiudadesWhereInput[]
    NOT?: CiudadesWhereInput | CiudadesWhereInput[]
    id?: IntFilter<"Ciudades"> | number
    idMunicipio?: IntNullableFilter<"Ciudades"> | number | null
    nombre?: StringNullableFilter<"Ciudades"> | string | null
    municipio?: XOR<MunicipiosNullableScalarRelationFilter, MunicipiosWhereInput> | null
    localidades?: LocalidadesListRelationFilter
  }

  export type CiudadesOrderByWithRelationInput = {
    id?: SortOrder
    idMunicipio?: SortOrderInput | SortOrder
    nombre?: SortOrderInput | SortOrder
    municipio?: MunicipiosOrderByWithRelationInput
    localidades?: LocalidadesOrderByRelationAggregateInput
  }

  export type CiudadesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CiudadesWhereInput | CiudadesWhereInput[]
    OR?: CiudadesWhereInput[]
    NOT?: CiudadesWhereInput | CiudadesWhereInput[]
    idMunicipio?: IntNullableFilter<"Ciudades"> | number | null
    nombre?: StringNullableFilter<"Ciudades"> | string | null
    municipio?: XOR<MunicipiosNullableScalarRelationFilter, MunicipiosWhereInput> | null
    localidades?: LocalidadesListRelationFilter
  }, "id">

  export type CiudadesOrderByWithAggregationInput = {
    id?: SortOrder
    idMunicipio?: SortOrderInput | SortOrder
    nombre?: SortOrderInput | SortOrder
    _count?: CiudadesCountOrderByAggregateInput
    _avg?: CiudadesAvgOrderByAggregateInput
    _max?: CiudadesMaxOrderByAggregateInput
    _min?: CiudadesMinOrderByAggregateInput
    _sum?: CiudadesSumOrderByAggregateInput
  }

  export type CiudadesScalarWhereWithAggregatesInput = {
    AND?: CiudadesScalarWhereWithAggregatesInput | CiudadesScalarWhereWithAggregatesInput[]
    OR?: CiudadesScalarWhereWithAggregatesInput[]
    NOT?: CiudadesScalarWhereWithAggregatesInput | CiudadesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Ciudades"> | number
    idMunicipio?: IntNullableWithAggregatesFilter<"Ciudades"> | number | null
    nombre?: StringNullableWithAggregatesFilter<"Ciudades"> | string | null
  }

  export type ClientesWhereInput = {
    AND?: ClientesWhereInput | ClientesWhereInput[]
    OR?: ClientesWhereInput[]
    NOT?: ClientesWhereInput | ClientesWhereInput[]
    id?: IntFilter<"Clientes"> | number
    idDireccion?: IntNullableFilter<"Clientes"> | number | null
    idUsuario?: IntNullableFilter<"Clientes"> | number | null
    nombre?: StringNullableFilter<"Clientes"> | string | null
    apellidoPaterno?: StringNullableFilter<"Clientes"> | string | null
    apellidoMaterno?: StringNullableFilter<"Clientes"> | string | null
    rfc?: StringNullableFilter<"Clientes"> | string | null
    ine?: StringNullableFilter<"Clientes"> | string | null
    comprobanteDomicilio?: StringNullableFilter<"Clientes"> | string | null
    curp?: StringNullableFilter<"Clientes"> | string | null
    fechaNacimiento?: DateTimeNullableFilter<"Clientes"> | Date | string | null
    estatus?: BoolNullableFilter<"Clientes"> | boolean | null
    direccion?: XOR<DireccionesNullableScalarRelationFilter, DireccionesWhereInput> | null
    usuario?: XOR<UsuariosNullableScalarRelationFilter, UsuariosWhereInput> | null
    prestamos?: PrestamosListRelationFilter
  }

  export type ClientesOrderByWithRelationInput = {
    id?: SortOrder
    idDireccion?: SortOrderInput | SortOrder
    idUsuario?: SortOrderInput | SortOrder
    nombre?: SortOrderInput | SortOrder
    apellidoPaterno?: SortOrderInput | SortOrder
    apellidoMaterno?: SortOrderInput | SortOrder
    rfc?: SortOrderInput | SortOrder
    ine?: SortOrderInput | SortOrder
    comprobanteDomicilio?: SortOrderInput | SortOrder
    curp?: SortOrderInput | SortOrder
    fechaNacimiento?: SortOrderInput | SortOrder
    estatus?: SortOrderInput | SortOrder
    direccion?: DireccionesOrderByWithRelationInput
    usuario?: UsuariosOrderByWithRelationInput
    prestamos?: PrestamosOrderByRelationAggregateInput
  }

  export type ClientesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ClientesWhereInput | ClientesWhereInput[]
    OR?: ClientesWhereInput[]
    NOT?: ClientesWhereInput | ClientesWhereInput[]
    idDireccion?: IntNullableFilter<"Clientes"> | number | null
    idUsuario?: IntNullableFilter<"Clientes"> | number | null
    nombre?: StringNullableFilter<"Clientes"> | string | null
    apellidoPaterno?: StringNullableFilter<"Clientes"> | string | null
    apellidoMaterno?: StringNullableFilter<"Clientes"> | string | null
    rfc?: StringNullableFilter<"Clientes"> | string | null
    ine?: StringNullableFilter<"Clientes"> | string | null
    comprobanteDomicilio?: StringNullableFilter<"Clientes"> | string | null
    curp?: StringNullableFilter<"Clientes"> | string | null
    fechaNacimiento?: DateTimeNullableFilter<"Clientes"> | Date | string | null
    estatus?: BoolNullableFilter<"Clientes"> | boolean | null
    direccion?: XOR<DireccionesNullableScalarRelationFilter, DireccionesWhereInput> | null
    usuario?: XOR<UsuariosNullableScalarRelationFilter, UsuariosWhereInput> | null
    prestamos?: PrestamosListRelationFilter
  }, "id">

  export type ClientesOrderByWithAggregationInput = {
    id?: SortOrder
    idDireccion?: SortOrderInput | SortOrder
    idUsuario?: SortOrderInput | SortOrder
    nombre?: SortOrderInput | SortOrder
    apellidoPaterno?: SortOrderInput | SortOrder
    apellidoMaterno?: SortOrderInput | SortOrder
    rfc?: SortOrderInput | SortOrder
    ine?: SortOrderInput | SortOrder
    comprobanteDomicilio?: SortOrderInput | SortOrder
    curp?: SortOrderInput | SortOrder
    fechaNacimiento?: SortOrderInput | SortOrder
    estatus?: SortOrderInput | SortOrder
    _count?: ClientesCountOrderByAggregateInput
    _avg?: ClientesAvgOrderByAggregateInput
    _max?: ClientesMaxOrderByAggregateInput
    _min?: ClientesMinOrderByAggregateInput
    _sum?: ClientesSumOrderByAggregateInput
  }

  export type ClientesScalarWhereWithAggregatesInput = {
    AND?: ClientesScalarWhereWithAggregatesInput | ClientesScalarWhereWithAggregatesInput[]
    OR?: ClientesScalarWhereWithAggregatesInput[]
    NOT?: ClientesScalarWhereWithAggregatesInput | ClientesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Clientes"> | number
    idDireccion?: IntNullableWithAggregatesFilter<"Clientes"> | number | null
    idUsuario?: IntNullableWithAggregatesFilter<"Clientes"> | number | null
    nombre?: StringNullableWithAggregatesFilter<"Clientes"> | string | null
    apellidoPaterno?: StringNullableWithAggregatesFilter<"Clientes"> | string | null
    apellidoMaterno?: StringNullableWithAggregatesFilter<"Clientes"> | string | null
    rfc?: StringNullableWithAggregatesFilter<"Clientes"> | string | null
    ine?: StringNullableWithAggregatesFilter<"Clientes"> | string | null
    comprobanteDomicilio?: StringNullableWithAggregatesFilter<"Clientes"> | string | null
    curp?: StringNullableWithAggregatesFilter<"Clientes"> | string | null
    fechaNacimiento?: DateTimeNullableWithAggregatesFilter<"Clientes"> | Date | string | null
    estatus?: BoolNullableWithAggregatesFilter<"Clientes"> | boolean | null
  }

  export type ContratosWhereInput = {
    AND?: ContratosWhereInput | ContratosWhereInput[]
    OR?: ContratosWhereInput[]
    NOT?: ContratosWhereInput | ContratosWhereInput[]
    id?: IntFilter<"Contratos"> | number
    idPrestamos?: IntNullableFilter<"Contratos"> | number | null
    url?: StringNullableFilter<"Contratos"> | string | null
    status?: BoolNullableFilter<"Contratos"> | boolean | null
    prestamo?: XOR<PrestamosNullableScalarRelationFilter, PrestamosWhereInput> | null
  }

  export type ContratosOrderByWithRelationInput = {
    id?: SortOrder
    idPrestamos?: SortOrderInput | SortOrder
    url?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    prestamo?: PrestamosOrderByWithRelationInput
  }

  export type ContratosWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ContratosWhereInput | ContratosWhereInput[]
    OR?: ContratosWhereInput[]
    NOT?: ContratosWhereInput | ContratosWhereInput[]
    idPrestamos?: IntNullableFilter<"Contratos"> | number | null
    url?: StringNullableFilter<"Contratos"> | string | null
    status?: BoolNullableFilter<"Contratos"> | boolean | null
    prestamo?: XOR<PrestamosNullableScalarRelationFilter, PrestamosWhereInput> | null
  }, "id">

  export type ContratosOrderByWithAggregationInput = {
    id?: SortOrder
    idPrestamos?: SortOrderInput | SortOrder
    url?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    _count?: ContratosCountOrderByAggregateInput
    _avg?: ContratosAvgOrderByAggregateInput
    _max?: ContratosMaxOrderByAggregateInput
    _min?: ContratosMinOrderByAggregateInput
    _sum?: ContratosSumOrderByAggregateInput
  }

  export type ContratosScalarWhereWithAggregatesInput = {
    AND?: ContratosScalarWhereWithAggregatesInput | ContratosScalarWhereWithAggregatesInput[]
    OR?: ContratosScalarWhereWithAggregatesInput[]
    NOT?: ContratosScalarWhereWithAggregatesInput | ContratosScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Contratos"> | number
    idPrestamos?: IntNullableWithAggregatesFilter<"Contratos"> | number | null
    url?: StringNullableWithAggregatesFilter<"Contratos"> | string | null
    status?: BoolNullableWithAggregatesFilter<"Contratos"> | boolean | null
  }

  export type DireccionesWhereInput = {
    AND?: DireccionesWhereInput | DireccionesWhereInput[]
    OR?: DireccionesWhereInput[]
    NOT?: DireccionesWhereInput | DireccionesWhereInput[]
    id?: IntFilter<"Direcciones"> | number
    idLocalidad?: IntNullableFilter<"Direcciones"> | number | null
    caller?: StringNullableFilter<"Direcciones"> | string | null
    codigoPostal?: StringNullableFilter<"Direcciones"> | string | null
    numeroExterior?: StringNullableFilter<"Direcciones"> | string | null
    numeroInterior?: StringNullableFilter<"Direcciones"> | string | null
    localidad?: XOR<LocalidadesNullableScalarRelationFilter, LocalidadesWhereInput> | null
    clientes?: ClientesListRelationFilter
  }

  export type DireccionesOrderByWithRelationInput = {
    id?: SortOrder
    idLocalidad?: SortOrderInput | SortOrder
    caller?: SortOrderInput | SortOrder
    codigoPostal?: SortOrderInput | SortOrder
    numeroExterior?: SortOrderInput | SortOrder
    numeroInterior?: SortOrderInput | SortOrder
    localidad?: LocalidadesOrderByWithRelationInput
    clientes?: ClientesOrderByRelationAggregateInput
  }

  export type DireccionesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DireccionesWhereInput | DireccionesWhereInput[]
    OR?: DireccionesWhereInput[]
    NOT?: DireccionesWhereInput | DireccionesWhereInput[]
    idLocalidad?: IntNullableFilter<"Direcciones"> | number | null
    caller?: StringNullableFilter<"Direcciones"> | string | null
    codigoPostal?: StringNullableFilter<"Direcciones"> | string | null
    numeroExterior?: StringNullableFilter<"Direcciones"> | string | null
    numeroInterior?: StringNullableFilter<"Direcciones"> | string | null
    localidad?: XOR<LocalidadesNullableScalarRelationFilter, LocalidadesWhereInput> | null
    clientes?: ClientesListRelationFilter
  }, "id">

  export type DireccionesOrderByWithAggregationInput = {
    id?: SortOrder
    idLocalidad?: SortOrderInput | SortOrder
    caller?: SortOrderInput | SortOrder
    codigoPostal?: SortOrderInput | SortOrder
    numeroExterior?: SortOrderInput | SortOrder
    numeroInterior?: SortOrderInput | SortOrder
    _count?: DireccionesCountOrderByAggregateInput
    _avg?: DireccionesAvgOrderByAggregateInput
    _max?: DireccionesMaxOrderByAggregateInput
    _min?: DireccionesMinOrderByAggregateInput
    _sum?: DireccionesSumOrderByAggregateInput
  }

  export type DireccionesScalarWhereWithAggregatesInput = {
    AND?: DireccionesScalarWhereWithAggregatesInput | DireccionesScalarWhereWithAggregatesInput[]
    OR?: DireccionesScalarWhereWithAggregatesInput[]
    NOT?: DireccionesScalarWhereWithAggregatesInput | DireccionesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Direcciones"> | number
    idLocalidad?: IntNullableWithAggregatesFilter<"Direcciones"> | number | null
    caller?: StringNullableWithAggregatesFilter<"Direcciones"> | string | null
    codigoPostal?: StringNullableWithAggregatesFilter<"Direcciones"> | string | null
    numeroExterior?: StringNullableWithAggregatesFilter<"Direcciones"> | string | null
    numeroInterior?: StringNullableWithAggregatesFilter<"Direcciones"> | string | null
  }

  export type EstadosWhereInput = {
    AND?: EstadosWhereInput | EstadosWhereInput[]
    OR?: EstadosWhereInput[]
    NOT?: EstadosWhereInput | EstadosWhereInput[]
    id?: IntFilter<"Estados"> | number
    nombre?: StringNullableFilter<"Estados"> | string | null
    municipios?: MunicipiosListRelationFilter
  }

  export type EstadosOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrderInput | SortOrder
    municipios?: MunicipiosOrderByRelationAggregateInput
  }

  export type EstadosWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EstadosWhereInput | EstadosWhereInput[]
    OR?: EstadosWhereInput[]
    NOT?: EstadosWhereInput | EstadosWhereInput[]
    nombre?: StringNullableFilter<"Estados"> | string | null
    municipios?: MunicipiosListRelationFilter
  }, "id">

  export type EstadosOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrderInput | SortOrder
    _count?: EstadosCountOrderByAggregateInput
    _avg?: EstadosAvgOrderByAggregateInput
    _max?: EstadosMaxOrderByAggregateInput
    _min?: EstadosMinOrderByAggregateInput
    _sum?: EstadosSumOrderByAggregateInput
  }

  export type EstadosScalarWhereWithAggregatesInput = {
    AND?: EstadosScalarWhereWithAggregatesInput | EstadosScalarWhereWithAggregatesInput[]
    OR?: EstadosScalarWhereWithAggregatesInput[]
    NOT?: EstadosScalarWhereWithAggregatesInput | EstadosScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Estados"> | number
    nombre?: StringNullableWithAggregatesFilter<"Estados"> | string | null
  }

  export type LocalidadesWhereInput = {
    AND?: LocalidadesWhereInput | LocalidadesWhereInput[]
    OR?: LocalidadesWhereInput[]
    NOT?: LocalidadesWhereInput | LocalidadesWhereInput[]
    id?: IntFilter<"Localidades"> | number
    idCiudad?: IntNullableFilter<"Localidades"> | number | null
    nombre?: StringNullableFilter<"Localidades"> | string | null
    ciudad?: XOR<CiudadesNullableScalarRelationFilter, CiudadesWhereInput> | null
    direcciones?: DireccionesListRelationFilter
  }

  export type LocalidadesOrderByWithRelationInput = {
    id?: SortOrder
    idCiudad?: SortOrderInput | SortOrder
    nombre?: SortOrderInput | SortOrder
    ciudad?: CiudadesOrderByWithRelationInput
    direcciones?: DireccionesOrderByRelationAggregateInput
  }

  export type LocalidadesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: LocalidadesWhereInput | LocalidadesWhereInput[]
    OR?: LocalidadesWhereInput[]
    NOT?: LocalidadesWhereInput | LocalidadesWhereInput[]
    idCiudad?: IntNullableFilter<"Localidades"> | number | null
    nombre?: StringNullableFilter<"Localidades"> | string | null
    ciudad?: XOR<CiudadesNullableScalarRelationFilter, CiudadesWhereInput> | null
    direcciones?: DireccionesListRelationFilter
  }, "id">

  export type LocalidadesOrderByWithAggregationInput = {
    id?: SortOrder
    idCiudad?: SortOrderInput | SortOrder
    nombre?: SortOrderInput | SortOrder
    _count?: LocalidadesCountOrderByAggregateInput
    _avg?: LocalidadesAvgOrderByAggregateInput
    _max?: LocalidadesMaxOrderByAggregateInput
    _min?: LocalidadesMinOrderByAggregateInput
    _sum?: LocalidadesSumOrderByAggregateInput
  }

  export type LocalidadesScalarWhereWithAggregatesInput = {
    AND?: LocalidadesScalarWhereWithAggregatesInput | LocalidadesScalarWhereWithAggregatesInput[]
    OR?: LocalidadesScalarWhereWithAggregatesInput[]
    NOT?: LocalidadesScalarWhereWithAggregatesInput | LocalidadesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Localidades"> | number
    idCiudad?: IntNullableWithAggregatesFilter<"Localidades"> | number | null
    nombre?: StringNullableWithAggregatesFilter<"Localidades"> | string | null
  }

  export type MetodoPagoWhereInput = {
    AND?: MetodoPagoWhereInput | MetodoPagoWhereInput[]
    OR?: MetodoPagoWhereInput[]
    NOT?: MetodoPagoWhereInput | MetodoPagoWhereInput[]
    id?: IntFilter<"MetodoPago"> | number
    nombre?: StringNullableFilter<"MetodoPago"> | string | null
    status?: BoolNullableFilter<"MetodoPago"> | boolean | null
    pagos?: PagosListRelationFilter
  }

  export type MetodoPagoOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    pagos?: PagosOrderByRelationAggregateInput
  }

  export type MetodoPagoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MetodoPagoWhereInput | MetodoPagoWhereInput[]
    OR?: MetodoPagoWhereInput[]
    NOT?: MetodoPagoWhereInput | MetodoPagoWhereInput[]
    nombre?: StringNullableFilter<"MetodoPago"> | string | null
    status?: BoolNullableFilter<"MetodoPago"> | boolean | null
    pagos?: PagosListRelationFilter
  }, "id">

  export type MetodoPagoOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    _count?: MetodoPagoCountOrderByAggregateInput
    _avg?: MetodoPagoAvgOrderByAggregateInput
    _max?: MetodoPagoMaxOrderByAggregateInput
    _min?: MetodoPagoMinOrderByAggregateInput
    _sum?: MetodoPagoSumOrderByAggregateInput
  }

  export type MetodoPagoScalarWhereWithAggregatesInput = {
    AND?: MetodoPagoScalarWhereWithAggregatesInput | MetodoPagoScalarWhereWithAggregatesInput[]
    OR?: MetodoPagoScalarWhereWithAggregatesInput[]
    NOT?: MetodoPagoScalarWhereWithAggregatesInput | MetodoPagoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"MetodoPago"> | number
    nombre?: StringNullableWithAggregatesFilter<"MetodoPago"> | string | null
    status?: BoolNullableWithAggregatesFilter<"MetodoPago"> | boolean | null
  }

  export type MunicipiosWhereInput = {
    AND?: MunicipiosWhereInput | MunicipiosWhereInput[]
    OR?: MunicipiosWhereInput[]
    NOT?: MunicipiosWhereInput | MunicipiosWhereInput[]
    id?: IntFilter<"Municipios"> | number
    idEstado?: IntNullableFilter<"Municipios"> | number | null
    nombre?: StringNullableFilter<"Municipios"> | string | null
    estado?: XOR<EstadosNullableScalarRelationFilter, EstadosWhereInput> | null
    ciudades?: CiudadesListRelationFilter
  }

  export type MunicipiosOrderByWithRelationInput = {
    id?: SortOrder
    idEstado?: SortOrderInput | SortOrder
    nombre?: SortOrderInput | SortOrder
    estado?: EstadosOrderByWithRelationInput
    ciudades?: CiudadesOrderByRelationAggregateInput
  }

  export type MunicipiosWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MunicipiosWhereInput | MunicipiosWhereInput[]
    OR?: MunicipiosWhereInput[]
    NOT?: MunicipiosWhereInput | MunicipiosWhereInput[]
    idEstado?: IntNullableFilter<"Municipios"> | number | null
    nombre?: StringNullableFilter<"Municipios"> | string | null
    estado?: XOR<EstadosNullableScalarRelationFilter, EstadosWhereInput> | null
    ciudades?: CiudadesListRelationFilter
  }, "id">

  export type MunicipiosOrderByWithAggregationInput = {
    id?: SortOrder
    idEstado?: SortOrderInput | SortOrder
    nombre?: SortOrderInput | SortOrder
    _count?: MunicipiosCountOrderByAggregateInput
    _avg?: MunicipiosAvgOrderByAggregateInput
    _max?: MunicipiosMaxOrderByAggregateInput
    _min?: MunicipiosMinOrderByAggregateInput
    _sum?: MunicipiosSumOrderByAggregateInput
  }

  export type MunicipiosScalarWhereWithAggregatesInput = {
    AND?: MunicipiosScalarWhereWithAggregatesInput | MunicipiosScalarWhereWithAggregatesInput[]
    OR?: MunicipiosScalarWhereWithAggregatesInput[]
    NOT?: MunicipiosScalarWhereWithAggregatesInput | MunicipiosScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Municipios"> | number
    idEstado?: IntNullableWithAggregatesFilter<"Municipios"> | number | null
    nombre?: StringNullableWithAggregatesFilter<"Municipios"> | string | null
  }

  export type PagosWhereInput = {
    AND?: PagosWhereInput | PagosWhereInput[]
    OR?: PagosWhereInput[]
    NOT?: PagosWhereInput | PagosWhereInput[]
    id?: IntFilter<"Pagos"> | number
    idPrestamos?: IntNullableFilter<"Pagos"> | number | null
    idMetodoPago?: IntNullableFilter<"Pagos"> | number | null
    monto?: FloatNullableFilter<"Pagos"> | number | null
    fechaPago?: DateTimeNullableFilter<"Pagos"> | Date | string | null
    status?: BoolNullableFilter<"Pagos"> | boolean | null
    prestamo?: XOR<PrestamosNullableScalarRelationFilter, PrestamosWhereInput> | null
    metodoPago?: XOR<MetodoPagoNullableScalarRelationFilter, MetodoPagoWhereInput> | null
  }

  export type PagosOrderByWithRelationInput = {
    id?: SortOrder
    idPrestamos?: SortOrderInput | SortOrder
    idMetodoPago?: SortOrderInput | SortOrder
    monto?: SortOrderInput | SortOrder
    fechaPago?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    prestamo?: PrestamosOrderByWithRelationInput
    metodoPago?: MetodoPagoOrderByWithRelationInput
  }

  export type PagosWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PagosWhereInput | PagosWhereInput[]
    OR?: PagosWhereInput[]
    NOT?: PagosWhereInput | PagosWhereInput[]
    idPrestamos?: IntNullableFilter<"Pagos"> | number | null
    idMetodoPago?: IntNullableFilter<"Pagos"> | number | null
    monto?: FloatNullableFilter<"Pagos"> | number | null
    fechaPago?: DateTimeNullableFilter<"Pagos"> | Date | string | null
    status?: BoolNullableFilter<"Pagos"> | boolean | null
    prestamo?: XOR<PrestamosNullableScalarRelationFilter, PrestamosWhereInput> | null
    metodoPago?: XOR<MetodoPagoNullableScalarRelationFilter, MetodoPagoWhereInput> | null
  }, "id">

  export type PagosOrderByWithAggregationInput = {
    id?: SortOrder
    idPrestamos?: SortOrderInput | SortOrder
    idMetodoPago?: SortOrderInput | SortOrder
    monto?: SortOrderInput | SortOrder
    fechaPago?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    _count?: PagosCountOrderByAggregateInput
    _avg?: PagosAvgOrderByAggregateInput
    _max?: PagosMaxOrderByAggregateInput
    _min?: PagosMinOrderByAggregateInput
    _sum?: PagosSumOrderByAggregateInput
  }

  export type PagosScalarWhereWithAggregatesInput = {
    AND?: PagosScalarWhereWithAggregatesInput | PagosScalarWhereWithAggregatesInput[]
    OR?: PagosScalarWhereWithAggregatesInput[]
    NOT?: PagosScalarWhereWithAggregatesInput | PagosScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Pagos"> | number
    idPrestamos?: IntNullableWithAggregatesFilter<"Pagos"> | number | null
    idMetodoPago?: IntNullableWithAggregatesFilter<"Pagos"> | number | null
    monto?: FloatNullableWithAggregatesFilter<"Pagos"> | number | null
    fechaPago?: DateTimeNullableWithAggregatesFilter<"Pagos"> | Date | string | null
    status?: BoolNullableWithAggregatesFilter<"Pagos"> | boolean | null
  }

  export type PermisosWhereInput = {
    AND?: PermisosWhereInput | PermisosWhereInput[]
    OR?: PermisosWhereInput[]
    NOT?: PermisosWhereInput | PermisosWhereInput[]
    id?: IntFilter<"Permisos"> | number
    idRolPermiso?: IntNullableFilter<"Permisos"> | number | null
    nombre?: StringNullableFilter<"Permisos"> | string | null
    status?: BoolNullableFilter<"Permisos"> | boolean | null
    rolPermiso?: XOR<RolPermisosNullableScalarRelationFilter, RolPermisosWhereInput> | null
  }

  export type PermisosOrderByWithRelationInput = {
    id?: SortOrder
    idRolPermiso?: SortOrderInput | SortOrder
    nombre?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    rolPermiso?: RolPermisosOrderByWithRelationInput
  }

  export type PermisosWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PermisosWhereInput | PermisosWhereInput[]
    OR?: PermisosWhereInput[]
    NOT?: PermisosWhereInput | PermisosWhereInput[]
    idRolPermiso?: IntNullableFilter<"Permisos"> | number | null
    nombre?: StringNullableFilter<"Permisos"> | string | null
    status?: BoolNullableFilter<"Permisos"> | boolean | null
    rolPermiso?: XOR<RolPermisosNullableScalarRelationFilter, RolPermisosWhereInput> | null
  }, "id">

  export type PermisosOrderByWithAggregationInput = {
    id?: SortOrder
    idRolPermiso?: SortOrderInput | SortOrder
    nombre?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    _count?: PermisosCountOrderByAggregateInput
    _avg?: PermisosAvgOrderByAggregateInput
    _max?: PermisosMaxOrderByAggregateInput
    _min?: PermisosMinOrderByAggregateInput
    _sum?: PermisosSumOrderByAggregateInput
  }

  export type PermisosScalarWhereWithAggregatesInput = {
    AND?: PermisosScalarWhereWithAggregatesInput | PermisosScalarWhereWithAggregatesInput[]
    OR?: PermisosScalarWhereWithAggregatesInput[]
    NOT?: PermisosScalarWhereWithAggregatesInput | PermisosScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Permisos"> | number
    idRolPermiso?: IntNullableWithAggregatesFilter<"Permisos"> | number | null
    nombre?: StringNullableWithAggregatesFilter<"Permisos"> | string | null
    status?: BoolNullableWithAggregatesFilter<"Permisos"> | boolean | null
  }

  export type PrestamosWhereInput = {
    AND?: PrestamosWhereInput | PrestamosWhereInput[]
    OR?: PrestamosWhereInput[]
    NOT?: PrestamosWhereInput | PrestamosWhereInput[]
    id?: IntFilter<"Prestamos"> | number
    idCliente?: IntNullableFilter<"Prestamos"> | number | null
    idUsuario?: IntNullableFilter<"Prestamos"> | number | null
    monto?: FloatNullableFilter<"Prestamos"> | number | null
    fechaInicio?: DateTimeNullableFilter<"Prestamos"> | Date | string | null
    intervaloPago?: DateTimeNullableFilter<"Prestamos"> | Date | string | null
    pagoMinimo?: FloatNullableFilter<"Prestamos"> | number | null
    fechaFin?: DateTimeNullableFilter<"Prestamos"> | Date | string | null
    tasa?: FloatNullableFilter<"Prestamos"> | number | null
    status?: BoolNullableFilter<"Prestamos"> | boolean | null
    cliente?: XOR<ClientesNullableScalarRelationFilter, ClientesWhereInput> | null
    usuario?: XOR<UsuariosNullableScalarRelationFilter, UsuariosWhereInput> | null
    contratos?: ContratosListRelationFilter
    pagos?: PagosListRelationFilter
  }

  export type PrestamosOrderByWithRelationInput = {
    id?: SortOrder
    idCliente?: SortOrderInput | SortOrder
    idUsuario?: SortOrderInput | SortOrder
    monto?: SortOrderInput | SortOrder
    fechaInicio?: SortOrderInput | SortOrder
    intervaloPago?: SortOrderInput | SortOrder
    pagoMinimo?: SortOrderInput | SortOrder
    fechaFin?: SortOrderInput | SortOrder
    tasa?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    cliente?: ClientesOrderByWithRelationInput
    usuario?: UsuariosOrderByWithRelationInput
    contratos?: ContratosOrderByRelationAggregateInput
    pagos?: PagosOrderByRelationAggregateInput
  }

  export type PrestamosWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PrestamosWhereInput | PrestamosWhereInput[]
    OR?: PrestamosWhereInput[]
    NOT?: PrestamosWhereInput | PrestamosWhereInput[]
    idCliente?: IntNullableFilter<"Prestamos"> | number | null
    idUsuario?: IntNullableFilter<"Prestamos"> | number | null
    monto?: FloatNullableFilter<"Prestamos"> | number | null
    fechaInicio?: DateTimeNullableFilter<"Prestamos"> | Date | string | null
    intervaloPago?: DateTimeNullableFilter<"Prestamos"> | Date | string | null
    pagoMinimo?: FloatNullableFilter<"Prestamos"> | number | null
    fechaFin?: DateTimeNullableFilter<"Prestamos"> | Date | string | null
    tasa?: FloatNullableFilter<"Prestamos"> | number | null
    status?: BoolNullableFilter<"Prestamos"> | boolean | null
    cliente?: XOR<ClientesNullableScalarRelationFilter, ClientesWhereInput> | null
    usuario?: XOR<UsuariosNullableScalarRelationFilter, UsuariosWhereInput> | null
    contratos?: ContratosListRelationFilter
    pagos?: PagosListRelationFilter
  }, "id">

  export type PrestamosOrderByWithAggregationInput = {
    id?: SortOrder
    idCliente?: SortOrderInput | SortOrder
    idUsuario?: SortOrderInput | SortOrder
    monto?: SortOrderInput | SortOrder
    fechaInicio?: SortOrderInput | SortOrder
    intervaloPago?: SortOrderInput | SortOrder
    pagoMinimo?: SortOrderInput | SortOrder
    fechaFin?: SortOrderInput | SortOrder
    tasa?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    _count?: PrestamosCountOrderByAggregateInput
    _avg?: PrestamosAvgOrderByAggregateInput
    _max?: PrestamosMaxOrderByAggregateInput
    _min?: PrestamosMinOrderByAggregateInput
    _sum?: PrestamosSumOrderByAggregateInput
  }

  export type PrestamosScalarWhereWithAggregatesInput = {
    AND?: PrestamosScalarWhereWithAggregatesInput | PrestamosScalarWhereWithAggregatesInput[]
    OR?: PrestamosScalarWhereWithAggregatesInput[]
    NOT?: PrestamosScalarWhereWithAggregatesInput | PrestamosScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Prestamos"> | number
    idCliente?: IntNullableWithAggregatesFilter<"Prestamos"> | number | null
    idUsuario?: IntNullableWithAggregatesFilter<"Prestamos"> | number | null
    monto?: FloatNullableWithAggregatesFilter<"Prestamos"> | number | null
    fechaInicio?: DateTimeNullableWithAggregatesFilter<"Prestamos"> | Date | string | null
    intervaloPago?: DateTimeNullableWithAggregatesFilter<"Prestamos"> | Date | string | null
    pagoMinimo?: FloatNullableWithAggregatesFilter<"Prestamos"> | number | null
    fechaFin?: DateTimeNullableWithAggregatesFilter<"Prestamos"> | Date | string | null
    tasa?: FloatNullableWithAggregatesFilter<"Prestamos"> | number | null
    status?: BoolNullableWithAggregatesFilter<"Prestamos"> | boolean | null
  }

  export type RolesWhereInput = {
    AND?: RolesWhereInput | RolesWhereInput[]
    OR?: RolesWhereInput[]
    NOT?: RolesWhereInput | RolesWhereInput[]
    id?: IntFilter<"Roles"> | number
    idRolUsuario?: IntNullableFilter<"Roles"> | number | null
    nombre?: StringNullableFilter<"Roles"> | string | null
    status?: StringNullableFilter<"Roles"> | string | null
    rolUsuario?: XOR<RolUsuarioNullableScalarRelationFilter, RolUsuarioWhereInput> | null
    rolPermisos?: RolPermisosListRelationFilter
  }

  export type RolesOrderByWithRelationInput = {
    id?: SortOrder
    idRolUsuario?: SortOrderInput | SortOrder
    nombre?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    rolUsuario?: RolUsuarioOrderByWithRelationInput
    rolPermisos?: RolPermisosOrderByRelationAggregateInput
  }

  export type RolesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RolesWhereInput | RolesWhereInput[]
    OR?: RolesWhereInput[]
    NOT?: RolesWhereInput | RolesWhereInput[]
    idRolUsuario?: IntNullableFilter<"Roles"> | number | null
    nombre?: StringNullableFilter<"Roles"> | string | null
    status?: StringNullableFilter<"Roles"> | string | null
    rolUsuario?: XOR<RolUsuarioNullableScalarRelationFilter, RolUsuarioWhereInput> | null
    rolPermisos?: RolPermisosListRelationFilter
  }, "id">

  export type RolesOrderByWithAggregationInput = {
    id?: SortOrder
    idRolUsuario?: SortOrderInput | SortOrder
    nombre?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    _count?: RolesCountOrderByAggregateInput
    _avg?: RolesAvgOrderByAggregateInput
    _max?: RolesMaxOrderByAggregateInput
    _min?: RolesMinOrderByAggregateInput
    _sum?: RolesSumOrderByAggregateInput
  }

  export type RolesScalarWhereWithAggregatesInput = {
    AND?: RolesScalarWhereWithAggregatesInput | RolesScalarWhereWithAggregatesInput[]
    OR?: RolesScalarWhereWithAggregatesInput[]
    NOT?: RolesScalarWhereWithAggregatesInput | RolesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Roles"> | number
    idRolUsuario?: IntNullableWithAggregatesFilter<"Roles"> | number | null
    nombre?: StringNullableWithAggregatesFilter<"Roles"> | string | null
    status?: StringNullableWithAggregatesFilter<"Roles"> | string | null
  }

  export type RolPermisosWhereInput = {
    AND?: RolPermisosWhereInput | RolPermisosWhereInput[]
    OR?: RolPermisosWhereInput[]
    NOT?: RolPermisosWhereInput | RolPermisosWhereInput[]
    id?: IntFilter<"RolPermisos"> | number
    idRol?: IntNullableFilter<"RolPermisos"> | number | null
    status?: StringNullableFilter<"RolPermisos"> | string | null
    rol?: XOR<RolesNullableScalarRelationFilter, RolesWhereInput> | null
    permisos?: PermisosListRelationFilter
  }

  export type RolPermisosOrderByWithRelationInput = {
    id?: SortOrder
    idRol?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    rol?: RolesOrderByWithRelationInput
    permisos?: PermisosOrderByRelationAggregateInput
  }

  export type RolPermisosWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RolPermisosWhereInput | RolPermisosWhereInput[]
    OR?: RolPermisosWhereInput[]
    NOT?: RolPermisosWhereInput | RolPermisosWhereInput[]
    idRol?: IntNullableFilter<"RolPermisos"> | number | null
    status?: StringNullableFilter<"RolPermisos"> | string | null
    rol?: XOR<RolesNullableScalarRelationFilter, RolesWhereInput> | null
    permisos?: PermisosListRelationFilter
  }, "id">

  export type RolPermisosOrderByWithAggregationInput = {
    id?: SortOrder
    idRol?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    _count?: RolPermisosCountOrderByAggregateInput
    _avg?: RolPermisosAvgOrderByAggregateInput
    _max?: RolPermisosMaxOrderByAggregateInput
    _min?: RolPermisosMinOrderByAggregateInput
    _sum?: RolPermisosSumOrderByAggregateInput
  }

  export type RolPermisosScalarWhereWithAggregatesInput = {
    AND?: RolPermisosScalarWhereWithAggregatesInput | RolPermisosScalarWhereWithAggregatesInput[]
    OR?: RolPermisosScalarWhereWithAggregatesInput[]
    NOT?: RolPermisosScalarWhereWithAggregatesInput | RolPermisosScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"RolPermisos"> | number
    idRol?: IntNullableWithAggregatesFilter<"RolPermisos"> | number | null
    status?: StringNullableWithAggregatesFilter<"RolPermisos"> | string | null
  }

  export type RolUsuarioWhereInput = {
    AND?: RolUsuarioWhereInput | RolUsuarioWhereInput[]
    OR?: RolUsuarioWhereInput[]
    NOT?: RolUsuarioWhereInput | RolUsuarioWhereInput[]
    id?: IntFilter<"RolUsuario"> | number
    idUsuario?: IntNullableFilter<"RolUsuario"> | number | null
    status?: BoolNullableFilter<"RolUsuario"> | boolean | null
    usuario?: XOR<UsuariosNullableScalarRelationFilter, UsuariosWhereInput> | null
    roles?: RolesListRelationFilter
  }

  export type RolUsuarioOrderByWithRelationInput = {
    id?: SortOrder
    idUsuario?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    usuario?: UsuariosOrderByWithRelationInput
    roles?: RolesOrderByRelationAggregateInput
  }

  export type RolUsuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RolUsuarioWhereInput | RolUsuarioWhereInput[]
    OR?: RolUsuarioWhereInput[]
    NOT?: RolUsuarioWhereInput | RolUsuarioWhereInput[]
    idUsuario?: IntNullableFilter<"RolUsuario"> | number | null
    status?: BoolNullableFilter<"RolUsuario"> | boolean | null
    usuario?: XOR<UsuariosNullableScalarRelationFilter, UsuariosWhereInput> | null
    roles?: RolesListRelationFilter
  }, "id">

  export type RolUsuarioOrderByWithAggregationInput = {
    id?: SortOrder
    idUsuario?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    _count?: RolUsuarioCountOrderByAggregateInput
    _avg?: RolUsuarioAvgOrderByAggregateInput
    _max?: RolUsuarioMaxOrderByAggregateInput
    _min?: RolUsuarioMinOrderByAggregateInput
    _sum?: RolUsuarioSumOrderByAggregateInput
  }

  export type RolUsuarioScalarWhereWithAggregatesInput = {
    AND?: RolUsuarioScalarWhereWithAggregatesInput | RolUsuarioScalarWhereWithAggregatesInput[]
    OR?: RolUsuarioScalarWhereWithAggregatesInput[]
    NOT?: RolUsuarioScalarWhereWithAggregatesInput | RolUsuarioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"RolUsuario"> | number
    idUsuario?: IntNullableWithAggregatesFilter<"RolUsuario"> | number | null
    status?: BoolNullableWithAggregatesFilter<"RolUsuario"> | boolean | null
  }

  export type UsuariosWhereInput = {
    AND?: UsuariosWhereInput | UsuariosWhereInput[]
    OR?: UsuariosWhereInput[]
    NOT?: UsuariosWhereInput | UsuariosWhereInput[]
    id?: IntFilter<"Usuarios"> | number
    nombre?: StringNullableFilter<"Usuarios"> | string | null
    contrasena?: StringNullableFilter<"Usuarios"> | string | null
    password?: StringNullableFilter<"Usuarios"> | string | null
    correo?: StringNullableFilter<"Usuarios"> | string | null
    fechaCreacion?: DateTimeNullableFilter<"Usuarios"> | Date | string | null
    fechaActualizacion?: DateTimeNullableFilter<"Usuarios"> | Date | string | null
    estatus?: BoolNullableFilter<"Usuarios"> | boolean | null
    clientes?: ClientesListRelationFilter
    prestamos?: PrestamosListRelationFilter
    rolUsuario?: RolUsuarioListRelationFilter
  }

  export type UsuariosOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrderInput | SortOrder
    contrasena?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    correo?: SortOrderInput | SortOrder
    fechaCreacion?: SortOrderInput | SortOrder
    fechaActualizacion?: SortOrderInput | SortOrder
    estatus?: SortOrderInput | SortOrder
    clientes?: ClientesOrderByRelationAggregateInput
    prestamos?: PrestamosOrderByRelationAggregateInput
    rolUsuario?: RolUsuarioOrderByRelationAggregateInput
  }

  export type UsuariosWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: UsuariosWhereInput | UsuariosWhereInput[]
    OR?: UsuariosWhereInput[]
    NOT?: UsuariosWhereInput | UsuariosWhereInput[]
    nombre?: StringNullableFilter<"Usuarios"> | string | null
    contrasena?: StringNullableFilter<"Usuarios"> | string | null
    password?: StringNullableFilter<"Usuarios"> | string | null
    correo?: StringNullableFilter<"Usuarios"> | string | null
    fechaCreacion?: DateTimeNullableFilter<"Usuarios"> | Date | string | null
    fechaActualizacion?: DateTimeNullableFilter<"Usuarios"> | Date | string | null
    estatus?: BoolNullableFilter<"Usuarios"> | boolean | null
    clientes?: ClientesListRelationFilter
    prestamos?: PrestamosListRelationFilter
    rolUsuario?: RolUsuarioListRelationFilter
  }, "id">

  export type UsuariosOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrderInput | SortOrder
    contrasena?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    correo?: SortOrderInput | SortOrder
    fechaCreacion?: SortOrderInput | SortOrder
    fechaActualizacion?: SortOrderInput | SortOrder
    estatus?: SortOrderInput | SortOrder
    _count?: UsuariosCountOrderByAggregateInput
    _avg?: UsuariosAvgOrderByAggregateInput
    _max?: UsuariosMaxOrderByAggregateInput
    _min?: UsuariosMinOrderByAggregateInput
    _sum?: UsuariosSumOrderByAggregateInput
  }

  export type UsuariosScalarWhereWithAggregatesInput = {
    AND?: UsuariosScalarWhereWithAggregatesInput | UsuariosScalarWhereWithAggregatesInput[]
    OR?: UsuariosScalarWhereWithAggregatesInput[]
    NOT?: UsuariosScalarWhereWithAggregatesInput | UsuariosScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Usuarios"> | number
    nombre?: StringNullableWithAggregatesFilter<"Usuarios"> | string | null
    contrasena?: StringNullableWithAggregatesFilter<"Usuarios"> | string | null
    password?: StringNullableWithAggregatesFilter<"Usuarios"> | string | null
    correo?: StringNullableWithAggregatesFilter<"Usuarios"> | string | null
    fechaCreacion?: DateTimeNullableWithAggregatesFilter<"Usuarios"> | Date | string | null
    fechaActualizacion?: DateTimeNullableWithAggregatesFilter<"Usuarios"> | Date | string | null
    estatus?: BoolNullableWithAggregatesFilter<"Usuarios"> | boolean | null
  }

  export type CiudadesCreateInput = {
    id: number
    nombre?: string | null
    municipio?: MunicipiosCreateNestedOneWithoutCiudadesInput
    localidades?: LocalidadesCreateNestedManyWithoutCiudadInput
  }

  export type CiudadesUncheckedCreateInput = {
    id: number
    idMunicipio?: number | null
    nombre?: string | null
    localidades?: LocalidadesUncheckedCreateNestedManyWithoutCiudadInput
  }

  export type CiudadesUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    municipio?: MunicipiosUpdateOneWithoutCiudadesNestedInput
    localidades?: LocalidadesUpdateManyWithoutCiudadNestedInput
  }

  export type CiudadesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    idMunicipio?: NullableIntFieldUpdateOperationsInput | number | null
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    localidades?: LocalidadesUncheckedUpdateManyWithoutCiudadNestedInput
  }

  export type CiudadesCreateManyInput = {
    id: number
    idMunicipio?: number | null
    nombre?: string | null
  }

  export type CiudadesUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CiudadesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    idMunicipio?: NullableIntFieldUpdateOperationsInput | number | null
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ClientesCreateInput = {
    id: number
    nombre?: string | null
    apellidoPaterno?: string | null
    apellidoMaterno?: string | null
    rfc?: string | null
    ine?: string | null
    comprobanteDomicilio?: string | null
    curp?: string | null
    fechaNacimiento?: Date | string | null
    estatus?: boolean | null
    direccion?: DireccionesCreateNestedOneWithoutClientesInput
    usuario?: UsuariosCreateNestedOneWithoutClientesInput
    prestamos?: PrestamosCreateNestedManyWithoutClienteInput
  }

  export type ClientesUncheckedCreateInput = {
    id: number
    idDireccion?: number | null
    idUsuario?: number | null
    nombre?: string | null
    apellidoPaterno?: string | null
    apellidoMaterno?: string | null
    rfc?: string | null
    ine?: string | null
    comprobanteDomicilio?: string | null
    curp?: string | null
    fechaNacimiento?: Date | string | null
    estatus?: boolean | null
    prestamos?: PrestamosUncheckedCreateNestedManyWithoutClienteInput
  }

  export type ClientesUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    apellidoPaterno?: NullableStringFieldUpdateOperationsInput | string | null
    apellidoMaterno?: NullableStringFieldUpdateOperationsInput | string | null
    rfc?: NullableStringFieldUpdateOperationsInput | string | null
    ine?: NullableStringFieldUpdateOperationsInput | string | null
    comprobanteDomicilio?: NullableStringFieldUpdateOperationsInput | string | null
    curp?: NullableStringFieldUpdateOperationsInput | string | null
    fechaNacimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estatus?: NullableBoolFieldUpdateOperationsInput | boolean | null
    direccion?: DireccionesUpdateOneWithoutClientesNestedInput
    usuario?: UsuariosUpdateOneWithoutClientesNestedInput
    prestamos?: PrestamosUpdateManyWithoutClienteNestedInput
  }

  export type ClientesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    idDireccion?: NullableIntFieldUpdateOperationsInput | number | null
    idUsuario?: NullableIntFieldUpdateOperationsInput | number | null
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    apellidoPaterno?: NullableStringFieldUpdateOperationsInput | string | null
    apellidoMaterno?: NullableStringFieldUpdateOperationsInput | string | null
    rfc?: NullableStringFieldUpdateOperationsInput | string | null
    ine?: NullableStringFieldUpdateOperationsInput | string | null
    comprobanteDomicilio?: NullableStringFieldUpdateOperationsInput | string | null
    curp?: NullableStringFieldUpdateOperationsInput | string | null
    fechaNacimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estatus?: NullableBoolFieldUpdateOperationsInput | boolean | null
    prestamos?: PrestamosUncheckedUpdateManyWithoutClienteNestedInput
  }

  export type ClientesCreateManyInput = {
    id: number
    idDireccion?: number | null
    idUsuario?: number | null
    nombre?: string | null
    apellidoPaterno?: string | null
    apellidoMaterno?: string | null
    rfc?: string | null
    ine?: string | null
    comprobanteDomicilio?: string | null
    curp?: string | null
    fechaNacimiento?: Date | string | null
    estatus?: boolean | null
  }

  export type ClientesUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    apellidoPaterno?: NullableStringFieldUpdateOperationsInput | string | null
    apellidoMaterno?: NullableStringFieldUpdateOperationsInput | string | null
    rfc?: NullableStringFieldUpdateOperationsInput | string | null
    ine?: NullableStringFieldUpdateOperationsInput | string | null
    comprobanteDomicilio?: NullableStringFieldUpdateOperationsInput | string | null
    curp?: NullableStringFieldUpdateOperationsInput | string | null
    fechaNacimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estatus?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type ClientesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    idDireccion?: NullableIntFieldUpdateOperationsInput | number | null
    idUsuario?: NullableIntFieldUpdateOperationsInput | number | null
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    apellidoPaterno?: NullableStringFieldUpdateOperationsInput | string | null
    apellidoMaterno?: NullableStringFieldUpdateOperationsInput | string | null
    rfc?: NullableStringFieldUpdateOperationsInput | string | null
    ine?: NullableStringFieldUpdateOperationsInput | string | null
    comprobanteDomicilio?: NullableStringFieldUpdateOperationsInput | string | null
    curp?: NullableStringFieldUpdateOperationsInput | string | null
    fechaNacimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estatus?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type ContratosCreateInput = {
    id: number
    url?: string | null
    status?: boolean | null
    prestamo?: PrestamosCreateNestedOneWithoutContratosInput
  }

  export type ContratosUncheckedCreateInput = {
    id: number
    idPrestamos?: number | null
    url?: string | null
    status?: boolean | null
  }

  export type ContratosUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    prestamo?: PrestamosUpdateOneWithoutContratosNestedInput
  }

  export type ContratosUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    idPrestamos?: NullableIntFieldUpdateOperationsInput | number | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type ContratosCreateManyInput = {
    id: number
    idPrestamos?: number | null
    url?: string | null
    status?: boolean | null
  }

  export type ContratosUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type ContratosUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    idPrestamos?: NullableIntFieldUpdateOperationsInput | number | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type DireccionesCreateInput = {
    id: number
    caller?: string | null
    codigoPostal?: string | null
    numeroExterior?: string | null
    numeroInterior?: string | null
    localidad?: LocalidadesCreateNestedOneWithoutDireccionesInput
    clientes?: ClientesCreateNestedManyWithoutDireccionInput
  }

  export type DireccionesUncheckedCreateInput = {
    id: number
    idLocalidad?: number | null
    caller?: string | null
    codigoPostal?: string | null
    numeroExterior?: string | null
    numeroInterior?: string | null
    clientes?: ClientesUncheckedCreateNestedManyWithoutDireccionInput
  }

  export type DireccionesUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    caller?: NullableStringFieldUpdateOperationsInput | string | null
    codigoPostal?: NullableStringFieldUpdateOperationsInput | string | null
    numeroExterior?: NullableStringFieldUpdateOperationsInput | string | null
    numeroInterior?: NullableStringFieldUpdateOperationsInput | string | null
    localidad?: LocalidadesUpdateOneWithoutDireccionesNestedInput
    clientes?: ClientesUpdateManyWithoutDireccionNestedInput
  }

  export type DireccionesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    idLocalidad?: NullableIntFieldUpdateOperationsInput | number | null
    caller?: NullableStringFieldUpdateOperationsInput | string | null
    codigoPostal?: NullableStringFieldUpdateOperationsInput | string | null
    numeroExterior?: NullableStringFieldUpdateOperationsInput | string | null
    numeroInterior?: NullableStringFieldUpdateOperationsInput | string | null
    clientes?: ClientesUncheckedUpdateManyWithoutDireccionNestedInput
  }

  export type DireccionesCreateManyInput = {
    id: number
    idLocalidad?: number | null
    caller?: string | null
    codigoPostal?: string | null
    numeroExterior?: string | null
    numeroInterior?: string | null
  }

  export type DireccionesUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    caller?: NullableStringFieldUpdateOperationsInput | string | null
    codigoPostal?: NullableStringFieldUpdateOperationsInput | string | null
    numeroExterior?: NullableStringFieldUpdateOperationsInput | string | null
    numeroInterior?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DireccionesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    idLocalidad?: NullableIntFieldUpdateOperationsInput | number | null
    caller?: NullableStringFieldUpdateOperationsInput | string | null
    codigoPostal?: NullableStringFieldUpdateOperationsInput | string | null
    numeroExterior?: NullableStringFieldUpdateOperationsInput | string | null
    numeroInterior?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EstadosCreateInput = {
    id: number
    nombre?: string | null
    municipios?: MunicipiosCreateNestedManyWithoutEstadoInput
  }

  export type EstadosUncheckedCreateInput = {
    id: number
    nombre?: string | null
    municipios?: MunicipiosUncheckedCreateNestedManyWithoutEstadoInput
  }

  export type EstadosUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    municipios?: MunicipiosUpdateManyWithoutEstadoNestedInput
  }

  export type EstadosUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    municipios?: MunicipiosUncheckedUpdateManyWithoutEstadoNestedInput
  }

  export type EstadosCreateManyInput = {
    id: number
    nombre?: string | null
  }

  export type EstadosUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EstadosUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LocalidadesCreateInput = {
    id: number
    nombre?: string | null
    ciudad?: CiudadesCreateNestedOneWithoutLocalidadesInput
    direcciones?: DireccionesCreateNestedManyWithoutLocalidadInput
  }

  export type LocalidadesUncheckedCreateInput = {
    id: number
    idCiudad?: number | null
    nombre?: string | null
    direcciones?: DireccionesUncheckedCreateNestedManyWithoutLocalidadInput
  }

  export type LocalidadesUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    ciudad?: CiudadesUpdateOneWithoutLocalidadesNestedInput
    direcciones?: DireccionesUpdateManyWithoutLocalidadNestedInput
  }

  export type LocalidadesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    idCiudad?: NullableIntFieldUpdateOperationsInput | number | null
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    direcciones?: DireccionesUncheckedUpdateManyWithoutLocalidadNestedInput
  }

  export type LocalidadesCreateManyInput = {
    id: number
    idCiudad?: number | null
    nombre?: string | null
  }

  export type LocalidadesUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LocalidadesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    idCiudad?: NullableIntFieldUpdateOperationsInput | number | null
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MetodoPagoCreateInput = {
    id: number
    nombre?: string | null
    status?: boolean | null
    pagos?: PagosCreateNestedManyWithoutMetodoPagoInput
  }

  export type MetodoPagoUncheckedCreateInput = {
    id: number
    nombre?: string | null
    status?: boolean | null
    pagos?: PagosUncheckedCreateNestedManyWithoutMetodoPagoInput
  }

  export type MetodoPagoUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    pagos?: PagosUpdateManyWithoutMetodoPagoNestedInput
  }

  export type MetodoPagoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    pagos?: PagosUncheckedUpdateManyWithoutMetodoPagoNestedInput
  }

  export type MetodoPagoCreateManyInput = {
    id: number
    nombre?: string | null
    status?: boolean | null
  }

  export type MetodoPagoUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type MetodoPagoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type MunicipiosCreateInput = {
    id: number
    nombre?: string | null
    estado?: EstadosCreateNestedOneWithoutMunicipiosInput
    ciudades?: CiudadesCreateNestedManyWithoutMunicipioInput
  }

  export type MunicipiosUncheckedCreateInput = {
    id: number
    idEstado?: number | null
    nombre?: string | null
    ciudades?: CiudadesUncheckedCreateNestedManyWithoutMunicipioInput
  }

  export type MunicipiosUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: EstadosUpdateOneWithoutMunicipiosNestedInput
    ciudades?: CiudadesUpdateManyWithoutMunicipioNestedInput
  }

  export type MunicipiosUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    idEstado?: NullableIntFieldUpdateOperationsInput | number | null
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    ciudades?: CiudadesUncheckedUpdateManyWithoutMunicipioNestedInput
  }

  export type MunicipiosCreateManyInput = {
    id: number
    idEstado?: number | null
    nombre?: string | null
  }

  export type MunicipiosUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MunicipiosUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    idEstado?: NullableIntFieldUpdateOperationsInput | number | null
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PagosCreateInput = {
    id: number
    monto?: number | null
    fechaPago?: Date | string | null
    status?: boolean | null
    prestamo?: PrestamosCreateNestedOneWithoutPagosInput
    metodoPago?: MetodoPagoCreateNestedOneWithoutPagosInput
  }

  export type PagosUncheckedCreateInput = {
    id: number
    idPrestamos?: number | null
    idMetodoPago?: number | null
    monto?: number | null
    fechaPago?: Date | string | null
    status?: boolean | null
  }

  export type PagosUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    monto?: NullableFloatFieldUpdateOperationsInput | number | null
    fechaPago?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    prestamo?: PrestamosUpdateOneWithoutPagosNestedInput
    metodoPago?: MetodoPagoUpdateOneWithoutPagosNestedInput
  }

  export type PagosUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    idPrestamos?: NullableIntFieldUpdateOperationsInput | number | null
    idMetodoPago?: NullableIntFieldUpdateOperationsInput | number | null
    monto?: NullableFloatFieldUpdateOperationsInput | number | null
    fechaPago?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type PagosCreateManyInput = {
    id: number
    idPrestamos?: number | null
    idMetodoPago?: number | null
    monto?: number | null
    fechaPago?: Date | string | null
    status?: boolean | null
  }

  export type PagosUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    monto?: NullableFloatFieldUpdateOperationsInput | number | null
    fechaPago?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type PagosUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    idPrestamos?: NullableIntFieldUpdateOperationsInput | number | null
    idMetodoPago?: NullableIntFieldUpdateOperationsInput | number | null
    monto?: NullableFloatFieldUpdateOperationsInput | number | null
    fechaPago?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type PermisosCreateInput = {
    id: number
    nombre?: string | null
    status?: boolean | null
    rolPermiso?: RolPermisosCreateNestedOneWithoutPermisosInput
  }

  export type PermisosUncheckedCreateInput = {
    id: number
    idRolPermiso?: number | null
    nombre?: string | null
    status?: boolean | null
  }

  export type PermisosUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    rolPermiso?: RolPermisosUpdateOneWithoutPermisosNestedInput
  }

  export type PermisosUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    idRolPermiso?: NullableIntFieldUpdateOperationsInput | number | null
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type PermisosCreateManyInput = {
    id: number
    idRolPermiso?: number | null
    nombre?: string | null
    status?: boolean | null
  }

  export type PermisosUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type PermisosUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    idRolPermiso?: NullableIntFieldUpdateOperationsInput | number | null
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type PrestamosCreateInput = {
    id: number
    monto?: number | null
    fechaInicio?: Date | string | null
    intervaloPago?: Date | string | null
    pagoMinimo?: number | null
    fechaFin?: Date | string | null
    tasa?: number | null
    status?: boolean | null
    cliente?: ClientesCreateNestedOneWithoutPrestamosInput
    usuario?: UsuariosCreateNestedOneWithoutPrestamosInput
    contratos?: ContratosCreateNestedManyWithoutPrestamoInput
    pagos?: PagosCreateNestedManyWithoutPrestamoInput
  }

  export type PrestamosUncheckedCreateInput = {
    id: number
    idCliente?: number | null
    idUsuario?: number | null
    monto?: number | null
    fechaInicio?: Date | string | null
    intervaloPago?: Date | string | null
    pagoMinimo?: number | null
    fechaFin?: Date | string | null
    tasa?: number | null
    status?: boolean | null
    contratos?: ContratosUncheckedCreateNestedManyWithoutPrestamoInput
    pagos?: PagosUncheckedCreateNestedManyWithoutPrestamoInput
  }

  export type PrestamosUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    monto?: NullableFloatFieldUpdateOperationsInput | number | null
    fechaInicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    intervaloPago?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pagoMinimo?: NullableFloatFieldUpdateOperationsInput | number | null
    fechaFin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tasa?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    cliente?: ClientesUpdateOneWithoutPrestamosNestedInput
    usuario?: UsuariosUpdateOneWithoutPrestamosNestedInput
    contratos?: ContratosUpdateManyWithoutPrestamoNestedInput
    pagos?: PagosUpdateManyWithoutPrestamoNestedInput
  }

  export type PrestamosUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    idCliente?: NullableIntFieldUpdateOperationsInput | number | null
    idUsuario?: NullableIntFieldUpdateOperationsInput | number | null
    monto?: NullableFloatFieldUpdateOperationsInput | number | null
    fechaInicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    intervaloPago?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pagoMinimo?: NullableFloatFieldUpdateOperationsInput | number | null
    fechaFin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tasa?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    contratos?: ContratosUncheckedUpdateManyWithoutPrestamoNestedInput
    pagos?: PagosUncheckedUpdateManyWithoutPrestamoNestedInput
  }

  export type PrestamosCreateManyInput = {
    id: number
    idCliente?: number | null
    idUsuario?: number | null
    monto?: number | null
    fechaInicio?: Date | string | null
    intervaloPago?: Date | string | null
    pagoMinimo?: number | null
    fechaFin?: Date | string | null
    tasa?: number | null
    status?: boolean | null
  }

  export type PrestamosUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    monto?: NullableFloatFieldUpdateOperationsInput | number | null
    fechaInicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    intervaloPago?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pagoMinimo?: NullableFloatFieldUpdateOperationsInput | number | null
    fechaFin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tasa?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type PrestamosUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    idCliente?: NullableIntFieldUpdateOperationsInput | number | null
    idUsuario?: NullableIntFieldUpdateOperationsInput | number | null
    monto?: NullableFloatFieldUpdateOperationsInput | number | null
    fechaInicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    intervaloPago?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pagoMinimo?: NullableFloatFieldUpdateOperationsInput | number | null
    fechaFin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tasa?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type RolesCreateInput = {
    id: number
    nombre?: string | null
    status?: string | null
    rolUsuario?: RolUsuarioCreateNestedOneWithoutRolesInput
    rolPermisos?: RolPermisosCreateNestedManyWithoutRolInput
  }

  export type RolesUncheckedCreateInput = {
    id: number
    idRolUsuario?: number | null
    nombre?: string | null
    status?: string | null
    rolPermisos?: RolPermisosUncheckedCreateNestedManyWithoutRolInput
  }

  export type RolesUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    rolUsuario?: RolUsuarioUpdateOneWithoutRolesNestedInput
    rolPermisos?: RolPermisosUpdateManyWithoutRolNestedInput
  }

  export type RolesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    idRolUsuario?: NullableIntFieldUpdateOperationsInput | number | null
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    rolPermisos?: RolPermisosUncheckedUpdateManyWithoutRolNestedInput
  }

  export type RolesCreateManyInput = {
    id: number
    idRolUsuario?: number | null
    nombre?: string | null
    status?: string | null
  }

  export type RolesUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RolesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    idRolUsuario?: NullableIntFieldUpdateOperationsInput | number | null
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RolPermisosCreateInput = {
    id: number
    status?: string | null
    rol?: RolesCreateNestedOneWithoutRolPermisosInput
    permisos?: PermisosCreateNestedManyWithoutRolPermisoInput
  }

  export type RolPermisosUncheckedCreateInput = {
    id: number
    idRol?: number | null
    status?: string | null
    permisos?: PermisosUncheckedCreateNestedManyWithoutRolPermisoInput
  }

  export type RolPermisosUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: NullableStringFieldUpdateOperationsInput | string | null
    rol?: RolesUpdateOneWithoutRolPermisosNestedInput
    permisos?: PermisosUpdateManyWithoutRolPermisoNestedInput
  }

  export type RolPermisosUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    idRol?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    permisos?: PermisosUncheckedUpdateManyWithoutRolPermisoNestedInput
  }

  export type RolPermisosCreateManyInput = {
    id: number
    idRol?: number | null
    status?: string | null
  }

  export type RolPermisosUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RolPermisosUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    idRol?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RolUsuarioCreateInput = {
    id: number
    status?: boolean | null
    usuario?: UsuariosCreateNestedOneWithoutRolUsuarioInput
    roles?: RolesCreateNestedManyWithoutRolUsuarioInput
  }

  export type RolUsuarioUncheckedCreateInput = {
    id: number
    idUsuario?: number | null
    status?: boolean | null
    roles?: RolesUncheckedCreateNestedManyWithoutRolUsuarioInput
  }

  export type RolUsuarioUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    usuario?: UsuariosUpdateOneWithoutRolUsuarioNestedInput
    roles?: RolesUpdateManyWithoutRolUsuarioNestedInput
  }

  export type RolUsuarioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    idUsuario?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    roles?: RolesUncheckedUpdateManyWithoutRolUsuarioNestedInput
  }

  export type RolUsuarioCreateManyInput = {
    id: number
    idUsuario?: number | null
    status?: boolean | null
  }

  export type RolUsuarioUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type RolUsuarioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    idUsuario?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type UsuariosCreateInput = {
    id: number
    nombre?: string | null
    contrasena?: string | null
    password?: string | null
    correo?: string | null
    fechaCreacion?: Date | string | null
    fechaActualizacion?: Date | string | null
    estatus?: boolean | null
    clientes?: ClientesCreateNestedManyWithoutUsuarioInput
    prestamos?: PrestamosCreateNestedManyWithoutUsuarioInput
    rolUsuario?: RolUsuarioCreateNestedManyWithoutUsuarioInput
  }

  export type UsuariosUncheckedCreateInput = {
    id: number
    nombre?: string | null
    contrasena?: string | null
    password?: string | null
    correo?: string | null
    fechaCreacion?: Date | string | null
    fechaActualizacion?: Date | string | null
    estatus?: boolean | null
    clientes?: ClientesUncheckedCreateNestedManyWithoutUsuarioInput
    prestamos?: PrestamosUncheckedCreateNestedManyWithoutUsuarioInput
    rolUsuario?: RolUsuarioUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuariosUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    contrasena?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    fechaCreacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fechaActualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estatus?: NullableBoolFieldUpdateOperationsInput | boolean | null
    clientes?: ClientesUpdateManyWithoutUsuarioNestedInput
    prestamos?: PrestamosUpdateManyWithoutUsuarioNestedInput
    rolUsuario?: RolUsuarioUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuariosUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    contrasena?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    fechaCreacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fechaActualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estatus?: NullableBoolFieldUpdateOperationsInput | boolean | null
    clientes?: ClientesUncheckedUpdateManyWithoutUsuarioNestedInput
    prestamos?: PrestamosUncheckedUpdateManyWithoutUsuarioNestedInput
    rolUsuario?: RolUsuarioUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuariosCreateManyInput = {
    id: number
    nombre?: string | null
    contrasena?: string | null
    password?: string | null
    correo?: string | null
    fechaCreacion?: Date | string | null
    fechaActualizacion?: Date | string | null
    estatus?: boolean | null
  }

  export type UsuariosUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    contrasena?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    fechaCreacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fechaActualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estatus?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type UsuariosUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    contrasena?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    fechaCreacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fechaActualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estatus?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type MunicipiosNullableScalarRelationFilter = {
    is?: MunicipiosWhereInput | null
    isNot?: MunicipiosWhereInput | null
  }

  export type LocalidadesListRelationFilter = {
    every?: LocalidadesWhereInput
    some?: LocalidadesWhereInput
    none?: LocalidadesWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type LocalidadesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CiudadesCountOrderByAggregateInput = {
    id?: SortOrder
    idMunicipio?: SortOrder
    nombre?: SortOrder
  }

  export type CiudadesAvgOrderByAggregateInput = {
    id?: SortOrder
    idMunicipio?: SortOrder
  }

  export type CiudadesMaxOrderByAggregateInput = {
    id?: SortOrder
    idMunicipio?: SortOrder
    nombre?: SortOrder
  }

  export type CiudadesMinOrderByAggregateInput = {
    id?: SortOrder
    idMunicipio?: SortOrder
    nombre?: SortOrder
  }

  export type CiudadesSumOrderByAggregateInput = {
    id?: SortOrder
    idMunicipio?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type DireccionesNullableScalarRelationFilter = {
    is?: DireccionesWhereInput | null
    isNot?: DireccionesWhereInput | null
  }

  export type UsuariosNullableScalarRelationFilter = {
    is?: UsuariosWhereInput | null
    isNot?: UsuariosWhereInput | null
  }

  export type PrestamosListRelationFilter = {
    every?: PrestamosWhereInput
    some?: PrestamosWhereInput
    none?: PrestamosWhereInput
  }

  export type PrestamosOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClientesCountOrderByAggregateInput = {
    id?: SortOrder
    idDireccion?: SortOrder
    idUsuario?: SortOrder
    nombre?: SortOrder
    apellidoPaterno?: SortOrder
    apellidoMaterno?: SortOrder
    rfc?: SortOrder
    ine?: SortOrder
    comprobanteDomicilio?: SortOrder
    curp?: SortOrder
    fechaNacimiento?: SortOrder
    estatus?: SortOrder
  }

  export type ClientesAvgOrderByAggregateInput = {
    id?: SortOrder
    idDireccion?: SortOrder
    idUsuario?: SortOrder
  }

  export type ClientesMaxOrderByAggregateInput = {
    id?: SortOrder
    idDireccion?: SortOrder
    idUsuario?: SortOrder
    nombre?: SortOrder
    apellidoPaterno?: SortOrder
    apellidoMaterno?: SortOrder
    rfc?: SortOrder
    ine?: SortOrder
    comprobanteDomicilio?: SortOrder
    curp?: SortOrder
    fechaNacimiento?: SortOrder
    estatus?: SortOrder
  }

  export type ClientesMinOrderByAggregateInput = {
    id?: SortOrder
    idDireccion?: SortOrder
    idUsuario?: SortOrder
    nombre?: SortOrder
    apellidoPaterno?: SortOrder
    apellidoMaterno?: SortOrder
    rfc?: SortOrder
    ine?: SortOrder
    comprobanteDomicilio?: SortOrder
    curp?: SortOrder
    fechaNacimiento?: SortOrder
    estatus?: SortOrder
  }

  export type ClientesSumOrderByAggregateInput = {
    id?: SortOrder
    idDireccion?: SortOrder
    idUsuario?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type PrestamosNullableScalarRelationFilter = {
    is?: PrestamosWhereInput | null
    isNot?: PrestamosWhereInput | null
  }

  export type ContratosCountOrderByAggregateInput = {
    id?: SortOrder
    idPrestamos?: SortOrder
    url?: SortOrder
    status?: SortOrder
  }

  export type ContratosAvgOrderByAggregateInput = {
    id?: SortOrder
    idPrestamos?: SortOrder
  }

  export type ContratosMaxOrderByAggregateInput = {
    id?: SortOrder
    idPrestamos?: SortOrder
    url?: SortOrder
    status?: SortOrder
  }

  export type ContratosMinOrderByAggregateInput = {
    id?: SortOrder
    idPrestamos?: SortOrder
    url?: SortOrder
    status?: SortOrder
  }

  export type ContratosSumOrderByAggregateInput = {
    id?: SortOrder
    idPrestamos?: SortOrder
  }

  export type LocalidadesNullableScalarRelationFilter = {
    is?: LocalidadesWhereInput | null
    isNot?: LocalidadesWhereInput | null
  }

  export type ClientesListRelationFilter = {
    every?: ClientesWhereInput
    some?: ClientesWhereInput
    none?: ClientesWhereInput
  }

  export type ClientesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DireccionesCountOrderByAggregateInput = {
    id?: SortOrder
    idLocalidad?: SortOrder
    caller?: SortOrder
    codigoPostal?: SortOrder
    numeroExterior?: SortOrder
    numeroInterior?: SortOrder
  }

  export type DireccionesAvgOrderByAggregateInput = {
    id?: SortOrder
    idLocalidad?: SortOrder
  }

  export type DireccionesMaxOrderByAggregateInput = {
    id?: SortOrder
    idLocalidad?: SortOrder
    caller?: SortOrder
    codigoPostal?: SortOrder
    numeroExterior?: SortOrder
    numeroInterior?: SortOrder
  }

  export type DireccionesMinOrderByAggregateInput = {
    id?: SortOrder
    idLocalidad?: SortOrder
    caller?: SortOrder
    codigoPostal?: SortOrder
    numeroExterior?: SortOrder
    numeroInterior?: SortOrder
  }

  export type DireccionesSumOrderByAggregateInput = {
    id?: SortOrder
    idLocalidad?: SortOrder
  }

  export type MunicipiosListRelationFilter = {
    every?: MunicipiosWhereInput
    some?: MunicipiosWhereInput
    none?: MunicipiosWhereInput
  }

  export type MunicipiosOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EstadosCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type EstadosAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EstadosMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type EstadosMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type EstadosSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CiudadesNullableScalarRelationFilter = {
    is?: CiudadesWhereInput | null
    isNot?: CiudadesWhereInput | null
  }

  export type DireccionesListRelationFilter = {
    every?: DireccionesWhereInput
    some?: DireccionesWhereInput
    none?: DireccionesWhereInput
  }

  export type DireccionesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LocalidadesCountOrderByAggregateInput = {
    id?: SortOrder
    idCiudad?: SortOrder
    nombre?: SortOrder
  }

  export type LocalidadesAvgOrderByAggregateInput = {
    id?: SortOrder
    idCiudad?: SortOrder
  }

  export type LocalidadesMaxOrderByAggregateInput = {
    id?: SortOrder
    idCiudad?: SortOrder
    nombre?: SortOrder
  }

  export type LocalidadesMinOrderByAggregateInput = {
    id?: SortOrder
    idCiudad?: SortOrder
    nombre?: SortOrder
  }

  export type LocalidadesSumOrderByAggregateInput = {
    id?: SortOrder
    idCiudad?: SortOrder
  }

  export type PagosListRelationFilter = {
    every?: PagosWhereInput
    some?: PagosWhereInput
    none?: PagosWhereInput
  }

  export type PagosOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MetodoPagoCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    status?: SortOrder
  }

  export type MetodoPagoAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type MetodoPagoMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    status?: SortOrder
  }

  export type MetodoPagoMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    status?: SortOrder
  }

  export type MetodoPagoSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EstadosNullableScalarRelationFilter = {
    is?: EstadosWhereInput | null
    isNot?: EstadosWhereInput | null
  }

  export type CiudadesListRelationFilter = {
    every?: CiudadesWhereInput
    some?: CiudadesWhereInput
    none?: CiudadesWhereInput
  }

  export type CiudadesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MunicipiosCountOrderByAggregateInput = {
    id?: SortOrder
    idEstado?: SortOrder
    nombre?: SortOrder
  }

  export type MunicipiosAvgOrderByAggregateInput = {
    id?: SortOrder
    idEstado?: SortOrder
  }

  export type MunicipiosMaxOrderByAggregateInput = {
    id?: SortOrder
    idEstado?: SortOrder
    nombre?: SortOrder
  }

  export type MunicipiosMinOrderByAggregateInput = {
    id?: SortOrder
    idEstado?: SortOrder
    nombre?: SortOrder
  }

  export type MunicipiosSumOrderByAggregateInput = {
    id?: SortOrder
    idEstado?: SortOrder
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type MetodoPagoNullableScalarRelationFilter = {
    is?: MetodoPagoWhereInput | null
    isNot?: MetodoPagoWhereInput | null
  }

  export type PagosCountOrderByAggregateInput = {
    id?: SortOrder
    idPrestamos?: SortOrder
    idMetodoPago?: SortOrder
    monto?: SortOrder
    fechaPago?: SortOrder
    status?: SortOrder
  }

  export type PagosAvgOrderByAggregateInput = {
    id?: SortOrder
    idPrestamos?: SortOrder
    idMetodoPago?: SortOrder
    monto?: SortOrder
  }

  export type PagosMaxOrderByAggregateInput = {
    id?: SortOrder
    idPrestamos?: SortOrder
    idMetodoPago?: SortOrder
    monto?: SortOrder
    fechaPago?: SortOrder
    status?: SortOrder
  }

  export type PagosMinOrderByAggregateInput = {
    id?: SortOrder
    idPrestamos?: SortOrder
    idMetodoPago?: SortOrder
    monto?: SortOrder
    fechaPago?: SortOrder
    status?: SortOrder
  }

  export type PagosSumOrderByAggregateInput = {
    id?: SortOrder
    idPrestamos?: SortOrder
    idMetodoPago?: SortOrder
    monto?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type RolPermisosNullableScalarRelationFilter = {
    is?: RolPermisosWhereInput | null
    isNot?: RolPermisosWhereInput | null
  }

  export type PermisosCountOrderByAggregateInput = {
    id?: SortOrder
    idRolPermiso?: SortOrder
    nombre?: SortOrder
    status?: SortOrder
  }

  export type PermisosAvgOrderByAggregateInput = {
    id?: SortOrder
    idRolPermiso?: SortOrder
  }

  export type PermisosMaxOrderByAggregateInput = {
    id?: SortOrder
    idRolPermiso?: SortOrder
    nombre?: SortOrder
    status?: SortOrder
  }

  export type PermisosMinOrderByAggregateInput = {
    id?: SortOrder
    idRolPermiso?: SortOrder
    nombre?: SortOrder
    status?: SortOrder
  }

  export type PermisosSumOrderByAggregateInput = {
    id?: SortOrder
    idRolPermiso?: SortOrder
  }

  export type ClientesNullableScalarRelationFilter = {
    is?: ClientesWhereInput | null
    isNot?: ClientesWhereInput | null
  }

  export type ContratosListRelationFilter = {
    every?: ContratosWhereInput
    some?: ContratosWhereInput
    none?: ContratosWhereInput
  }

  export type ContratosOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PrestamosCountOrderByAggregateInput = {
    id?: SortOrder
    idCliente?: SortOrder
    idUsuario?: SortOrder
    monto?: SortOrder
    fechaInicio?: SortOrder
    intervaloPago?: SortOrder
    pagoMinimo?: SortOrder
    fechaFin?: SortOrder
    tasa?: SortOrder
    status?: SortOrder
  }

  export type PrestamosAvgOrderByAggregateInput = {
    id?: SortOrder
    idCliente?: SortOrder
    idUsuario?: SortOrder
    monto?: SortOrder
    pagoMinimo?: SortOrder
    tasa?: SortOrder
  }

  export type PrestamosMaxOrderByAggregateInput = {
    id?: SortOrder
    idCliente?: SortOrder
    idUsuario?: SortOrder
    monto?: SortOrder
    fechaInicio?: SortOrder
    intervaloPago?: SortOrder
    pagoMinimo?: SortOrder
    fechaFin?: SortOrder
    tasa?: SortOrder
    status?: SortOrder
  }

  export type PrestamosMinOrderByAggregateInput = {
    id?: SortOrder
    idCliente?: SortOrder
    idUsuario?: SortOrder
    monto?: SortOrder
    fechaInicio?: SortOrder
    intervaloPago?: SortOrder
    pagoMinimo?: SortOrder
    fechaFin?: SortOrder
    tasa?: SortOrder
    status?: SortOrder
  }

  export type PrestamosSumOrderByAggregateInput = {
    id?: SortOrder
    idCliente?: SortOrder
    idUsuario?: SortOrder
    monto?: SortOrder
    pagoMinimo?: SortOrder
    tasa?: SortOrder
  }

  export type RolUsuarioNullableScalarRelationFilter = {
    is?: RolUsuarioWhereInput | null
    isNot?: RolUsuarioWhereInput | null
  }

  export type RolPermisosListRelationFilter = {
    every?: RolPermisosWhereInput
    some?: RolPermisosWhereInput
    none?: RolPermisosWhereInput
  }

  export type RolPermisosOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RolesCountOrderByAggregateInput = {
    id?: SortOrder
    idRolUsuario?: SortOrder
    nombre?: SortOrder
    status?: SortOrder
  }

  export type RolesAvgOrderByAggregateInput = {
    id?: SortOrder
    idRolUsuario?: SortOrder
  }

  export type RolesMaxOrderByAggregateInput = {
    id?: SortOrder
    idRolUsuario?: SortOrder
    nombre?: SortOrder
    status?: SortOrder
  }

  export type RolesMinOrderByAggregateInput = {
    id?: SortOrder
    idRolUsuario?: SortOrder
    nombre?: SortOrder
    status?: SortOrder
  }

  export type RolesSumOrderByAggregateInput = {
    id?: SortOrder
    idRolUsuario?: SortOrder
  }

  export type RolesNullableScalarRelationFilter = {
    is?: RolesWhereInput | null
    isNot?: RolesWhereInput | null
  }

  export type PermisosListRelationFilter = {
    every?: PermisosWhereInput
    some?: PermisosWhereInput
    none?: PermisosWhereInput
  }

  export type PermisosOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RolPermisosCountOrderByAggregateInput = {
    id?: SortOrder
    idRol?: SortOrder
    status?: SortOrder
  }

  export type RolPermisosAvgOrderByAggregateInput = {
    id?: SortOrder
    idRol?: SortOrder
  }

  export type RolPermisosMaxOrderByAggregateInput = {
    id?: SortOrder
    idRol?: SortOrder
    status?: SortOrder
  }

  export type RolPermisosMinOrderByAggregateInput = {
    id?: SortOrder
    idRol?: SortOrder
    status?: SortOrder
  }

  export type RolPermisosSumOrderByAggregateInput = {
    id?: SortOrder
    idRol?: SortOrder
  }

  export type RolesListRelationFilter = {
    every?: RolesWhereInput
    some?: RolesWhereInput
    none?: RolesWhereInput
  }

  export type RolesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RolUsuarioCountOrderByAggregateInput = {
    id?: SortOrder
    idUsuario?: SortOrder
    status?: SortOrder
  }

  export type RolUsuarioAvgOrderByAggregateInput = {
    id?: SortOrder
    idUsuario?: SortOrder
  }

  export type RolUsuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    idUsuario?: SortOrder
    status?: SortOrder
  }

  export type RolUsuarioMinOrderByAggregateInput = {
    id?: SortOrder
    idUsuario?: SortOrder
    status?: SortOrder
  }

  export type RolUsuarioSumOrderByAggregateInput = {
    id?: SortOrder
    idUsuario?: SortOrder
  }

  export type RolUsuarioListRelationFilter = {
    every?: RolUsuarioWhereInput
    some?: RolUsuarioWhereInput
    none?: RolUsuarioWhereInput
  }

  export type RolUsuarioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsuariosCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    contrasena?: SortOrder
    password?: SortOrder
    correo?: SortOrder
    fechaCreacion?: SortOrder
    fechaActualizacion?: SortOrder
    estatus?: SortOrder
  }

  export type UsuariosAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UsuariosMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    contrasena?: SortOrder
    password?: SortOrder
    correo?: SortOrder
    fechaCreacion?: SortOrder
    fechaActualizacion?: SortOrder
    estatus?: SortOrder
  }

  export type UsuariosMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    contrasena?: SortOrder
    password?: SortOrder
    correo?: SortOrder
    fechaCreacion?: SortOrder
    fechaActualizacion?: SortOrder
    estatus?: SortOrder
  }

  export type UsuariosSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type MunicipiosCreateNestedOneWithoutCiudadesInput = {
    create?: XOR<MunicipiosCreateWithoutCiudadesInput, MunicipiosUncheckedCreateWithoutCiudadesInput>
    connectOrCreate?: MunicipiosCreateOrConnectWithoutCiudadesInput
    connect?: MunicipiosWhereUniqueInput
  }

  export type LocalidadesCreateNestedManyWithoutCiudadInput = {
    create?: XOR<LocalidadesCreateWithoutCiudadInput, LocalidadesUncheckedCreateWithoutCiudadInput> | LocalidadesCreateWithoutCiudadInput[] | LocalidadesUncheckedCreateWithoutCiudadInput[]
    connectOrCreate?: LocalidadesCreateOrConnectWithoutCiudadInput | LocalidadesCreateOrConnectWithoutCiudadInput[]
    createMany?: LocalidadesCreateManyCiudadInputEnvelope
    connect?: LocalidadesWhereUniqueInput | LocalidadesWhereUniqueInput[]
  }

  export type LocalidadesUncheckedCreateNestedManyWithoutCiudadInput = {
    create?: XOR<LocalidadesCreateWithoutCiudadInput, LocalidadesUncheckedCreateWithoutCiudadInput> | LocalidadesCreateWithoutCiudadInput[] | LocalidadesUncheckedCreateWithoutCiudadInput[]
    connectOrCreate?: LocalidadesCreateOrConnectWithoutCiudadInput | LocalidadesCreateOrConnectWithoutCiudadInput[]
    createMany?: LocalidadesCreateManyCiudadInputEnvelope
    connect?: LocalidadesWhereUniqueInput | LocalidadesWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type MunicipiosUpdateOneWithoutCiudadesNestedInput = {
    create?: XOR<MunicipiosCreateWithoutCiudadesInput, MunicipiosUncheckedCreateWithoutCiudadesInput>
    connectOrCreate?: MunicipiosCreateOrConnectWithoutCiudadesInput
    upsert?: MunicipiosUpsertWithoutCiudadesInput
    disconnect?: MunicipiosWhereInput | boolean
    delete?: MunicipiosWhereInput | boolean
    connect?: MunicipiosWhereUniqueInput
    update?: XOR<XOR<MunicipiosUpdateToOneWithWhereWithoutCiudadesInput, MunicipiosUpdateWithoutCiudadesInput>, MunicipiosUncheckedUpdateWithoutCiudadesInput>
  }

  export type LocalidadesUpdateManyWithoutCiudadNestedInput = {
    create?: XOR<LocalidadesCreateWithoutCiudadInput, LocalidadesUncheckedCreateWithoutCiudadInput> | LocalidadesCreateWithoutCiudadInput[] | LocalidadesUncheckedCreateWithoutCiudadInput[]
    connectOrCreate?: LocalidadesCreateOrConnectWithoutCiudadInput | LocalidadesCreateOrConnectWithoutCiudadInput[]
    upsert?: LocalidadesUpsertWithWhereUniqueWithoutCiudadInput | LocalidadesUpsertWithWhereUniqueWithoutCiudadInput[]
    createMany?: LocalidadesCreateManyCiudadInputEnvelope
    set?: LocalidadesWhereUniqueInput | LocalidadesWhereUniqueInput[]
    disconnect?: LocalidadesWhereUniqueInput | LocalidadesWhereUniqueInput[]
    delete?: LocalidadesWhereUniqueInput | LocalidadesWhereUniqueInput[]
    connect?: LocalidadesWhereUniqueInput | LocalidadesWhereUniqueInput[]
    update?: LocalidadesUpdateWithWhereUniqueWithoutCiudadInput | LocalidadesUpdateWithWhereUniqueWithoutCiudadInput[]
    updateMany?: LocalidadesUpdateManyWithWhereWithoutCiudadInput | LocalidadesUpdateManyWithWhereWithoutCiudadInput[]
    deleteMany?: LocalidadesScalarWhereInput | LocalidadesScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type LocalidadesUncheckedUpdateManyWithoutCiudadNestedInput = {
    create?: XOR<LocalidadesCreateWithoutCiudadInput, LocalidadesUncheckedCreateWithoutCiudadInput> | LocalidadesCreateWithoutCiudadInput[] | LocalidadesUncheckedCreateWithoutCiudadInput[]
    connectOrCreate?: LocalidadesCreateOrConnectWithoutCiudadInput | LocalidadesCreateOrConnectWithoutCiudadInput[]
    upsert?: LocalidadesUpsertWithWhereUniqueWithoutCiudadInput | LocalidadesUpsertWithWhereUniqueWithoutCiudadInput[]
    createMany?: LocalidadesCreateManyCiudadInputEnvelope
    set?: LocalidadesWhereUniqueInput | LocalidadesWhereUniqueInput[]
    disconnect?: LocalidadesWhereUniqueInput | LocalidadesWhereUniqueInput[]
    delete?: LocalidadesWhereUniqueInput | LocalidadesWhereUniqueInput[]
    connect?: LocalidadesWhereUniqueInput | LocalidadesWhereUniqueInput[]
    update?: LocalidadesUpdateWithWhereUniqueWithoutCiudadInput | LocalidadesUpdateWithWhereUniqueWithoutCiudadInput[]
    updateMany?: LocalidadesUpdateManyWithWhereWithoutCiudadInput | LocalidadesUpdateManyWithWhereWithoutCiudadInput[]
    deleteMany?: LocalidadesScalarWhereInput | LocalidadesScalarWhereInput[]
  }

  export type DireccionesCreateNestedOneWithoutClientesInput = {
    create?: XOR<DireccionesCreateWithoutClientesInput, DireccionesUncheckedCreateWithoutClientesInput>
    connectOrCreate?: DireccionesCreateOrConnectWithoutClientesInput
    connect?: DireccionesWhereUniqueInput
  }

  export type UsuariosCreateNestedOneWithoutClientesInput = {
    create?: XOR<UsuariosCreateWithoutClientesInput, UsuariosUncheckedCreateWithoutClientesInput>
    connectOrCreate?: UsuariosCreateOrConnectWithoutClientesInput
    connect?: UsuariosWhereUniqueInput
  }

  export type PrestamosCreateNestedManyWithoutClienteInput = {
    create?: XOR<PrestamosCreateWithoutClienteInput, PrestamosUncheckedCreateWithoutClienteInput> | PrestamosCreateWithoutClienteInput[] | PrestamosUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: PrestamosCreateOrConnectWithoutClienteInput | PrestamosCreateOrConnectWithoutClienteInput[]
    createMany?: PrestamosCreateManyClienteInputEnvelope
    connect?: PrestamosWhereUniqueInput | PrestamosWhereUniqueInput[]
  }

  export type PrestamosUncheckedCreateNestedManyWithoutClienteInput = {
    create?: XOR<PrestamosCreateWithoutClienteInput, PrestamosUncheckedCreateWithoutClienteInput> | PrestamosCreateWithoutClienteInput[] | PrestamosUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: PrestamosCreateOrConnectWithoutClienteInput | PrestamosCreateOrConnectWithoutClienteInput[]
    createMany?: PrestamosCreateManyClienteInputEnvelope
    connect?: PrestamosWhereUniqueInput | PrestamosWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type DireccionesUpdateOneWithoutClientesNestedInput = {
    create?: XOR<DireccionesCreateWithoutClientesInput, DireccionesUncheckedCreateWithoutClientesInput>
    connectOrCreate?: DireccionesCreateOrConnectWithoutClientesInput
    upsert?: DireccionesUpsertWithoutClientesInput
    disconnect?: DireccionesWhereInput | boolean
    delete?: DireccionesWhereInput | boolean
    connect?: DireccionesWhereUniqueInput
    update?: XOR<XOR<DireccionesUpdateToOneWithWhereWithoutClientesInput, DireccionesUpdateWithoutClientesInput>, DireccionesUncheckedUpdateWithoutClientesInput>
  }

  export type UsuariosUpdateOneWithoutClientesNestedInput = {
    create?: XOR<UsuariosCreateWithoutClientesInput, UsuariosUncheckedCreateWithoutClientesInput>
    connectOrCreate?: UsuariosCreateOrConnectWithoutClientesInput
    upsert?: UsuariosUpsertWithoutClientesInput
    disconnect?: UsuariosWhereInput | boolean
    delete?: UsuariosWhereInput | boolean
    connect?: UsuariosWhereUniqueInput
    update?: XOR<XOR<UsuariosUpdateToOneWithWhereWithoutClientesInput, UsuariosUpdateWithoutClientesInput>, UsuariosUncheckedUpdateWithoutClientesInput>
  }

  export type PrestamosUpdateManyWithoutClienteNestedInput = {
    create?: XOR<PrestamosCreateWithoutClienteInput, PrestamosUncheckedCreateWithoutClienteInput> | PrestamosCreateWithoutClienteInput[] | PrestamosUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: PrestamosCreateOrConnectWithoutClienteInput | PrestamosCreateOrConnectWithoutClienteInput[]
    upsert?: PrestamosUpsertWithWhereUniqueWithoutClienteInput | PrestamosUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: PrestamosCreateManyClienteInputEnvelope
    set?: PrestamosWhereUniqueInput | PrestamosWhereUniqueInput[]
    disconnect?: PrestamosWhereUniqueInput | PrestamosWhereUniqueInput[]
    delete?: PrestamosWhereUniqueInput | PrestamosWhereUniqueInput[]
    connect?: PrestamosWhereUniqueInput | PrestamosWhereUniqueInput[]
    update?: PrestamosUpdateWithWhereUniqueWithoutClienteInput | PrestamosUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: PrestamosUpdateManyWithWhereWithoutClienteInput | PrestamosUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: PrestamosScalarWhereInput | PrestamosScalarWhereInput[]
  }

  export type PrestamosUncheckedUpdateManyWithoutClienteNestedInput = {
    create?: XOR<PrestamosCreateWithoutClienteInput, PrestamosUncheckedCreateWithoutClienteInput> | PrestamosCreateWithoutClienteInput[] | PrestamosUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: PrestamosCreateOrConnectWithoutClienteInput | PrestamosCreateOrConnectWithoutClienteInput[]
    upsert?: PrestamosUpsertWithWhereUniqueWithoutClienteInput | PrestamosUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: PrestamosCreateManyClienteInputEnvelope
    set?: PrestamosWhereUniqueInput | PrestamosWhereUniqueInput[]
    disconnect?: PrestamosWhereUniqueInput | PrestamosWhereUniqueInput[]
    delete?: PrestamosWhereUniqueInput | PrestamosWhereUniqueInput[]
    connect?: PrestamosWhereUniqueInput | PrestamosWhereUniqueInput[]
    update?: PrestamosUpdateWithWhereUniqueWithoutClienteInput | PrestamosUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: PrestamosUpdateManyWithWhereWithoutClienteInput | PrestamosUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: PrestamosScalarWhereInput | PrestamosScalarWhereInput[]
  }

  export type PrestamosCreateNestedOneWithoutContratosInput = {
    create?: XOR<PrestamosCreateWithoutContratosInput, PrestamosUncheckedCreateWithoutContratosInput>
    connectOrCreate?: PrestamosCreateOrConnectWithoutContratosInput
    connect?: PrestamosWhereUniqueInput
  }

  export type PrestamosUpdateOneWithoutContratosNestedInput = {
    create?: XOR<PrestamosCreateWithoutContratosInput, PrestamosUncheckedCreateWithoutContratosInput>
    connectOrCreate?: PrestamosCreateOrConnectWithoutContratosInput
    upsert?: PrestamosUpsertWithoutContratosInput
    disconnect?: PrestamosWhereInput | boolean
    delete?: PrestamosWhereInput | boolean
    connect?: PrestamosWhereUniqueInput
    update?: XOR<XOR<PrestamosUpdateToOneWithWhereWithoutContratosInput, PrestamosUpdateWithoutContratosInput>, PrestamosUncheckedUpdateWithoutContratosInput>
  }

  export type LocalidadesCreateNestedOneWithoutDireccionesInput = {
    create?: XOR<LocalidadesCreateWithoutDireccionesInput, LocalidadesUncheckedCreateWithoutDireccionesInput>
    connectOrCreate?: LocalidadesCreateOrConnectWithoutDireccionesInput
    connect?: LocalidadesWhereUniqueInput
  }

  export type ClientesCreateNestedManyWithoutDireccionInput = {
    create?: XOR<ClientesCreateWithoutDireccionInput, ClientesUncheckedCreateWithoutDireccionInput> | ClientesCreateWithoutDireccionInput[] | ClientesUncheckedCreateWithoutDireccionInput[]
    connectOrCreate?: ClientesCreateOrConnectWithoutDireccionInput | ClientesCreateOrConnectWithoutDireccionInput[]
    createMany?: ClientesCreateManyDireccionInputEnvelope
    connect?: ClientesWhereUniqueInput | ClientesWhereUniqueInput[]
  }

  export type ClientesUncheckedCreateNestedManyWithoutDireccionInput = {
    create?: XOR<ClientesCreateWithoutDireccionInput, ClientesUncheckedCreateWithoutDireccionInput> | ClientesCreateWithoutDireccionInput[] | ClientesUncheckedCreateWithoutDireccionInput[]
    connectOrCreate?: ClientesCreateOrConnectWithoutDireccionInput | ClientesCreateOrConnectWithoutDireccionInput[]
    createMany?: ClientesCreateManyDireccionInputEnvelope
    connect?: ClientesWhereUniqueInput | ClientesWhereUniqueInput[]
  }

  export type LocalidadesUpdateOneWithoutDireccionesNestedInput = {
    create?: XOR<LocalidadesCreateWithoutDireccionesInput, LocalidadesUncheckedCreateWithoutDireccionesInput>
    connectOrCreate?: LocalidadesCreateOrConnectWithoutDireccionesInput
    upsert?: LocalidadesUpsertWithoutDireccionesInput
    disconnect?: LocalidadesWhereInput | boolean
    delete?: LocalidadesWhereInput | boolean
    connect?: LocalidadesWhereUniqueInput
    update?: XOR<XOR<LocalidadesUpdateToOneWithWhereWithoutDireccionesInput, LocalidadesUpdateWithoutDireccionesInput>, LocalidadesUncheckedUpdateWithoutDireccionesInput>
  }

  export type ClientesUpdateManyWithoutDireccionNestedInput = {
    create?: XOR<ClientesCreateWithoutDireccionInput, ClientesUncheckedCreateWithoutDireccionInput> | ClientesCreateWithoutDireccionInput[] | ClientesUncheckedCreateWithoutDireccionInput[]
    connectOrCreate?: ClientesCreateOrConnectWithoutDireccionInput | ClientesCreateOrConnectWithoutDireccionInput[]
    upsert?: ClientesUpsertWithWhereUniqueWithoutDireccionInput | ClientesUpsertWithWhereUniqueWithoutDireccionInput[]
    createMany?: ClientesCreateManyDireccionInputEnvelope
    set?: ClientesWhereUniqueInput | ClientesWhereUniqueInput[]
    disconnect?: ClientesWhereUniqueInput | ClientesWhereUniqueInput[]
    delete?: ClientesWhereUniqueInput | ClientesWhereUniqueInput[]
    connect?: ClientesWhereUniqueInput | ClientesWhereUniqueInput[]
    update?: ClientesUpdateWithWhereUniqueWithoutDireccionInput | ClientesUpdateWithWhereUniqueWithoutDireccionInput[]
    updateMany?: ClientesUpdateManyWithWhereWithoutDireccionInput | ClientesUpdateManyWithWhereWithoutDireccionInput[]
    deleteMany?: ClientesScalarWhereInput | ClientesScalarWhereInput[]
  }

  export type ClientesUncheckedUpdateManyWithoutDireccionNestedInput = {
    create?: XOR<ClientesCreateWithoutDireccionInput, ClientesUncheckedCreateWithoutDireccionInput> | ClientesCreateWithoutDireccionInput[] | ClientesUncheckedCreateWithoutDireccionInput[]
    connectOrCreate?: ClientesCreateOrConnectWithoutDireccionInput | ClientesCreateOrConnectWithoutDireccionInput[]
    upsert?: ClientesUpsertWithWhereUniqueWithoutDireccionInput | ClientesUpsertWithWhereUniqueWithoutDireccionInput[]
    createMany?: ClientesCreateManyDireccionInputEnvelope
    set?: ClientesWhereUniqueInput | ClientesWhereUniqueInput[]
    disconnect?: ClientesWhereUniqueInput | ClientesWhereUniqueInput[]
    delete?: ClientesWhereUniqueInput | ClientesWhereUniqueInput[]
    connect?: ClientesWhereUniqueInput | ClientesWhereUniqueInput[]
    update?: ClientesUpdateWithWhereUniqueWithoutDireccionInput | ClientesUpdateWithWhereUniqueWithoutDireccionInput[]
    updateMany?: ClientesUpdateManyWithWhereWithoutDireccionInput | ClientesUpdateManyWithWhereWithoutDireccionInput[]
    deleteMany?: ClientesScalarWhereInput | ClientesScalarWhereInput[]
  }

  export type MunicipiosCreateNestedManyWithoutEstadoInput = {
    create?: XOR<MunicipiosCreateWithoutEstadoInput, MunicipiosUncheckedCreateWithoutEstadoInput> | MunicipiosCreateWithoutEstadoInput[] | MunicipiosUncheckedCreateWithoutEstadoInput[]
    connectOrCreate?: MunicipiosCreateOrConnectWithoutEstadoInput | MunicipiosCreateOrConnectWithoutEstadoInput[]
    createMany?: MunicipiosCreateManyEstadoInputEnvelope
    connect?: MunicipiosWhereUniqueInput | MunicipiosWhereUniqueInput[]
  }

  export type MunicipiosUncheckedCreateNestedManyWithoutEstadoInput = {
    create?: XOR<MunicipiosCreateWithoutEstadoInput, MunicipiosUncheckedCreateWithoutEstadoInput> | MunicipiosCreateWithoutEstadoInput[] | MunicipiosUncheckedCreateWithoutEstadoInput[]
    connectOrCreate?: MunicipiosCreateOrConnectWithoutEstadoInput | MunicipiosCreateOrConnectWithoutEstadoInput[]
    createMany?: MunicipiosCreateManyEstadoInputEnvelope
    connect?: MunicipiosWhereUniqueInput | MunicipiosWhereUniqueInput[]
  }

  export type MunicipiosUpdateManyWithoutEstadoNestedInput = {
    create?: XOR<MunicipiosCreateWithoutEstadoInput, MunicipiosUncheckedCreateWithoutEstadoInput> | MunicipiosCreateWithoutEstadoInput[] | MunicipiosUncheckedCreateWithoutEstadoInput[]
    connectOrCreate?: MunicipiosCreateOrConnectWithoutEstadoInput | MunicipiosCreateOrConnectWithoutEstadoInput[]
    upsert?: MunicipiosUpsertWithWhereUniqueWithoutEstadoInput | MunicipiosUpsertWithWhereUniqueWithoutEstadoInput[]
    createMany?: MunicipiosCreateManyEstadoInputEnvelope
    set?: MunicipiosWhereUniqueInput | MunicipiosWhereUniqueInput[]
    disconnect?: MunicipiosWhereUniqueInput | MunicipiosWhereUniqueInput[]
    delete?: MunicipiosWhereUniqueInput | MunicipiosWhereUniqueInput[]
    connect?: MunicipiosWhereUniqueInput | MunicipiosWhereUniqueInput[]
    update?: MunicipiosUpdateWithWhereUniqueWithoutEstadoInput | MunicipiosUpdateWithWhereUniqueWithoutEstadoInput[]
    updateMany?: MunicipiosUpdateManyWithWhereWithoutEstadoInput | MunicipiosUpdateManyWithWhereWithoutEstadoInput[]
    deleteMany?: MunicipiosScalarWhereInput | MunicipiosScalarWhereInput[]
  }

  export type MunicipiosUncheckedUpdateManyWithoutEstadoNestedInput = {
    create?: XOR<MunicipiosCreateWithoutEstadoInput, MunicipiosUncheckedCreateWithoutEstadoInput> | MunicipiosCreateWithoutEstadoInput[] | MunicipiosUncheckedCreateWithoutEstadoInput[]
    connectOrCreate?: MunicipiosCreateOrConnectWithoutEstadoInput | MunicipiosCreateOrConnectWithoutEstadoInput[]
    upsert?: MunicipiosUpsertWithWhereUniqueWithoutEstadoInput | MunicipiosUpsertWithWhereUniqueWithoutEstadoInput[]
    createMany?: MunicipiosCreateManyEstadoInputEnvelope
    set?: MunicipiosWhereUniqueInput | MunicipiosWhereUniqueInput[]
    disconnect?: MunicipiosWhereUniqueInput | MunicipiosWhereUniqueInput[]
    delete?: MunicipiosWhereUniqueInput | MunicipiosWhereUniqueInput[]
    connect?: MunicipiosWhereUniqueInput | MunicipiosWhereUniqueInput[]
    update?: MunicipiosUpdateWithWhereUniqueWithoutEstadoInput | MunicipiosUpdateWithWhereUniqueWithoutEstadoInput[]
    updateMany?: MunicipiosUpdateManyWithWhereWithoutEstadoInput | MunicipiosUpdateManyWithWhereWithoutEstadoInput[]
    deleteMany?: MunicipiosScalarWhereInput | MunicipiosScalarWhereInput[]
  }

  export type CiudadesCreateNestedOneWithoutLocalidadesInput = {
    create?: XOR<CiudadesCreateWithoutLocalidadesInput, CiudadesUncheckedCreateWithoutLocalidadesInput>
    connectOrCreate?: CiudadesCreateOrConnectWithoutLocalidadesInput
    connect?: CiudadesWhereUniqueInput
  }

  export type DireccionesCreateNestedManyWithoutLocalidadInput = {
    create?: XOR<DireccionesCreateWithoutLocalidadInput, DireccionesUncheckedCreateWithoutLocalidadInput> | DireccionesCreateWithoutLocalidadInput[] | DireccionesUncheckedCreateWithoutLocalidadInput[]
    connectOrCreate?: DireccionesCreateOrConnectWithoutLocalidadInput | DireccionesCreateOrConnectWithoutLocalidadInput[]
    createMany?: DireccionesCreateManyLocalidadInputEnvelope
    connect?: DireccionesWhereUniqueInput | DireccionesWhereUniqueInput[]
  }

  export type DireccionesUncheckedCreateNestedManyWithoutLocalidadInput = {
    create?: XOR<DireccionesCreateWithoutLocalidadInput, DireccionesUncheckedCreateWithoutLocalidadInput> | DireccionesCreateWithoutLocalidadInput[] | DireccionesUncheckedCreateWithoutLocalidadInput[]
    connectOrCreate?: DireccionesCreateOrConnectWithoutLocalidadInput | DireccionesCreateOrConnectWithoutLocalidadInput[]
    createMany?: DireccionesCreateManyLocalidadInputEnvelope
    connect?: DireccionesWhereUniqueInput | DireccionesWhereUniqueInput[]
  }

  export type CiudadesUpdateOneWithoutLocalidadesNestedInput = {
    create?: XOR<CiudadesCreateWithoutLocalidadesInput, CiudadesUncheckedCreateWithoutLocalidadesInput>
    connectOrCreate?: CiudadesCreateOrConnectWithoutLocalidadesInput
    upsert?: CiudadesUpsertWithoutLocalidadesInput
    disconnect?: CiudadesWhereInput | boolean
    delete?: CiudadesWhereInput | boolean
    connect?: CiudadesWhereUniqueInput
    update?: XOR<XOR<CiudadesUpdateToOneWithWhereWithoutLocalidadesInput, CiudadesUpdateWithoutLocalidadesInput>, CiudadesUncheckedUpdateWithoutLocalidadesInput>
  }

  export type DireccionesUpdateManyWithoutLocalidadNestedInput = {
    create?: XOR<DireccionesCreateWithoutLocalidadInput, DireccionesUncheckedCreateWithoutLocalidadInput> | DireccionesCreateWithoutLocalidadInput[] | DireccionesUncheckedCreateWithoutLocalidadInput[]
    connectOrCreate?: DireccionesCreateOrConnectWithoutLocalidadInput | DireccionesCreateOrConnectWithoutLocalidadInput[]
    upsert?: DireccionesUpsertWithWhereUniqueWithoutLocalidadInput | DireccionesUpsertWithWhereUniqueWithoutLocalidadInput[]
    createMany?: DireccionesCreateManyLocalidadInputEnvelope
    set?: DireccionesWhereUniqueInput | DireccionesWhereUniqueInput[]
    disconnect?: DireccionesWhereUniqueInput | DireccionesWhereUniqueInput[]
    delete?: DireccionesWhereUniqueInput | DireccionesWhereUniqueInput[]
    connect?: DireccionesWhereUniqueInput | DireccionesWhereUniqueInput[]
    update?: DireccionesUpdateWithWhereUniqueWithoutLocalidadInput | DireccionesUpdateWithWhereUniqueWithoutLocalidadInput[]
    updateMany?: DireccionesUpdateManyWithWhereWithoutLocalidadInput | DireccionesUpdateManyWithWhereWithoutLocalidadInput[]
    deleteMany?: DireccionesScalarWhereInput | DireccionesScalarWhereInput[]
  }

  export type DireccionesUncheckedUpdateManyWithoutLocalidadNestedInput = {
    create?: XOR<DireccionesCreateWithoutLocalidadInput, DireccionesUncheckedCreateWithoutLocalidadInput> | DireccionesCreateWithoutLocalidadInput[] | DireccionesUncheckedCreateWithoutLocalidadInput[]
    connectOrCreate?: DireccionesCreateOrConnectWithoutLocalidadInput | DireccionesCreateOrConnectWithoutLocalidadInput[]
    upsert?: DireccionesUpsertWithWhereUniqueWithoutLocalidadInput | DireccionesUpsertWithWhereUniqueWithoutLocalidadInput[]
    createMany?: DireccionesCreateManyLocalidadInputEnvelope
    set?: DireccionesWhereUniqueInput | DireccionesWhereUniqueInput[]
    disconnect?: DireccionesWhereUniqueInput | DireccionesWhereUniqueInput[]
    delete?: DireccionesWhereUniqueInput | DireccionesWhereUniqueInput[]
    connect?: DireccionesWhereUniqueInput | DireccionesWhereUniqueInput[]
    update?: DireccionesUpdateWithWhereUniqueWithoutLocalidadInput | DireccionesUpdateWithWhereUniqueWithoutLocalidadInput[]
    updateMany?: DireccionesUpdateManyWithWhereWithoutLocalidadInput | DireccionesUpdateManyWithWhereWithoutLocalidadInput[]
    deleteMany?: DireccionesScalarWhereInput | DireccionesScalarWhereInput[]
  }

  export type PagosCreateNestedManyWithoutMetodoPagoInput = {
    create?: XOR<PagosCreateWithoutMetodoPagoInput, PagosUncheckedCreateWithoutMetodoPagoInput> | PagosCreateWithoutMetodoPagoInput[] | PagosUncheckedCreateWithoutMetodoPagoInput[]
    connectOrCreate?: PagosCreateOrConnectWithoutMetodoPagoInput | PagosCreateOrConnectWithoutMetodoPagoInput[]
    createMany?: PagosCreateManyMetodoPagoInputEnvelope
    connect?: PagosWhereUniqueInput | PagosWhereUniqueInput[]
  }

  export type PagosUncheckedCreateNestedManyWithoutMetodoPagoInput = {
    create?: XOR<PagosCreateWithoutMetodoPagoInput, PagosUncheckedCreateWithoutMetodoPagoInput> | PagosCreateWithoutMetodoPagoInput[] | PagosUncheckedCreateWithoutMetodoPagoInput[]
    connectOrCreate?: PagosCreateOrConnectWithoutMetodoPagoInput | PagosCreateOrConnectWithoutMetodoPagoInput[]
    createMany?: PagosCreateManyMetodoPagoInputEnvelope
    connect?: PagosWhereUniqueInput | PagosWhereUniqueInput[]
  }

  export type PagosUpdateManyWithoutMetodoPagoNestedInput = {
    create?: XOR<PagosCreateWithoutMetodoPagoInput, PagosUncheckedCreateWithoutMetodoPagoInput> | PagosCreateWithoutMetodoPagoInput[] | PagosUncheckedCreateWithoutMetodoPagoInput[]
    connectOrCreate?: PagosCreateOrConnectWithoutMetodoPagoInput | PagosCreateOrConnectWithoutMetodoPagoInput[]
    upsert?: PagosUpsertWithWhereUniqueWithoutMetodoPagoInput | PagosUpsertWithWhereUniqueWithoutMetodoPagoInput[]
    createMany?: PagosCreateManyMetodoPagoInputEnvelope
    set?: PagosWhereUniqueInput | PagosWhereUniqueInput[]
    disconnect?: PagosWhereUniqueInput | PagosWhereUniqueInput[]
    delete?: PagosWhereUniqueInput | PagosWhereUniqueInput[]
    connect?: PagosWhereUniqueInput | PagosWhereUniqueInput[]
    update?: PagosUpdateWithWhereUniqueWithoutMetodoPagoInput | PagosUpdateWithWhereUniqueWithoutMetodoPagoInput[]
    updateMany?: PagosUpdateManyWithWhereWithoutMetodoPagoInput | PagosUpdateManyWithWhereWithoutMetodoPagoInput[]
    deleteMany?: PagosScalarWhereInput | PagosScalarWhereInput[]
  }

  export type PagosUncheckedUpdateManyWithoutMetodoPagoNestedInput = {
    create?: XOR<PagosCreateWithoutMetodoPagoInput, PagosUncheckedCreateWithoutMetodoPagoInput> | PagosCreateWithoutMetodoPagoInput[] | PagosUncheckedCreateWithoutMetodoPagoInput[]
    connectOrCreate?: PagosCreateOrConnectWithoutMetodoPagoInput | PagosCreateOrConnectWithoutMetodoPagoInput[]
    upsert?: PagosUpsertWithWhereUniqueWithoutMetodoPagoInput | PagosUpsertWithWhereUniqueWithoutMetodoPagoInput[]
    createMany?: PagosCreateManyMetodoPagoInputEnvelope
    set?: PagosWhereUniqueInput | PagosWhereUniqueInput[]
    disconnect?: PagosWhereUniqueInput | PagosWhereUniqueInput[]
    delete?: PagosWhereUniqueInput | PagosWhereUniqueInput[]
    connect?: PagosWhereUniqueInput | PagosWhereUniqueInput[]
    update?: PagosUpdateWithWhereUniqueWithoutMetodoPagoInput | PagosUpdateWithWhereUniqueWithoutMetodoPagoInput[]
    updateMany?: PagosUpdateManyWithWhereWithoutMetodoPagoInput | PagosUpdateManyWithWhereWithoutMetodoPagoInput[]
    deleteMany?: PagosScalarWhereInput | PagosScalarWhereInput[]
  }

  export type EstadosCreateNestedOneWithoutMunicipiosInput = {
    create?: XOR<EstadosCreateWithoutMunicipiosInput, EstadosUncheckedCreateWithoutMunicipiosInput>
    connectOrCreate?: EstadosCreateOrConnectWithoutMunicipiosInput
    connect?: EstadosWhereUniqueInput
  }

  export type CiudadesCreateNestedManyWithoutMunicipioInput = {
    create?: XOR<CiudadesCreateWithoutMunicipioInput, CiudadesUncheckedCreateWithoutMunicipioInput> | CiudadesCreateWithoutMunicipioInput[] | CiudadesUncheckedCreateWithoutMunicipioInput[]
    connectOrCreate?: CiudadesCreateOrConnectWithoutMunicipioInput | CiudadesCreateOrConnectWithoutMunicipioInput[]
    createMany?: CiudadesCreateManyMunicipioInputEnvelope
    connect?: CiudadesWhereUniqueInput | CiudadesWhereUniqueInput[]
  }

  export type CiudadesUncheckedCreateNestedManyWithoutMunicipioInput = {
    create?: XOR<CiudadesCreateWithoutMunicipioInput, CiudadesUncheckedCreateWithoutMunicipioInput> | CiudadesCreateWithoutMunicipioInput[] | CiudadesUncheckedCreateWithoutMunicipioInput[]
    connectOrCreate?: CiudadesCreateOrConnectWithoutMunicipioInput | CiudadesCreateOrConnectWithoutMunicipioInput[]
    createMany?: CiudadesCreateManyMunicipioInputEnvelope
    connect?: CiudadesWhereUniqueInput | CiudadesWhereUniqueInput[]
  }

  export type EstadosUpdateOneWithoutMunicipiosNestedInput = {
    create?: XOR<EstadosCreateWithoutMunicipiosInput, EstadosUncheckedCreateWithoutMunicipiosInput>
    connectOrCreate?: EstadosCreateOrConnectWithoutMunicipiosInput
    upsert?: EstadosUpsertWithoutMunicipiosInput
    disconnect?: EstadosWhereInput | boolean
    delete?: EstadosWhereInput | boolean
    connect?: EstadosWhereUniqueInput
    update?: XOR<XOR<EstadosUpdateToOneWithWhereWithoutMunicipiosInput, EstadosUpdateWithoutMunicipiosInput>, EstadosUncheckedUpdateWithoutMunicipiosInput>
  }

  export type CiudadesUpdateManyWithoutMunicipioNestedInput = {
    create?: XOR<CiudadesCreateWithoutMunicipioInput, CiudadesUncheckedCreateWithoutMunicipioInput> | CiudadesCreateWithoutMunicipioInput[] | CiudadesUncheckedCreateWithoutMunicipioInput[]
    connectOrCreate?: CiudadesCreateOrConnectWithoutMunicipioInput | CiudadesCreateOrConnectWithoutMunicipioInput[]
    upsert?: CiudadesUpsertWithWhereUniqueWithoutMunicipioInput | CiudadesUpsertWithWhereUniqueWithoutMunicipioInput[]
    createMany?: CiudadesCreateManyMunicipioInputEnvelope
    set?: CiudadesWhereUniqueInput | CiudadesWhereUniqueInput[]
    disconnect?: CiudadesWhereUniqueInput | CiudadesWhereUniqueInput[]
    delete?: CiudadesWhereUniqueInput | CiudadesWhereUniqueInput[]
    connect?: CiudadesWhereUniqueInput | CiudadesWhereUniqueInput[]
    update?: CiudadesUpdateWithWhereUniqueWithoutMunicipioInput | CiudadesUpdateWithWhereUniqueWithoutMunicipioInput[]
    updateMany?: CiudadesUpdateManyWithWhereWithoutMunicipioInput | CiudadesUpdateManyWithWhereWithoutMunicipioInput[]
    deleteMany?: CiudadesScalarWhereInput | CiudadesScalarWhereInput[]
  }

  export type CiudadesUncheckedUpdateManyWithoutMunicipioNestedInput = {
    create?: XOR<CiudadesCreateWithoutMunicipioInput, CiudadesUncheckedCreateWithoutMunicipioInput> | CiudadesCreateWithoutMunicipioInput[] | CiudadesUncheckedCreateWithoutMunicipioInput[]
    connectOrCreate?: CiudadesCreateOrConnectWithoutMunicipioInput | CiudadesCreateOrConnectWithoutMunicipioInput[]
    upsert?: CiudadesUpsertWithWhereUniqueWithoutMunicipioInput | CiudadesUpsertWithWhereUniqueWithoutMunicipioInput[]
    createMany?: CiudadesCreateManyMunicipioInputEnvelope
    set?: CiudadesWhereUniqueInput | CiudadesWhereUniqueInput[]
    disconnect?: CiudadesWhereUniqueInput | CiudadesWhereUniqueInput[]
    delete?: CiudadesWhereUniqueInput | CiudadesWhereUniqueInput[]
    connect?: CiudadesWhereUniqueInput | CiudadesWhereUniqueInput[]
    update?: CiudadesUpdateWithWhereUniqueWithoutMunicipioInput | CiudadesUpdateWithWhereUniqueWithoutMunicipioInput[]
    updateMany?: CiudadesUpdateManyWithWhereWithoutMunicipioInput | CiudadesUpdateManyWithWhereWithoutMunicipioInput[]
    deleteMany?: CiudadesScalarWhereInput | CiudadesScalarWhereInput[]
  }

  export type PrestamosCreateNestedOneWithoutPagosInput = {
    create?: XOR<PrestamosCreateWithoutPagosInput, PrestamosUncheckedCreateWithoutPagosInput>
    connectOrCreate?: PrestamosCreateOrConnectWithoutPagosInput
    connect?: PrestamosWhereUniqueInput
  }

  export type MetodoPagoCreateNestedOneWithoutPagosInput = {
    create?: XOR<MetodoPagoCreateWithoutPagosInput, MetodoPagoUncheckedCreateWithoutPagosInput>
    connectOrCreate?: MetodoPagoCreateOrConnectWithoutPagosInput
    connect?: MetodoPagoWhereUniqueInput
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PrestamosUpdateOneWithoutPagosNestedInput = {
    create?: XOR<PrestamosCreateWithoutPagosInput, PrestamosUncheckedCreateWithoutPagosInput>
    connectOrCreate?: PrestamosCreateOrConnectWithoutPagosInput
    upsert?: PrestamosUpsertWithoutPagosInput
    disconnect?: PrestamosWhereInput | boolean
    delete?: PrestamosWhereInput | boolean
    connect?: PrestamosWhereUniqueInput
    update?: XOR<XOR<PrestamosUpdateToOneWithWhereWithoutPagosInput, PrestamosUpdateWithoutPagosInput>, PrestamosUncheckedUpdateWithoutPagosInput>
  }

  export type MetodoPagoUpdateOneWithoutPagosNestedInput = {
    create?: XOR<MetodoPagoCreateWithoutPagosInput, MetodoPagoUncheckedCreateWithoutPagosInput>
    connectOrCreate?: MetodoPagoCreateOrConnectWithoutPagosInput
    upsert?: MetodoPagoUpsertWithoutPagosInput
    disconnect?: MetodoPagoWhereInput | boolean
    delete?: MetodoPagoWhereInput | boolean
    connect?: MetodoPagoWhereUniqueInput
    update?: XOR<XOR<MetodoPagoUpdateToOneWithWhereWithoutPagosInput, MetodoPagoUpdateWithoutPagosInput>, MetodoPagoUncheckedUpdateWithoutPagosInput>
  }

  export type RolPermisosCreateNestedOneWithoutPermisosInput = {
    create?: XOR<RolPermisosCreateWithoutPermisosInput, RolPermisosUncheckedCreateWithoutPermisosInput>
    connectOrCreate?: RolPermisosCreateOrConnectWithoutPermisosInput
    connect?: RolPermisosWhereUniqueInput
  }

  export type RolPermisosUpdateOneWithoutPermisosNestedInput = {
    create?: XOR<RolPermisosCreateWithoutPermisosInput, RolPermisosUncheckedCreateWithoutPermisosInput>
    connectOrCreate?: RolPermisosCreateOrConnectWithoutPermisosInput
    upsert?: RolPermisosUpsertWithoutPermisosInput
    disconnect?: RolPermisosWhereInput | boolean
    delete?: RolPermisosWhereInput | boolean
    connect?: RolPermisosWhereUniqueInput
    update?: XOR<XOR<RolPermisosUpdateToOneWithWhereWithoutPermisosInput, RolPermisosUpdateWithoutPermisosInput>, RolPermisosUncheckedUpdateWithoutPermisosInput>
  }

  export type ClientesCreateNestedOneWithoutPrestamosInput = {
    create?: XOR<ClientesCreateWithoutPrestamosInput, ClientesUncheckedCreateWithoutPrestamosInput>
    connectOrCreate?: ClientesCreateOrConnectWithoutPrestamosInput
    connect?: ClientesWhereUniqueInput
  }

  export type UsuariosCreateNestedOneWithoutPrestamosInput = {
    create?: XOR<UsuariosCreateWithoutPrestamosInput, UsuariosUncheckedCreateWithoutPrestamosInput>
    connectOrCreate?: UsuariosCreateOrConnectWithoutPrestamosInput
    connect?: UsuariosWhereUniqueInput
  }

  export type ContratosCreateNestedManyWithoutPrestamoInput = {
    create?: XOR<ContratosCreateWithoutPrestamoInput, ContratosUncheckedCreateWithoutPrestamoInput> | ContratosCreateWithoutPrestamoInput[] | ContratosUncheckedCreateWithoutPrestamoInput[]
    connectOrCreate?: ContratosCreateOrConnectWithoutPrestamoInput | ContratosCreateOrConnectWithoutPrestamoInput[]
    createMany?: ContratosCreateManyPrestamoInputEnvelope
    connect?: ContratosWhereUniqueInput | ContratosWhereUniqueInput[]
  }

  export type PagosCreateNestedManyWithoutPrestamoInput = {
    create?: XOR<PagosCreateWithoutPrestamoInput, PagosUncheckedCreateWithoutPrestamoInput> | PagosCreateWithoutPrestamoInput[] | PagosUncheckedCreateWithoutPrestamoInput[]
    connectOrCreate?: PagosCreateOrConnectWithoutPrestamoInput | PagosCreateOrConnectWithoutPrestamoInput[]
    createMany?: PagosCreateManyPrestamoInputEnvelope
    connect?: PagosWhereUniqueInput | PagosWhereUniqueInput[]
  }

  export type ContratosUncheckedCreateNestedManyWithoutPrestamoInput = {
    create?: XOR<ContratosCreateWithoutPrestamoInput, ContratosUncheckedCreateWithoutPrestamoInput> | ContratosCreateWithoutPrestamoInput[] | ContratosUncheckedCreateWithoutPrestamoInput[]
    connectOrCreate?: ContratosCreateOrConnectWithoutPrestamoInput | ContratosCreateOrConnectWithoutPrestamoInput[]
    createMany?: ContratosCreateManyPrestamoInputEnvelope
    connect?: ContratosWhereUniqueInput | ContratosWhereUniqueInput[]
  }

  export type PagosUncheckedCreateNestedManyWithoutPrestamoInput = {
    create?: XOR<PagosCreateWithoutPrestamoInput, PagosUncheckedCreateWithoutPrestamoInput> | PagosCreateWithoutPrestamoInput[] | PagosUncheckedCreateWithoutPrestamoInput[]
    connectOrCreate?: PagosCreateOrConnectWithoutPrestamoInput | PagosCreateOrConnectWithoutPrestamoInput[]
    createMany?: PagosCreateManyPrestamoInputEnvelope
    connect?: PagosWhereUniqueInput | PagosWhereUniqueInput[]
  }

  export type ClientesUpdateOneWithoutPrestamosNestedInput = {
    create?: XOR<ClientesCreateWithoutPrestamosInput, ClientesUncheckedCreateWithoutPrestamosInput>
    connectOrCreate?: ClientesCreateOrConnectWithoutPrestamosInput
    upsert?: ClientesUpsertWithoutPrestamosInput
    disconnect?: ClientesWhereInput | boolean
    delete?: ClientesWhereInput | boolean
    connect?: ClientesWhereUniqueInput
    update?: XOR<XOR<ClientesUpdateToOneWithWhereWithoutPrestamosInput, ClientesUpdateWithoutPrestamosInput>, ClientesUncheckedUpdateWithoutPrestamosInput>
  }

  export type UsuariosUpdateOneWithoutPrestamosNestedInput = {
    create?: XOR<UsuariosCreateWithoutPrestamosInput, UsuariosUncheckedCreateWithoutPrestamosInput>
    connectOrCreate?: UsuariosCreateOrConnectWithoutPrestamosInput
    upsert?: UsuariosUpsertWithoutPrestamosInput
    disconnect?: UsuariosWhereInput | boolean
    delete?: UsuariosWhereInput | boolean
    connect?: UsuariosWhereUniqueInput
    update?: XOR<XOR<UsuariosUpdateToOneWithWhereWithoutPrestamosInput, UsuariosUpdateWithoutPrestamosInput>, UsuariosUncheckedUpdateWithoutPrestamosInput>
  }

  export type ContratosUpdateManyWithoutPrestamoNestedInput = {
    create?: XOR<ContratosCreateWithoutPrestamoInput, ContratosUncheckedCreateWithoutPrestamoInput> | ContratosCreateWithoutPrestamoInput[] | ContratosUncheckedCreateWithoutPrestamoInput[]
    connectOrCreate?: ContratosCreateOrConnectWithoutPrestamoInput | ContratosCreateOrConnectWithoutPrestamoInput[]
    upsert?: ContratosUpsertWithWhereUniqueWithoutPrestamoInput | ContratosUpsertWithWhereUniqueWithoutPrestamoInput[]
    createMany?: ContratosCreateManyPrestamoInputEnvelope
    set?: ContratosWhereUniqueInput | ContratosWhereUniqueInput[]
    disconnect?: ContratosWhereUniqueInput | ContratosWhereUniqueInput[]
    delete?: ContratosWhereUniqueInput | ContratosWhereUniqueInput[]
    connect?: ContratosWhereUniqueInput | ContratosWhereUniqueInput[]
    update?: ContratosUpdateWithWhereUniqueWithoutPrestamoInput | ContratosUpdateWithWhereUniqueWithoutPrestamoInput[]
    updateMany?: ContratosUpdateManyWithWhereWithoutPrestamoInput | ContratosUpdateManyWithWhereWithoutPrestamoInput[]
    deleteMany?: ContratosScalarWhereInput | ContratosScalarWhereInput[]
  }

  export type PagosUpdateManyWithoutPrestamoNestedInput = {
    create?: XOR<PagosCreateWithoutPrestamoInput, PagosUncheckedCreateWithoutPrestamoInput> | PagosCreateWithoutPrestamoInput[] | PagosUncheckedCreateWithoutPrestamoInput[]
    connectOrCreate?: PagosCreateOrConnectWithoutPrestamoInput | PagosCreateOrConnectWithoutPrestamoInput[]
    upsert?: PagosUpsertWithWhereUniqueWithoutPrestamoInput | PagosUpsertWithWhereUniqueWithoutPrestamoInput[]
    createMany?: PagosCreateManyPrestamoInputEnvelope
    set?: PagosWhereUniqueInput | PagosWhereUniqueInput[]
    disconnect?: PagosWhereUniqueInput | PagosWhereUniqueInput[]
    delete?: PagosWhereUniqueInput | PagosWhereUniqueInput[]
    connect?: PagosWhereUniqueInput | PagosWhereUniqueInput[]
    update?: PagosUpdateWithWhereUniqueWithoutPrestamoInput | PagosUpdateWithWhereUniqueWithoutPrestamoInput[]
    updateMany?: PagosUpdateManyWithWhereWithoutPrestamoInput | PagosUpdateManyWithWhereWithoutPrestamoInput[]
    deleteMany?: PagosScalarWhereInput | PagosScalarWhereInput[]
  }

  export type ContratosUncheckedUpdateManyWithoutPrestamoNestedInput = {
    create?: XOR<ContratosCreateWithoutPrestamoInput, ContratosUncheckedCreateWithoutPrestamoInput> | ContratosCreateWithoutPrestamoInput[] | ContratosUncheckedCreateWithoutPrestamoInput[]
    connectOrCreate?: ContratosCreateOrConnectWithoutPrestamoInput | ContratosCreateOrConnectWithoutPrestamoInput[]
    upsert?: ContratosUpsertWithWhereUniqueWithoutPrestamoInput | ContratosUpsertWithWhereUniqueWithoutPrestamoInput[]
    createMany?: ContratosCreateManyPrestamoInputEnvelope
    set?: ContratosWhereUniqueInput | ContratosWhereUniqueInput[]
    disconnect?: ContratosWhereUniqueInput | ContratosWhereUniqueInput[]
    delete?: ContratosWhereUniqueInput | ContratosWhereUniqueInput[]
    connect?: ContratosWhereUniqueInput | ContratosWhereUniqueInput[]
    update?: ContratosUpdateWithWhereUniqueWithoutPrestamoInput | ContratosUpdateWithWhereUniqueWithoutPrestamoInput[]
    updateMany?: ContratosUpdateManyWithWhereWithoutPrestamoInput | ContratosUpdateManyWithWhereWithoutPrestamoInput[]
    deleteMany?: ContratosScalarWhereInput | ContratosScalarWhereInput[]
  }

  export type PagosUncheckedUpdateManyWithoutPrestamoNestedInput = {
    create?: XOR<PagosCreateWithoutPrestamoInput, PagosUncheckedCreateWithoutPrestamoInput> | PagosCreateWithoutPrestamoInput[] | PagosUncheckedCreateWithoutPrestamoInput[]
    connectOrCreate?: PagosCreateOrConnectWithoutPrestamoInput | PagosCreateOrConnectWithoutPrestamoInput[]
    upsert?: PagosUpsertWithWhereUniqueWithoutPrestamoInput | PagosUpsertWithWhereUniqueWithoutPrestamoInput[]
    createMany?: PagosCreateManyPrestamoInputEnvelope
    set?: PagosWhereUniqueInput | PagosWhereUniqueInput[]
    disconnect?: PagosWhereUniqueInput | PagosWhereUniqueInput[]
    delete?: PagosWhereUniqueInput | PagosWhereUniqueInput[]
    connect?: PagosWhereUniqueInput | PagosWhereUniqueInput[]
    update?: PagosUpdateWithWhereUniqueWithoutPrestamoInput | PagosUpdateWithWhereUniqueWithoutPrestamoInput[]
    updateMany?: PagosUpdateManyWithWhereWithoutPrestamoInput | PagosUpdateManyWithWhereWithoutPrestamoInput[]
    deleteMany?: PagosScalarWhereInput | PagosScalarWhereInput[]
  }

  export type RolUsuarioCreateNestedOneWithoutRolesInput = {
    create?: XOR<RolUsuarioCreateWithoutRolesInput, RolUsuarioUncheckedCreateWithoutRolesInput>
    connectOrCreate?: RolUsuarioCreateOrConnectWithoutRolesInput
    connect?: RolUsuarioWhereUniqueInput
  }

  export type RolPermisosCreateNestedManyWithoutRolInput = {
    create?: XOR<RolPermisosCreateWithoutRolInput, RolPermisosUncheckedCreateWithoutRolInput> | RolPermisosCreateWithoutRolInput[] | RolPermisosUncheckedCreateWithoutRolInput[]
    connectOrCreate?: RolPermisosCreateOrConnectWithoutRolInput | RolPermisosCreateOrConnectWithoutRolInput[]
    createMany?: RolPermisosCreateManyRolInputEnvelope
    connect?: RolPermisosWhereUniqueInput | RolPermisosWhereUniqueInput[]
  }

  export type RolPermisosUncheckedCreateNestedManyWithoutRolInput = {
    create?: XOR<RolPermisosCreateWithoutRolInput, RolPermisosUncheckedCreateWithoutRolInput> | RolPermisosCreateWithoutRolInput[] | RolPermisosUncheckedCreateWithoutRolInput[]
    connectOrCreate?: RolPermisosCreateOrConnectWithoutRolInput | RolPermisosCreateOrConnectWithoutRolInput[]
    createMany?: RolPermisosCreateManyRolInputEnvelope
    connect?: RolPermisosWhereUniqueInput | RolPermisosWhereUniqueInput[]
  }

  export type RolUsuarioUpdateOneWithoutRolesNestedInput = {
    create?: XOR<RolUsuarioCreateWithoutRolesInput, RolUsuarioUncheckedCreateWithoutRolesInput>
    connectOrCreate?: RolUsuarioCreateOrConnectWithoutRolesInput
    upsert?: RolUsuarioUpsertWithoutRolesInput
    disconnect?: RolUsuarioWhereInput | boolean
    delete?: RolUsuarioWhereInput | boolean
    connect?: RolUsuarioWhereUniqueInput
    update?: XOR<XOR<RolUsuarioUpdateToOneWithWhereWithoutRolesInput, RolUsuarioUpdateWithoutRolesInput>, RolUsuarioUncheckedUpdateWithoutRolesInput>
  }

  export type RolPermisosUpdateManyWithoutRolNestedInput = {
    create?: XOR<RolPermisosCreateWithoutRolInput, RolPermisosUncheckedCreateWithoutRolInput> | RolPermisosCreateWithoutRolInput[] | RolPermisosUncheckedCreateWithoutRolInput[]
    connectOrCreate?: RolPermisosCreateOrConnectWithoutRolInput | RolPermisosCreateOrConnectWithoutRolInput[]
    upsert?: RolPermisosUpsertWithWhereUniqueWithoutRolInput | RolPermisosUpsertWithWhereUniqueWithoutRolInput[]
    createMany?: RolPermisosCreateManyRolInputEnvelope
    set?: RolPermisosWhereUniqueInput | RolPermisosWhereUniqueInput[]
    disconnect?: RolPermisosWhereUniqueInput | RolPermisosWhereUniqueInput[]
    delete?: RolPermisosWhereUniqueInput | RolPermisosWhereUniqueInput[]
    connect?: RolPermisosWhereUniqueInput | RolPermisosWhereUniqueInput[]
    update?: RolPermisosUpdateWithWhereUniqueWithoutRolInput | RolPermisosUpdateWithWhereUniqueWithoutRolInput[]
    updateMany?: RolPermisosUpdateManyWithWhereWithoutRolInput | RolPermisosUpdateManyWithWhereWithoutRolInput[]
    deleteMany?: RolPermisosScalarWhereInput | RolPermisosScalarWhereInput[]
  }

  export type RolPermisosUncheckedUpdateManyWithoutRolNestedInput = {
    create?: XOR<RolPermisosCreateWithoutRolInput, RolPermisosUncheckedCreateWithoutRolInput> | RolPermisosCreateWithoutRolInput[] | RolPermisosUncheckedCreateWithoutRolInput[]
    connectOrCreate?: RolPermisosCreateOrConnectWithoutRolInput | RolPermisosCreateOrConnectWithoutRolInput[]
    upsert?: RolPermisosUpsertWithWhereUniqueWithoutRolInput | RolPermisosUpsertWithWhereUniqueWithoutRolInput[]
    createMany?: RolPermisosCreateManyRolInputEnvelope
    set?: RolPermisosWhereUniqueInput | RolPermisosWhereUniqueInput[]
    disconnect?: RolPermisosWhereUniqueInput | RolPermisosWhereUniqueInput[]
    delete?: RolPermisosWhereUniqueInput | RolPermisosWhereUniqueInput[]
    connect?: RolPermisosWhereUniqueInput | RolPermisosWhereUniqueInput[]
    update?: RolPermisosUpdateWithWhereUniqueWithoutRolInput | RolPermisosUpdateWithWhereUniqueWithoutRolInput[]
    updateMany?: RolPermisosUpdateManyWithWhereWithoutRolInput | RolPermisosUpdateManyWithWhereWithoutRolInput[]
    deleteMany?: RolPermisosScalarWhereInput | RolPermisosScalarWhereInput[]
  }

  export type RolesCreateNestedOneWithoutRolPermisosInput = {
    create?: XOR<RolesCreateWithoutRolPermisosInput, RolesUncheckedCreateWithoutRolPermisosInput>
    connectOrCreate?: RolesCreateOrConnectWithoutRolPermisosInput
    connect?: RolesWhereUniqueInput
  }

  export type PermisosCreateNestedManyWithoutRolPermisoInput = {
    create?: XOR<PermisosCreateWithoutRolPermisoInput, PermisosUncheckedCreateWithoutRolPermisoInput> | PermisosCreateWithoutRolPermisoInput[] | PermisosUncheckedCreateWithoutRolPermisoInput[]
    connectOrCreate?: PermisosCreateOrConnectWithoutRolPermisoInput | PermisosCreateOrConnectWithoutRolPermisoInput[]
    createMany?: PermisosCreateManyRolPermisoInputEnvelope
    connect?: PermisosWhereUniqueInput | PermisosWhereUniqueInput[]
  }

  export type PermisosUncheckedCreateNestedManyWithoutRolPermisoInput = {
    create?: XOR<PermisosCreateWithoutRolPermisoInput, PermisosUncheckedCreateWithoutRolPermisoInput> | PermisosCreateWithoutRolPermisoInput[] | PermisosUncheckedCreateWithoutRolPermisoInput[]
    connectOrCreate?: PermisosCreateOrConnectWithoutRolPermisoInput | PermisosCreateOrConnectWithoutRolPermisoInput[]
    createMany?: PermisosCreateManyRolPermisoInputEnvelope
    connect?: PermisosWhereUniqueInput | PermisosWhereUniqueInput[]
  }

  export type RolesUpdateOneWithoutRolPermisosNestedInput = {
    create?: XOR<RolesCreateWithoutRolPermisosInput, RolesUncheckedCreateWithoutRolPermisosInput>
    connectOrCreate?: RolesCreateOrConnectWithoutRolPermisosInput
    upsert?: RolesUpsertWithoutRolPermisosInput
    disconnect?: RolesWhereInput | boolean
    delete?: RolesWhereInput | boolean
    connect?: RolesWhereUniqueInput
    update?: XOR<XOR<RolesUpdateToOneWithWhereWithoutRolPermisosInput, RolesUpdateWithoutRolPermisosInput>, RolesUncheckedUpdateWithoutRolPermisosInput>
  }

  export type PermisosUpdateManyWithoutRolPermisoNestedInput = {
    create?: XOR<PermisosCreateWithoutRolPermisoInput, PermisosUncheckedCreateWithoutRolPermisoInput> | PermisosCreateWithoutRolPermisoInput[] | PermisosUncheckedCreateWithoutRolPermisoInput[]
    connectOrCreate?: PermisosCreateOrConnectWithoutRolPermisoInput | PermisosCreateOrConnectWithoutRolPermisoInput[]
    upsert?: PermisosUpsertWithWhereUniqueWithoutRolPermisoInput | PermisosUpsertWithWhereUniqueWithoutRolPermisoInput[]
    createMany?: PermisosCreateManyRolPermisoInputEnvelope
    set?: PermisosWhereUniqueInput | PermisosWhereUniqueInput[]
    disconnect?: PermisosWhereUniqueInput | PermisosWhereUniqueInput[]
    delete?: PermisosWhereUniqueInput | PermisosWhereUniqueInput[]
    connect?: PermisosWhereUniqueInput | PermisosWhereUniqueInput[]
    update?: PermisosUpdateWithWhereUniqueWithoutRolPermisoInput | PermisosUpdateWithWhereUniqueWithoutRolPermisoInput[]
    updateMany?: PermisosUpdateManyWithWhereWithoutRolPermisoInput | PermisosUpdateManyWithWhereWithoutRolPermisoInput[]
    deleteMany?: PermisosScalarWhereInput | PermisosScalarWhereInput[]
  }

  export type PermisosUncheckedUpdateManyWithoutRolPermisoNestedInput = {
    create?: XOR<PermisosCreateWithoutRolPermisoInput, PermisosUncheckedCreateWithoutRolPermisoInput> | PermisosCreateWithoutRolPermisoInput[] | PermisosUncheckedCreateWithoutRolPermisoInput[]
    connectOrCreate?: PermisosCreateOrConnectWithoutRolPermisoInput | PermisosCreateOrConnectWithoutRolPermisoInput[]
    upsert?: PermisosUpsertWithWhereUniqueWithoutRolPermisoInput | PermisosUpsertWithWhereUniqueWithoutRolPermisoInput[]
    createMany?: PermisosCreateManyRolPermisoInputEnvelope
    set?: PermisosWhereUniqueInput | PermisosWhereUniqueInput[]
    disconnect?: PermisosWhereUniqueInput | PermisosWhereUniqueInput[]
    delete?: PermisosWhereUniqueInput | PermisosWhereUniqueInput[]
    connect?: PermisosWhereUniqueInput | PermisosWhereUniqueInput[]
    update?: PermisosUpdateWithWhereUniqueWithoutRolPermisoInput | PermisosUpdateWithWhereUniqueWithoutRolPermisoInput[]
    updateMany?: PermisosUpdateManyWithWhereWithoutRolPermisoInput | PermisosUpdateManyWithWhereWithoutRolPermisoInput[]
    deleteMany?: PermisosScalarWhereInput | PermisosScalarWhereInput[]
  }

  export type UsuariosCreateNestedOneWithoutRolUsuarioInput = {
    create?: XOR<UsuariosCreateWithoutRolUsuarioInput, UsuariosUncheckedCreateWithoutRolUsuarioInput>
    connectOrCreate?: UsuariosCreateOrConnectWithoutRolUsuarioInput
    connect?: UsuariosWhereUniqueInput
  }

  export type RolesCreateNestedManyWithoutRolUsuarioInput = {
    create?: XOR<RolesCreateWithoutRolUsuarioInput, RolesUncheckedCreateWithoutRolUsuarioInput> | RolesCreateWithoutRolUsuarioInput[] | RolesUncheckedCreateWithoutRolUsuarioInput[]
    connectOrCreate?: RolesCreateOrConnectWithoutRolUsuarioInput | RolesCreateOrConnectWithoutRolUsuarioInput[]
    createMany?: RolesCreateManyRolUsuarioInputEnvelope
    connect?: RolesWhereUniqueInput | RolesWhereUniqueInput[]
  }

  export type RolesUncheckedCreateNestedManyWithoutRolUsuarioInput = {
    create?: XOR<RolesCreateWithoutRolUsuarioInput, RolesUncheckedCreateWithoutRolUsuarioInput> | RolesCreateWithoutRolUsuarioInput[] | RolesUncheckedCreateWithoutRolUsuarioInput[]
    connectOrCreate?: RolesCreateOrConnectWithoutRolUsuarioInput | RolesCreateOrConnectWithoutRolUsuarioInput[]
    createMany?: RolesCreateManyRolUsuarioInputEnvelope
    connect?: RolesWhereUniqueInput | RolesWhereUniqueInput[]
  }

  export type UsuariosUpdateOneWithoutRolUsuarioNestedInput = {
    create?: XOR<UsuariosCreateWithoutRolUsuarioInput, UsuariosUncheckedCreateWithoutRolUsuarioInput>
    connectOrCreate?: UsuariosCreateOrConnectWithoutRolUsuarioInput
    upsert?: UsuariosUpsertWithoutRolUsuarioInput
    disconnect?: UsuariosWhereInput | boolean
    delete?: UsuariosWhereInput | boolean
    connect?: UsuariosWhereUniqueInput
    update?: XOR<XOR<UsuariosUpdateToOneWithWhereWithoutRolUsuarioInput, UsuariosUpdateWithoutRolUsuarioInput>, UsuariosUncheckedUpdateWithoutRolUsuarioInput>
  }

  export type RolesUpdateManyWithoutRolUsuarioNestedInput = {
    create?: XOR<RolesCreateWithoutRolUsuarioInput, RolesUncheckedCreateWithoutRolUsuarioInput> | RolesCreateWithoutRolUsuarioInput[] | RolesUncheckedCreateWithoutRolUsuarioInput[]
    connectOrCreate?: RolesCreateOrConnectWithoutRolUsuarioInput | RolesCreateOrConnectWithoutRolUsuarioInput[]
    upsert?: RolesUpsertWithWhereUniqueWithoutRolUsuarioInput | RolesUpsertWithWhereUniqueWithoutRolUsuarioInput[]
    createMany?: RolesCreateManyRolUsuarioInputEnvelope
    set?: RolesWhereUniqueInput | RolesWhereUniqueInput[]
    disconnect?: RolesWhereUniqueInput | RolesWhereUniqueInput[]
    delete?: RolesWhereUniqueInput | RolesWhereUniqueInput[]
    connect?: RolesWhereUniqueInput | RolesWhereUniqueInput[]
    update?: RolesUpdateWithWhereUniqueWithoutRolUsuarioInput | RolesUpdateWithWhereUniqueWithoutRolUsuarioInput[]
    updateMany?: RolesUpdateManyWithWhereWithoutRolUsuarioInput | RolesUpdateManyWithWhereWithoutRolUsuarioInput[]
    deleteMany?: RolesScalarWhereInput | RolesScalarWhereInput[]
  }

  export type RolesUncheckedUpdateManyWithoutRolUsuarioNestedInput = {
    create?: XOR<RolesCreateWithoutRolUsuarioInput, RolesUncheckedCreateWithoutRolUsuarioInput> | RolesCreateWithoutRolUsuarioInput[] | RolesUncheckedCreateWithoutRolUsuarioInput[]
    connectOrCreate?: RolesCreateOrConnectWithoutRolUsuarioInput | RolesCreateOrConnectWithoutRolUsuarioInput[]
    upsert?: RolesUpsertWithWhereUniqueWithoutRolUsuarioInput | RolesUpsertWithWhereUniqueWithoutRolUsuarioInput[]
    createMany?: RolesCreateManyRolUsuarioInputEnvelope
    set?: RolesWhereUniqueInput | RolesWhereUniqueInput[]
    disconnect?: RolesWhereUniqueInput | RolesWhereUniqueInput[]
    delete?: RolesWhereUniqueInput | RolesWhereUniqueInput[]
    connect?: RolesWhereUniqueInput | RolesWhereUniqueInput[]
    update?: RolesUpdateWithWhereUniqueWithoutRolUsuarioInput | RolesUpdateWithWhereUniqueWithoutRolUsuarioInput[]
    updateMany?: RolesUpdateManyWithWhereWithoutRolUsuarioInput | RolesUpdateManyWithWhereWithoutRolUsuarioInput[]
    deleteMany?: RolesScalarWhereInput | RolesScalarWhereInput[]
  }

  export type ClientesCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<ClientesCreateWithoutUsuarioInput, ClientesUncheckedCreateWithoutUsuarioInput> | ClientesCreateWithoutUsuarioInput[] | ClientesUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ClientesCreateOrConnectWithoutUsuarioInput | ClientesCreateOrConnectWithoutUsuarioInput[]
    createMany?: ClientesCreateManyUsuarioInputEnvelope
    connect?: ClientesWhereUniqueInput | ClientesWhereUniqueInput[]
  }

  export type PrestamosCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<PrestamosCreateWithoutUsuarioInput, PrestamosUncheckedCreateWithoutUsuarioInput> | PrestamosCreateWithoutUsuarioInput[] | PrestamosUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: PrestamosCreateOrConnectWithoutUsuarioInput | PrestamosCreateOrConnectWithoutUsuarioInput[]
    createMany?: PrestamosCreateManyUsuarioInputEnvelope
    connect?: PrestamosWhereUniqueInput | PrestamosWhereUniqueInput[]
  }

  export type RolUsuarioCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<RolUsuarioCreateWithoutUsuarioInput, RolUsuarioUncheckedCreateWithoutUsuarioInput> | RolUsuarioCreateWithoutUsuarioInput[] | RolUsuarioUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: RolUsuarioCreateOrConnectWithoutUsuarioInput | RolUsuarioCreateOrConnectWithoutUsuarioInput[]
    createMany?: RolUsuarioCreateManyUsuarioInputEnvelope
    connect?: RolUsuarioWhereUniqueInput | RolUsuarioWhereUniqueInput[]
  }

  export type ClientesUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<ClientesCreateWithoutUsuarioInput, ClientesUncheckedCreateWithoutUsuarioInput> | ClientesCreateWithoutUsuarioInput[] | ClientesUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ClientesCreateOrConnectWithoutUsuarioInput | ClientesCreateOrConnectWithoutUsuarioInput[]
    createMany?: ClientesCreateManyUsuarioInputEnvelope
    connect?: ClientesWhereUniqueInput | ClientesWhereUniqueInput[]
  }

  export type PrestamosUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<PrestamosCreateWithoutUsuarioInput, PrestamosUncheckedCreateWithoutUsuarioInput> | PrestamosCreateWithoutUsuarioInput[] | PrestamosUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: PrestamosCreateOrConnectWithoutUsuarioInput | PrestamosCreateOrConnectWithoutUsuarioInput[]
    createMany?: PrestamosCreateManyUsuarioInputEnvelope
    connect?: PrestamosWhereUniqueInput | PrestamosWhereUniqueInput[]
  }

  export type RolUsuarioUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<RolUsuarioCreateWithoutUsuarioInput, RolUsuarioUncheckedCreateWithoutUsuarioInput> | RolUsuarioCreateWithoutUsuarioInput[] | RolUsuarioUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: RolUsuarioCreateOrConnectWithoutUsuarioInput | RolUsuarioCreateOrConnectWithoutUsuarioInput[]
    createMany?: RolUsuarioCreateManyUsuarioInputEnvelope
    connect?: RolUsuarioWhereUniqueInput | RolUsuarioWhereUniqueInput[]
  }

  export type ClientesUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<ClientesCreateWithoutUsuarioInput, ClientesUncheckedCreateWithoutUsuarioInput> | ClientesCreateWithoutUsuarioInput[] | ClientesUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ClientesCreateOrConnectWithoutUsuarioInput | ClientesCreateOrConnectWithoutUsuarioInput[]
    upsert?: ClientesUpsertWithWhereUniqueWithoutUsuarioInput | ClientesUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: ClientesCreateManyUsuarioInputEnvelope
    set?: ClientesWhereUniqueInput | ClientesWhereUniqueInput[]
    disconnect?: ClientesWhereUniqueInput | ClientesWhereUniqueInput[]
    delete?: ClientesWhereUniqueInput | ClientesWhereUniqueInput[]
    connect?: ClientesWhereUniqueInput | ClientesWhereUniqueInput[]
    update?: ClientesUpdateWithWhereUniqueWithoutUsuarioInput | ClientesUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: ClientesUpdateManyWithWhereWithoutUsuarioInput | ClientesUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: ClientesScalarWhereInput | ClientesScalarWhereInput[]
  }

  export type PrestamosUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<PrestamosCreateWithoutUsuarioInput, PrestamosUncheckedCreateWithoutUsuarioInput> | PrestamosCreateWithoutUsuarioInput[] | PrestamosUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: PrestamosCreateOrConnectWithoutUsuarioInput | PrestamosCreateOrConnectWithoutUsuarioInput[]
    upsert?: PrestamosUpsertWithWhereUniqueWithoutUsuarioInput | PrestamosUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: PrestamosCreateManyUsuarioInputEnvelope
    set?: PrestamosWhereUniqueInput | PrestamosWhereUniqueInput[]
    disconnect?: PrestamosWhereUniqueInput | PrestamosWhereUniqueInput[]
    delete?: PrestamosWhereUniqueInput | PrestamosWhereUniqueInput[]
    connect?: PrestamosWhereUniqueInput | PrestamosWhereUniqueInput[]
    update?: PrestamosUpdateWithWhereUniqueWithoutUsuarioInput | PrestamosUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: PrestamosUpdateManyWithWhereWithoutUsuarioInput | PrestamosUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: PrestamosScalarWhereInput | PrestamosScalarWhereInput[]
  }

  export type RolUsuarioUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<RolUsuarioCreateWithoutUsuarioInput, RolUsuarioUncheckedCreateWithoutUsuarioInput> | RolUsuarioCreateWithoutUsuarioInput[] | RolUsuarioUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: RolUsuarioCreateOrConnectWithoutUsuarioInput | RolUsuarioCreateOrConnectWithoutUsuarioInput[]
    upsert?: RolUsuarioUpsertWithWhereUniqueWithoutUsuarioInput | RolUsuarioUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: RolUsuarioCreateManyUsuarioInputEnvelope
    set?: RolUsuarioWhereUniqueInput | RolUsuarioWhereUniqueInput[]
    disconnect?: RolUsuarioWhereUniqueInput | RolUsuarioWhereUniqueInput[]
    delete?: RolUsuarioWhereUniqueInput | RolUsuarioWhereUniqueInput[]
    connect?: RolUsuarioWhereUniqueInput | RolUsuarioWhereUniqueInput[]
    update?: RolUsuarioUpdateWithWhereUniqueWithoutUsuarioInput | RolUsuarioUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: RolUsuarioUpdateManyWithWhereWithoutUsuarioInput | RolUsuarioUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: RolUsuarioScalarWhereInput | RolUsuarioScalarWhereInput[]
  }

  export type ClientesUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<ClientesCreateWithoutUsuarioInput, ClientesUncheckedCreateWithoutUsuarioInput> | ClientesCreateWithoutUsuarioInput[] | ClientesUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ClientesCreateOrConnectWithoutUsuarioInput | ClientesCreateOrConnectWithoutUsuarioInput[]
    upsert?: ClientesUpsertWithWhereUniqueWithoutUsuarioInput | ClientesUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: ClientesCreateManyUsuarioInputEnvelope
    set?: ClientesWhereUniqueInput | ClientesWhereUniqueInput[]
    disconnect?: ClientesWhereUniqueInput | ClientesWhereUniqueInput[]
    delete?: ClientesWhereUniqueInput | ClientesWhereUniqueInput[]
    connect?: ClientesWhereUniqueInput | ClientesWhereUniqueInput[]
    update?: ClientesUpdateWithWhereUniqueWithoutUsuarioInput | ClientesUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: ClientesUpdateManyWithWhereWithoutUsuarioInput | ClientesUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: ClientesScalarWhereInput | ClientesScalarWhereInput[]
  }

  export type PrestamosUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<PrestamosCreateWithoutUsuarioInput, PrestamosUncheckedCreateWithoutUsuarioInput> | PrestamosCreateWithoutUsuarioInput[] | PrestamosUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: PrestamosCreateOrConnectWithoutUsuarioInput | PrestamosCreateOrConnectWithoutUsuarioInput[]
    upsert?: PrestamosUpsertWithWhereUniqueWithoutUsuarioInput | PrestamosUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: PrestamosCreateManyUsuarioInputEnvelope
    set?: PrestamosWhereUniqueInput | PrestamosWhereUniqueInput[]
    disconnect?: PrestamosWhereUniqueInput | PrestamosWhereUniqueInput[]
    delete?: PrestamosWhereUniqueInput | PrestamosWhereUniqueInput[]
    connect?: PrestamosWhereUniqueInput | PrestamosWhereUniqueInput[]
    update?: PrestamosUpdateWithWhereUniqueWithoutUsuarioInput | PrestamosUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: PrestamosUpdateManyWithWhereWithoutUsuarioInput | PrestamosUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: PrestamosScalarWhereInput | PrestamosScalarWhereInput[]
  }

  export type RolUsuarioUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<RolUsuarioCreateWithoutUsuarioInput, RolUsuarioUncheckedCreateWithoutUsuarioInput> | RolUsuarioCreateWithoutUsuarioInput[] | RolUsuarioUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: RolUsuarioCreateOrConnectWithoutUsuarioInput | RolUsuarioCreateOrConnectWithoutUsuarioInput[]
    upsert?: RolUsuarioUpsertWithWhereUniqueWithoutUsuarioInput | RolUsuarioUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: RolUsuarioCreateManyUsuarioInputEnvelope
    set?: RolUsuarioWhereUniqueInput | RolUsuarioWhereUniqueInput[]
    disconnect?: RolUsuarioWhereUniqueInput | RolUsuarioWhereUniqueInput[]
    delete?: RolUsuarioWhereUniqueInput | RolUsuarioWhereUniqueInput[]
    connect?: RolUsuarioWhereUniqueInput | RolUsuarioWhereUniqueInput[]
    update?: RolUsuarioUpdateWithWhereUniqueWithoutUsuarioInput | RolUsuarioUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: RolUsuarioUpdateManyWithWhereWithoutUsuarioInput | RolUsuarioUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: RolUsuarioScalarWhereInput | RolUsuarioScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type MunicipiosCreateWithoutCiudadesInput = {
    id: number
    nombre?: string | null
    estado?: EstadosCreateNestedOneWithoutMunicipiosInput
  }

  export type MunicipiosUncheckedCreateWithoutCiudadesInput = {
    id: number
    idEstado?: number | null
    nombre?: string | null
  }

  export type MunicipiosCreateOrConnectWithoutCiudadesInput = {
    where: MunicipiosWhereUniqueInput
    create: XOR<MunicipiosCreateWithoutCiudadesInput, MunicipiosUncheckedCreateWithoutCiudadesInput>
  }

  export type LocalidadesCreateWithoutCiudadInput = {
    id: number
    nombre?: string | null
    direcciones?: DireccionesCreateNestedManyWithoutLocalidadInput
  }

  export type LocalidadesUncheckedCreateWithoutCiudadInput = {
    id: number
    nombre?: string | null
    direcciones?: DireccionesUncheckedCreateNestedManyWithoutLocalidadInput
  }

  export type LocalidadesCreateOrConnectWithoutCiudadInput = {
    where: LocalidadesWhereUniqueInput
    create: XOR<LocalidadesCreateWithoutCiudadInput, LocalidadesUncheckedCreateWithoutCiudadInput>
  }

  export type LocalidadesCreateManyCiudadInputEnvelope = {
    data: LocalidadesCreateManyCiudadInput | LocalidadesCreateManyCiudadInput[]
    skipDuplicates?: boolean
  }

  export type MunicipiosUpsertWithoutCiudadesInput = {
    update: XOR<MunicipiosUpdateWithoutCiudadesInput, MunicipiosUncheckedUpdateWithoutCiudadesInput>
    create: XOR<MunicipiosCreateWithoutCiudadesInput, MunicipiosUncheckedCreateWithoutCiudadesInput>
    where?: MunicipiosWhereInput
  }

  export type MunicipiosUpdateToOneWithWhereWithoutCiudadesInput = {
    where?: MunicipiosWhereInput
    data: XOR<MunicipiosUpdateWithoutCiudadesInput, MunicipiosUncheckedUpdateWithoutCiudadesInput>
  }

  export type MunicipiosUpdateWithoutCiudadesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: EstadosUpdateOneWithoutMunicipiosNestedInput
  }

  export type MunicipiosUncheckedUpdateWithoutCiudadesInput = {
    id?: IntFieldUpdateOperationsInput | number
    idEstado?: NullableIntFieldUpdateOperationsInput | number | null
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LocalidadesUpsertWithWhereUniqueWithoutCiudadInput = {
    where: LocalidadesWhereUniqueInput
    update: XOR<LocalidadesUpdateWithoutCiudadInput, LocalidadesUncheckedUpdateWithoutCiudadInput>
    create: XOR<LocalidadesCreateWithoutCiudadInput, LocalidadesUncheckedCreateWithoutCiudadInput>
  }

  export type LocalidadesUpdateWithWhereUniqueWithoutCiudadInput = {
    where: LocalidadesWhereUniqueInput
    data: XOR<LocalidadesUpdateWithoutCiudadInput, LocalidadesUncheckedUpdateWithoutCiudadInput>
  }

  export type LocalidadesUpdateManyWithWhereWithoutCiudadInput = {
    where: LocalidadesScalarWhereInput
    data: XOR<LocalidadesUpdateManyMutationInput, LocalidadesUncheckedUpdateManyWithoutCiudadInput>
  }

  export type LocalidadesScalarWhereInput = {
    AND?: LocalidadesScalarWhereInput | LocalidadesScalarWhereInput[]
    OR?: LocalidadesScalarWhereInput[]
    NOT?: LocalidadesScalarWhereInput | LocalidadesScalarWhereInput[]
    id?: IntFilter<"Localidades"> | number
    idCiudad?: IntNullableFilter<"Localidades"> | number | null
    nombre?: StringNullableFilter<"Localidades"> | string | null
  }

  export type DireccionesCreateWithoutClientesInput = {
    id: number
    caller?: string | null
    codigoPostal?: string | null
    numeroExterior?: string | null
    numeroInterior?: string | null
    localidad?: LocalidadesCreateNestedOneWithoutDireccionesInput
  }

  export type DireccionesUncheckedCreateWithoutClientesInput = {
    id: number
    idLocalidad?: number | null
    caller?: string | null
    codigoPostal?: string | null
    numeroExterior?: string | null
    numeroInterior?: string | null
  }

  export type DireccionesCreateOrConnectWithoutClientesInput = {
    where: DireccionesWhereUniqueInput
    create: XOR<DireccionesCreateWithoutClientesInput, DireccionesUncheckedCreateWithoutClientesInput>
  }

  export type UsuariosCreateWithoutClientesInput = {
    id: number
    nombre?: string | null
    contrasena?: string | null
    password?: string | null
    correo?: string | null
    fechaCreacion?: Date | string | null
    fechaActualizacion?: Date | string | null
    estatus?: boolean | null
    prestamos?: PrestamosCreateNestedManyWithoutUsuarioInput
    rolUsuario?: RolUsuarioCreateNestedManyWithoutUsuarioInput
  }

  export type UsuariosUncheckedCreateWithoutClientesInput = {
    id: number
    nombre?: string | null
    contrasena?: string | null
    password?: string | null
    correo?: string | null
    fechaCreacion?: Date | string | null
    fechaActualizacion?: Date | string | null
    estatus?: boolean | null
    prestamos?: PrestamosUncheckedCreateNestedManyWithoutUsuarioInput
    rolUsuario?: RolUsuarioUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuariosCreateOrConnectWithoutClientesInput = {
    where: UsuariosWhereUniqueInput
    create: XOR<UsuariosCreateWithoutClientesInput, UsuariosUncheckedCreateWithoutClientesInput>
  }

  export type PrestamosCreateWithoutClienteInput = {
    id: number
    monto?: number | null
    fechaInicio?: Date | string | null
    intervaloPago?: Date | string | null
    pagoMinimo?: number | null
    fechaFin?: Date | string | null
    tasa?: number | null
    status?: boolean | null
    usuario?: UsuariosCreateNestedOneWithoutPrestamosInput
    contratos?: ContratosCreateNestedManyWithoutPrestamoInput
    pagos?: PagosCreateNestedManyWithoutPrestamoInput
  }

  export type PrestamosUncheckedCreateWithoutClienteInput = {
    id: number
    idUsuario?: number | null
    monto?: number | null
    fechaInicio?: Date | string | null
    intervaloPago?: Date | string | null
    pagoMinimo?: number | null
    fechaFin?: Date | string | null
    tasa?: number | null
    status?: boolean | null
    contratos?: ContratosUncheckedCreateNestedManyWithoutPrestamoInput
    pagos?: PagosUncheckedCreateNestedManyWithoutPrestamoInput
  }

  export type PrestamosCreateOrConnectWithoutClienteInput = {
    where: PrestamosWhereUniqueInput
    create: XOR<PrestamosCreateWithoutClienteInput, PrestamosUncheckedCreateWithoutClienteInput>
  }

  export type PrestamosCreateManyClienteInputEnvelope = {
    data: PrestamosCreateManyClienteInput | PrestamosCreateManyClienteInput[]
    skipDuplicates?: boolean
  }

  export type DireccionesUpsertWithoutClientesInput = {
    update: XOR<DireccionesUpdateWithoutClientesInput, DireccionesUncheckedUpdateWithoutClientesInput>
    create: XOR<DireccionesCreateWithoutClientesInput, DireccionesUncheckedCreateWithoutClientesInput>
    where?: DireccionesWhereInput
  }

  export type DireccionesUpdateToOneWithWhereWithoutClientesInput = {
    where?: DireccionesWhereInput
    data: XOR<DireccionesUpdateWithoutClientesInput, DireccionesUncheckedUpdateWithoutClientesInput>
  }

  export type DireccionesUpdateWithoutClientesInput = {
    id?: IntFieldUpdateOperationsInput | number
    caller?: NullableStringFieldUpdateOperationsInput | string | null
    codigoPostal?: NullableStringFieldUpdateOperationsInput | string | null
    numeroExterior?: NullableStringFieldUpdateOperationsInput | string | null
    numeroInterior?: NullableStringFieldUpdateOperationsInput | string | null
    localidad?: LocalidadesUpdateOneWithoutDireccionesNestedInput
  }

  export type DireccionesUncheckedUpdateWithoutClientesInput = {
    id?: IntFieldUpdateOperationsInput | number
    idLocalidad?: NullableIntFieldUpdateOperationsInput | number | null
    caller?: NullableStringFieldUpdateOperationsInput | string | null
    codigoPostal?: NullableStringFieldUpdateOperationsInput | string | null
    numeroExterior?: NullableStringFieldUpdateOperationsInput | string | null
    numeroInterior?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UsuariosUpsertWithoutClientesInput = {
    update: XOR<UsuariosUpdateWithoutClientesInput, UsuariosUncheckedUpdateWithoutClientesInput>
    create: XOR<UsuariosCreateWithoutClientesInput, UsuariosUncheckedCreateWithoutClientesInput>
    where?: UsuariosWhereInput
  }

  export type UsuariosUpdateToOneWithWhereWithoutClientesInput = {
    where?: UsuariosWhereInput
    data: XOR<UsuariosUpdateWithoutClientesInput, UsuariosUncheckedUpdateWithoutClientesInput>
  }

  export type UsuariosUpdateWithoutClientesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    contrasena?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    fechaCreacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fechaActualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estatus?: NullableBoolFieldUpdateOperationsInput | boolean | null
    prestamos?: PrestamosUpdateManyWithoutUsuarioNestedInput
    rolUsuario?: RolUsuarioUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuariosUncheckedUpdateWithoutClientesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    contrasena?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    fechaCreacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fechaActualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estatus?: NullableBoolFieldUpdateOperationsInput | boolean | null
    prestamos?: PrestamosUncheckedUpdateManyWithoutUsuarioNestedInput
    rolUsuario?: RolUsuarioUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type PrestamosUpsertWithWhereUniqueWithoutClienteInput = {
    where: PrestamosWhereUniqueInput
    update: XOR<PrestamosUpdateWithoutClienteInput, PrestamosUncheckedUpdateWithoutClienteInput>
    create: XOR<PrestamosCreateWithoutClienteInput, PrestamosUncheckedCreateWithoutClienteInput>
  }

  export type PrestamosUpdateWithWhereUniqueWithoutClienteInput = {
    where: PrestamosWhereUniqueInput
    data: XOR<PrestamosUpdateWithoutClienteInput, PrestamosUncheckedUpdateWithoutClienteInput>
  }

  export type PrestamosUpdateManyWithWhereWithoutClienteInput = {
    where: PrestamosScalarWhereInput
    data: XOR<PrestamosUpdateManyMutationInput, PrestamosUncheckedUpdateManyWithoutClienteInput>
  }

  export type PrestamosScalarWhereInput = {
    AND?: PrestamosScalarWhereInput | PrestamosScalarWhereInput[]
    OR?: PrestamosScalarWhereInput[]
    NOT?: PrestamosScalarWhereInput | PrestamosScalarWhereInput[]
    id?: IntFilter<"Prestamos"> | number
    idCliente?: IntNullableFilter<"Prestamos"> | number | null
    idUsuario?: IntNullableFilter<"Prestamos"> | number | null
    monto?: FloatNullableFilter<"Prestamos"> | number | null
    fechaInicio?: DateTimeNullableFilter<"Prestamos"> | Date | string | null
    intervaloPago?: DateTimeNullableFilter<"Prestamos"> | Date | string | null
    pagoMinimo?: FloatNullableFilter<"Prestamos"> | number | null
    fechaFin?: DateTimeNullableFilter<"Prestamos"> | Date | string | null
    tasa?: FloatNullableFilter<"Prestamos"> | number | null
    status?: BoolNullableFilter<"Prestamos"> | boolean | null
  }

  export type PrestamosCreateWithoutContratosInput = {
    id: number
    monto?: number | null
    fechaInicio?: Date | string | null
    intervaloPago?: Date | string | null
    pagoMinimo?: number | null
    fechaFin?: Date | string | null
    tasa?: number | null
    status?: boolean | null
    cliente?: ClientesCreateNestedOneWithoutPrestamosInput
    usuario?: UsuariosCreateNestedOneWithoutPrestamosInput
    pagos?: PagosCreateNestedManyWithoutPrestamoInput
  }

  export type PrestamosUncheckedCreateWithoutContratosInput = {
    id: number
    idCliente?: number | null
    idUsuario?: number | null
    monto?: number | null
    fechaInicio?: Date | string | null
    intervaloPago?: Date | string | null
    pagoMinimo?: number | null
    fechaFin?: Date | string | null
    tasa?: number | null
    status?: boolean | null
    pagos?: PagosUncheckedCreateNestedManyWithoutPrestamoInput
  }

  export type PrestamosCreateOrConnectWithoutContratosInput = {
    where: PrestamosWhereUniqueInput
    create: XOR<PrestamosCreateWithoutContratosInput, PrestamosUncheckedCreateWithoutContratosInput>
  }

  export type PrestamosUpsertWithoutContratosInput = {
    update: XOR<PrestamosUpdateWithoutContratosInput, PrestamosUncheckedUpdateWithoutContratosInput>
    create: XOR<PrestamosCreateWithoutContratosInput, PrestamosUncheckedCreateWithoutContratosInput>
    where?: PrestamosWhereInput
  }

  export type PrestamosUpdateToOneWithWhereWithoutContratosInput = {
    where?: PrestamosWhereInput
    data: XOR<PrestamosUpdateWithoutContratosInput, PrestamosUncheckedUpdateWithoutContratosInput>
  }

  export type PrestamosUpdateWithoutContratosInput = {
    id?: IntFieldUpdateOperationsInput | number
    monto?: NullableFloatFieldUpdateOperationsInput | number | null
    fechaInicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    intervaloPago?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pagoMinimo?: NullableFloatFieldUpdateOperationsInput | number | null
    fechaFin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tasa?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    cliente?: ClientesUpdateOneWithoutPrestamosNestedInput
    usuario?: UsuariosUpdateOneWithoutPrestamosNestedInput
    pagos?: PagosUpdateManyWithoutPrestamoNestedInput
  }

  export type PrestamosUncheckedUpdateWithoutContratosInput = {
    id?: IntFieldUpdateOperationsInput | number
    idCliente?: NullableIntFieldUpdateOperationsInput | number | null
    idUsuario?: NullableIntFieldUpdateOperationsInput | number | null
    monto?: NullableFloatFieldUpdateOperationsInput | number | null
    fechaInicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    intervaloPago?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pagoMinimo?: NullableFloatFieldUpdateOperationsInput | number | null
    fechaFin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tasa?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    pagos?: PagosUncheckedUpdateManyWithoutPrestamoNestedInput
  }

  export type LocalidadesCreateWithoutDireccionesInput = {
    id: number
    nombre?: string | null
    ciudad?: CiudadesCreateNestedOneWithoutLocalidadesInput
  }

  export type LocalidadesUncheckedCreateWithoutDireccionesInput = {
    id: number
    idCiudad?: number | null
    nombre?: string | null
  }

  export type LocalidadesCreateOrConnectWithoutDireccionesInput = {
    where: LocalidadesWhereUniqueInput
    create: XOR<LocalidadesCreateWithoutDireccionesInput, LocalidadesUncheckedCreateWithoutDireccionesInput>
  }

  export type ClientesCreateWithoutDireccionInput = {
    id: number
    nombre?: string | null
    apellidoPaterno?: string | null
    apellidoMaterno?: string | null
    rfc?: string | null
    ine?: string | null
    comprobanteDomicilio?: string | null
    curp?: string | null
    fechaNacimiento?: Date | string | null
    estatus?: boolean | null
    usuario?: UsuariosCreateNestedOneWithoutClientesInput
    prestamos?: PrestamosCreateNestedManyWithoutClienteInput
  }

  export type ClientesUncheckedCreateWithoutDireccionInput = {
    id: number
    idUsuario?: number | null
    nombre?: string | null
    apellidoPaterno?: string | null
    apellidoMaterno?: string | null
    rfc?: string | null
    ine?: string | null
    comprobanteDomicilio?: string | null
    curp?: string | null
    fechaNacimiento?: Date | string | null
    estatus?: boolean | null
    prestamos?: PrestamosUncheckedCreateNestedManyWithoutClienteInput
  }

  export type ClientesCreateOrConnectWithoutDireccionInput = {
    where: ClientesWhereUniqueInput
    create: XOR<ClientesCreateWithoutDireccionInput, ClientesUncheckedCreateWithoutDireccionInput>
  }

  export type ClientesCreateManyDireccionInputEnvelope = {
    data: ClientesCreateManyDireccionInput | ClientesCreateManyDireccionInput[]
    skipDuplicates?: boolean
  }

  export type LocalidadesUpsertWithoutDireccionesInput = {
    update: XOR<LocalidadesUpdateWithoutDireccionesInput, LocalidadesUncheckedUpdateWithoutDireccionesInput>
    create: XOR<LocalidadesCreateWithoutDireccionesInput, LocalidadesUncheckedCreateWithoutDireccionesInput>
    where?: LocalidadesWhereInput
  }

  export type LocalidadesUpdateToOneWithWhereWithoutDireccionesInput = {
    where?: LocalidadesWhereInput
    data: XOR<LocalidadesUpdateWithoutDireccionesInput, LocalidadesUncheckedUpdateWithoutDireccionesInput>
  }

  export type LocalidadesUpdateWithoutDireccionesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    ciudad?: CiudadesUpdateOneWithoutLocalidadesNestedInput
  }

  export type LocalidadesUncheckedUpdateWithoutDireccionesInput = {
    id?: IntFieldUpdateOperationsInput | number
    idCiudad?: NullableIntFieldUpdateOperationsInput | number | null
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ClientesUpsertWithWhereUniqueWithoutDireccionInput = {
    where: ClientesWhereUniqueInput
    update: XOR<ClientesUpdateWithoutDireccionInput, ClientesUncheckedUpdateWithoutDireccionInput>
    create: XOR<ClientesCreateWithoutDireccionInput, ClientesUncheckedCreateWithoutDireccionInput>
  }

  export type ClientesUpdateWithWhereUniqueWithoutDireccionInput = {
    where: ClientesWhereUniqueInput
    data: XOR<ClientesUpdateWithoutDireccionInput, ClientesUncheckedUpdateWithoutDireccionInput>
  }

  export type ClientesUpdateManyWithWhereWithoutDireccionInput = {
    where: ClientesScalarWhereInput
    data: XOR<ClientesUpdateManyMutationInput, ClientesUncheckedUpdateManyWithoutDireccionInput>
  }

  export type ClientesScalarWhereInput = {
    AND?: ClientesScalarWhereInput | ClientesScalarWhereInput[]
    OR?: ClientesScalarWhereInput[]
    NOT?: ClientesScalarWhereInput | ClientesScalarWhereInput[]
    id?: IntFilter<"Clientes"> | number
    idDireccion?: IntNullableFilter<"Clientes"> | number | null
    idUsuario?: IntNullableFilter<"Clientes"> | number | null
    nombre?: StringNullableFilter<"Clientes"> | string | null
    apellidoPaterno?: StringNullableFilter<"Clientes"> | string | null
    apellidoMaterno?: StringNullableFilter<"Clientes"> | string | null
    rfc?: StringNullableFilter<"Clientes"> | string | null
    ine?: StringNullableFilter<"Clientes"> | string | null
    comprobanteDomicilio?: StringNullableFilter<"Clientes"> | string | null
    curp?: StringNullableFilter<"Clientes"> | string | null
    fechaNacimiento?: DateTimeNullableFilter<"Clientes"> | Date | string | null
    estatus?: BoolNullableFilter<"Clientes"> | boolean | null
  }

  export type MunicipiosCreateWithoutEstadoInput = {
    id: number
    nombre?: string | null
    ciudades?: CiudadesCreateNestedManyWithoutMunicipioInput
  }

  export type MunicipiosUncheckedCreateWithoutEstadoInput = {
    id: number
    nombre?: string | null
    ciudades?: CiudadesUncheckedCreateNestedManyWithoutMunicipioInput
  }

  export type MunicipiosCreateOrConnectWithoutEstadoInput = {
    where: MunicipiosWhereUniqueInput
    create: XOR<MunicipiosCreateWithoutEstadoInput, MunicipiosUncheckedCreateWithoutEstadoInput>
  }

  export type MunicipiosCreateManyEstadoInputEnvelope = {
    data: MunicipiosCreateManyEstadoInput | MunicipiosCreateManyEstadoInput[]
    skipDuplicates?: boolean
  }

  export type MunicipiosUpsertWithWhereUniqueWithoutEstadoInput = {
    where: MunicipiosWhereUniqueInput
    update: XOR<MunicipiosUpdateWithoutEstadoInput, MunicipiosUncheckedUpdateWithoutEstadoInput>
    create: XOR<MunicipiosCreateWithoutEstadoInput, MunicipiosUncheckedCreateWithoutEstadoInput>
  }

  export type MunicipiosUpdateWithWhereUniqueWithoutEstadoInput = {
    where: MunicipiosWhereUniqueInput
    data: XOR<MunicipiosUpdateWithoutEstadoInput, MunicipiosUncheckedUpdateWithoutEstadoInput>
  }

  export type MunicipiosUpdateManyWithWhereWithoutEstadoInput = {
    where: MunicipiosScalarWhereInput
    data: XOR<MunicipiosUpdateManyMutationInput, MunicipiosUncheckedUpdateManyWithoutEstadoInput>
  }

  export type MunicipiosScalarWhereInput = {
    AND?: MunicipiosScalarWhereInput | MunicipiosScalarWhereInput[]
    OR?: MunicipiosScalarWhereInput[]
    NOT?: MunicipiosScalarWhereInput | MunicipiosScalarWhereInput[]
    id?: IntFilter<"Municipios"> | number
    idEstado?: IntNullableFilter<"Municipios"> | number | null
    nombre?: StringNullableFilter<"Municipios"> | string | null
  }

  export type CiudadesCreateWithoutLocalidadesInput = {
    id: number
    nombre?: string | null
    municipio?: MunicipiosCreateNestedOneWithoutCiudadesInput
  }

  export type CiudadesUncheckedCreateWithoutLocalidadesInput = {
    id: number
    idMunicipio?: number | null
    nombre?: string | null
  }

  export type CiudadesCreateOrConnectWithoutLocalidadesInput = {
    where: CiudadesWhereUniqueInput
    create: XOR<CiudadesCreateWithoutLocalidadesInput, CiudadesUncheckedCreateWithoutLocalidadesInput>
  }

  export type DireccionesCreateWithoutLocalidadInput = {
    id: number
    caller?: string | null
    codigoPostal?: string | null
    numeroExterior?: string | null
    numeroInterior?: string | null
    clientes?: ClientesCreateNestedManyWithoutDireccionInput
  }

  export type DireccionesUncheckedCreateWithoutLocalidadInput = {
    id: number
    caller?: string | null
    codigoPostal?: string | null
    numeroExterior?: string | null
    numeroInterior?: string | null
    clientes?: ClientesUncheckedCreateNestedManyWithoutDireccionInput
  }

  export type DireccionesCreateOrConnectWithoutLocalidadInput = {
    where: DireccionesWhereUniqueInput
    create: XOR<DireccionesCreateWithoutLocalidadInput, DireccionesUncheckedCreateWithoutLocalidadInput>
  }

  export type DireccionesCreateManyLocalidadInputEnvelope = {
    data: DireccionesCreateManyLocalidadInput | DireccionesCreateManyLocalidadInput[]
    skipDuplicates?: boolean
  }

  export type CiudadesUpsertWithoutLocalidadesInput = {
    update: XOR<CiudadesUpdateWithoutLocalidadesInput, CiudadesUncheckedUpdateWithoutLocalidadesInput>
    create: XOR<CiudadesCreateWithoutLocalidadesInput, CiudadesUncheckedCreateWithoutLocalidadesInput>
    where?: CiudadesWhereInput
  }

  export type CiudadesUpdateToOneWithWhereWithoutLocalidadesInput = {
    where?: CiudadesWhereInput
    data: XOR<CiudadesUpdateWithoutLocalidadesInput, CiudadesUncheckedUpdateWithoutLocalidadesInput>
  }

  export type CiudadesUpdateWithoutLocalidadesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    municipio?: MunicipiosUpdateOneWithoutCiudadesNestedInput
  }

  export type CiudadesUncheckedUpdateWithoutLocalidadesInput = {
    id?: IntFieldUpdateOperationsInput | number
    idMunicipio?: NullableIntFieldUpdateOperationsInput | number | null
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DireccionesUpsertWithWhereUniqueWithoutLocalidadInput = {
    where: DireccionesWhereUniqueInput
    update: XOR<DireccionesUpdateWithoutLocalidadInput, DireccionesUncheckedUpdateWithoutLocalidadInput>
    create: XOR<DireccionesCreateWithoutLocalidadInput, DireccionesUncheckedCreateWithoutLocalidadInput>
  }

  export type DireccionesUpdateWithWhereUniqueWithoutLocalidadInput = {
    where: DireccionesWhereUniqueInput
    data: XOR<DireccionesUpdateWithoutLocalidadInput, DireccionesUncheckedUpdateWithoutLocalidadInput>
  }

  export type DireccionesUpdateManyWithWhereWithoutLocalidadInput = {
    where: DireccionesScalarWhereInput
    data: XOR<DireccionesUpdateManyMutationInput, DireccionesUncheckedUpdateManyWithoutLocalidadInput>
  }

  export type DireccionesScalarWhereInput = {
    AND?: DireccionesScalarWhereInput | DireccionesScalarWhereInput[]
    OR?: DireccionesScalarWhereInput[]
    NOT?: DireccionesScalarWhereInput | DireccionesScalarWhereInput[]
    id?: IntFilter<"Direcciones"> | number
    idLocalidad?: IntNullableFilter<"Direcciones"> | number | null
    caller?: StringNullableFilter<"Direcciones"> | string | null
    codigoPostal?: StringNullableFilter<"Direcciones"> | string | null
    numeroExterior?: StringNullableFilter<"Direcciones"> | string | null
    numeroInterior?: StringNullableFilter<"Direcciones"> | string | null
  }

  export type PagosCreateWithoutMetodoPagoInput = {
    id: number
    monto?: number | null
    fechaPago?: Date | string | null
    status?: boolean | null
    prestamo?: PrestamosCreateNestedOneWithoutPagosInput
  }

  export type PagosUncheckedCreateWithoutMetodoPagoInput = {
    id: number
    idPrestamos?: number | null
    monto?: number | null
    fechaPago?: Date | string | null
    status?: boolean | null
  }

  export type PagosCreateOrConnectWithoutMetodoPagoInput = {
    where: PagosWhereUniqueInput
    create: XOR<PagosCreateWithoutMetodoPagoInput, PagosUncheckedCreateWithoutMetodoPagoInput>
  }

  export type PagosCreateManyMetodoPagoInputEnvelope = {
    data: PagosCreateManyMetodoPagoInput | PagosCreateManyMetodoPagoInput[]
    skipDuplicates?: boolean
  }

  export type PagosUpsertWithWhereUniqueWithoutMetodoPagoInput = {
    where: PagosWhereUniqueInput
    update: XOR<PagosUpdateWithoutMetodoPagoInput, PagosUncheckedUpdateWithoutMetodoPagoInput>
    create: XOR<PagosCreateWithoutMetodoPagoInput, PagosUncheckedCreateWithoutMetodoPagoInput>
  }

  export type PagosUpdateWithWhereUniqueWithoutMetodoPagoInput = {
    where: PagosWhereUniqueInput
    data: XOR<PagosUpdateWithoutMetodoPagoInput, PagosUncheckedUpdateWithoutMetodoPagoInput>
  }

  export type PagosUpdateManyWithWhereWithoutMetodoPagoInput = {
    where: PagosScalarWhereInput
    data: XOR<PagosUpdateManyMutationInput, PagosUncheckedUpdateManyWithoutMetodoPagoInput>
  }

  export type PagosScalarWhereInput = {
    AND?: PagosScalarWhereInput | PagosScalarWhereInput[]
    OR?: PagosScalarWhereInput[]
    NOT?: PagosScalarWhereInput | PagosScalarWhereInput[]
    id?: IntFilter<"Pagos"> | number
    idPrestamos?: IntNullableFilter<"Pagos"> | number | null
    idMetodoPago?: IntNullableFilter<"Pagos"> | number | null
    monto?: FloatNullableFilter<"Pagos"> | number | null
    fechaPago?: DateTimeNullableFilter<"Pagos"> | Date | string | null
    status?: BoolNullableFilter<"Pagos"> | boolean | null
  }

  export type EstadosCreateWithoutMunicipiosInput = {
    id: number
    nombre?: string | null
  }

  export type EstadosUncheckedCreateWithoutMunicipiosInput = {
    id: number
    nombre?: string | null
  }

  export type EstadosCreateOrConnectWithoutMunicipiosInput = {
    where: EstadosWhereUniqueInput
    create: XOR<EstadosCreateWithoutMunicipiosInput, EstadosUncheckedCreateWithoutMunicipiosInput>
  }

  export type CiudadesCreateWithoutMunicipioInput = {
    id: number
    nombre?: string | null
    localidades?: LocalidadesCreateNestedManyWithoutCiudadInput
  }

  export type CiudadesUncheckedCreateWithoutMunicipioInput = {
    id: number
    nombre?: string | null
    localidades?: LocalidadesUncheckedCreateNestedManyWithoutCiudadInput
  }

  export type CiudadesCreateOrConnectWithoutMunicipioInput = {
    where: CiudadesWhereUniqueInput
    create: XOR<CiudadesCreateWithoutMunicipioInput, CiudadesUncheckedCreateWithoutMunicipioInput>
  }

  export type CiudadesCreateManyMunicipioInputEnvelope = {
    data: CiudadesCreateManyMunicipioInput | CiudadesCreateManyMunicipioInput[]
    skipDuplicates?: boolean
  }

  export type EstadosUpsertWithoutMunicipiosInput = {
    update: XOR<EstadosUpdateWithoutMunicipiosInput, EstadosUncheckedUpdateWithoutMunicipiosInput>
    create: XOR<EstadosCreateWithoutMunicipiosInput, EstadosUncheckedCreateWithoutMunicipiosInput>
    where?: EstadosWhereInput
  }

  export type EstadosUpdateToOneWithWhereWithoutMunicipiosInput = {
    where?: EstadosWhereInput
    data: XOR<EstadosUpdateWithoutMunicipiosInput, EstadosUncheckedUpdateWithoutMunicipiosInput>
  }

  export type EstadosUpdateWithoutMunicipiosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EstadosUncheckedUpdateWithoutMunicipiosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CiudadesUpsertWithWhereUniqueWithoutMunicipioInput = {
    where: CiudadesWhereUniqueInput
    update: XOR<CiudadesUpdateWithoutMunicipioInput, CiudadesUncheckedUpdateWithoutMunicipioInput>
    create: XOR<CiudadesCreateWithoutMunicipioInput, CiudadesUncheckedCreateWithoutMunicipioInput>
  }

  export type CiudadesUpdateWithWhereUniqueWithoutMunicipioInput = {
    where: CiudadesWhereUniqueInput
    data: XOR<CiudadesUpdateWithoutMunicipioInput, CiudadesUncheckedUpdateWithoutMunicipioInput>
  }

  export type CiudadesUpdateManyWithWhereWithoutMunicipioInput = {
    where: CiudadesScalarWhereInput
    data: XOR<CiudadesUpdateManyMutationInput, CiudadesUncheckedUpdateManyWithoutMunicipioInput>
  }

  export type CiudadesScalarWhereInput = {
    AND?: CiudadesScalarWhereInput | CiudadesScalarWhereInput[]
    OR?: CiudadesScalarWhereInput[]
    NOT?: CiudadesScalarWhereInput | CiudadesScalarWhereInput[]
    id?: IntFilter<"Ciudades"> | number
    idMunicipio?: IntNullableFilter<"Ciudades"> | number | null
    nombre?: StringNullableFilter<"Ciudades"> | string | null
  }

  export type PrestamosCreateWithoutPagosInput = {
    id: number
    monto?: number | null
    fechaInicio?: Date | string | null
    intervaloPago?: Date | string | null
    pagoMinimo?: number | null
    fechaFin?: Date | string | null
    tasa?: number | null
    status?: boolean | null
    cliente?: ClientesCreateNestedOneWithoutPrestamosInput
    usuario?: UsuariosCreateNestedOneWithoutPrestamosInput
    contratos?: ContratosCreateNestedManyWithoutPrestamoInput
  }

  export type PrestamosUncheckedCreateWithoutPagosInput = {
    id: number
    idCliente?: number | null
    idUsuario?: number | null
    monto?: number | null
    fechaInicio?: Date | string | null
    intervaloPago?: Date | string | null
    pagoMinimo?: number | null
    fechaFin?: Date | string | null
    tasa?: number | null
    status?: boolean | null
    contratos?: ContratosUncheckedCreateNestedManyWithoutPrestamoInput
  }

  export type PrestamosCreateOrConnectWithoutPagosInput = {
    where: PrestamosWhereUniqueInput
    create: XOR<PrestamosCreateWithoutPagosInput, PrestamosUncheckedCreateWithoutPagosInput>
  }

  export type MetodoPagoCreateWithoutPagosInput = {
    id: number
    nombre?: string | null
    status?: boolean | null
  }

  export type MetodoPagoUncheckedCreateWithoutPagosInput = {
    id: number
    nombre?: string | null
    status?: boolean | null
  }

  export type MetodoPagoCreateOrConnectWithoutPagosInput = {
    where: MetodoPagoWhereUniqueInput
    create: XOR<MetodoPagoCreateWithoutPagosInput, MetodoPagoUncheckedCreateWithoutPagosInput>
  }

  export type PrestamosUpsertWithoutPagosInput = {
    update: XOR<PrestamosUpdateWithoutPagosInput, PrestamosUncheckedUpdateWithoutPagosInput>
    create: XOR<PrestamosCreateWithoutPagosInput, PrestamosUncheckedCreateWithoutPagosInput>
    where?: PrestamosWhereInput
  }

  export type PrestamosUpdateToOneWithWhereWithoutPagosInput = {
    where?: PrestamosWhereInput
    data: XOR<PrestamosUpdateWithoutPagosInput, PrestamosUncheckedUpdateWithoutPagosInput>
  }

  export type PrestamosUpdateWithoutPagosInput = {
    id?: IntFieldUpdateOperationsInput | number
    monto?: NullableFloatFieldUpdateOperationsInput | number | null
    fechaInicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    intervaloPago?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pagoMinimo?: NullableFloatFieldUpdateOperationsInput | number | null
    fechaFin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tasa?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    cliente?: ClientesUpdateOneWithoutPrestamosNestedInput
    usuario?: UsuariosUpdateOneWithoutPrestamosNestedInput
    contratos?: ContratosUpdateManyWithoutPrestamoNestedInput
  }

  export type PrestamosUncheckedUpdateWithoutPagosInput = {
    id?: IntFieldUpdateOperationsInput | number
    idCliente?: NullableIntFieldUpdateOperationsInput | number | null
    idUsuario?: NullableIntFieldUpdateOperationsInput | number | null
    monto?: NullableFloatFieldUpdateOperationsInput | number | null
    fechaInicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    intervaloPago?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pagoMinimo?: NullableFloatFieldUpdateOperationsInput | number | null
    fechaFin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tasa?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    contratos?: ContratosUncheckedUpdateManyWithoutPrestamoNestedInput
  }

  export type MetodoPagoUpsertWithoutPagosInput = {
    update: XOR<MetodoPagoUpdateWithoutPagosInput, MetodoPagoUncheckedUpdateWithoutPagosInput>
    create: XOR<MetodoPagoCreateWithoutPagosInput, MetodoPagoUncheckedCreateWithoutPagosInput>
    where?: MetodoPagoWhereInput
  }

  export type MetodoPagoUpdateToOneWithWhereWithoutPagosInput = {
    where?: MetodoPagoWhereInput
    data: XOR<MetodoPagoUpdateWithoutPagosInput, MetodoPagoUncheckedUpdateWithoutPagosInput>
  }

  export type MetodoPagoUpdateWithoutPagosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type MetodoPagoUncheckedUpdateWithoutPagosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type RolPermisosCreateWithoutPermisosInput = {
    id: number
    status?: string | null
    rol?: RolesCreateNestedOneWithoutRolPermisosInput
  }

  export type RolPermisosUncheckedCreateWithoutPermisosInput = {
    id: number
    idRol?: number | null
    status?: string | null
  }

  export type RolPermisosCreateOrConnectWithoutPermisosInput = {
    where: RolPermisosWhereUniqueInput
    create: XOR<RolPermisosCreateWithoutPermisosInput, RolPermisosUncheckedCreateWithoutPermisosInput>
  }

  export type RolPermisosUpsertWithoutPermisosInput = {
    update: XOR<RolPermisosUpdateWithoutPermisosInput, RolPermisosUncheckedUpdateWithoutPermisosInput>
    create: XOR<RolPermisosCreateWithoutPermisosInput, RolPermisosUncheckedCreateWithoutPermisosInput>
    where?: RolPermisosWhereInput
  }

  export type RolPermisosUpdateToOneWithWhereWithoutPermisosInput = {
    where?: RolPermisosWhereInput
    data: XOR<RolPermisosUpdateWithoutPermisosInput, RolPermisosUncheckedUpdateWithoutPermisosInput>
  }

  export type RolPermisosUpdateWithoutPermisosInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: NullableStringFieldUpdateOperationsInput | string | null
    rol?: RolesUpdateOneWithoutRolPermisosNestedInput
  }

  export type RolPermisosUncheckedUpdateWithoutPermisosInput = {
    id?: IntFieldUpdateOperationsInput | number
    idRol?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ClientesCreateWithoutPrestamosInput = {
    id: number
    nombre?: string | null
    apellidoPaterno?: string | null
    apellidoMaterno?: string | null
    rfc?: string | null
    ine?: string | null
    comprobanteDomicilio?: string | null
    curp?: string | null
    fechaNacimiento?: Date | string | null
    estatus?: boolean | null
    direccion?: DireccionesCreateNestedOneWithoutClientesInput
    usuario?: UsuariosCreateNestedOneWithoutClientesInput
  }

  export type ClientesUncheckedCreateWithoutPrestamosInput = {
    id: number
    idDireccion?: number | null
    idUsuario?: number | null
    nombre?: string | null
    apellidoPaterno?: string | null
    apellidoMaterno?: string | null
    rfc?: string | null
    ine?: string | null
    comprobanteDomicilio?: string | null
    curp?: string | null
    fechaNacimiento?: Date | string | null
    estatus?: boolean | null
  }

  export type ClientesCreateOrConnectWithoutPrestamosInput = {
    where: ClientesWhereUniqueInput
    create: XOR<ClientesCreateWithoutPrestamosInput, ClientesUncheckedCreateWithoutPrestamosInput>
  }

  export type UsuariosCreateWithoutPrestamosInput = {
    id: number
    nombre?: string | null
    contrasena?: string | null
    password?: string | null
    correo?: string | null
    fechaCreacion?: Date | string | null
    fechaActualizacion?: Date | string | null
    estatus?: boolean | null
    clientes?: ClientesCreateNestedManyWithoutUsuarioInput
    rolUsuario?: RolUsuarioCreateNestedManyWithoutUsuarioInput
  }

  export type UsuariosUncheckedCreateWithoutPrestamosInput = {
    id: number
    nombre?: string | null
    contrasena?: string | null
    password?: string | null
    correo?: string | null
    fechaCreacion?: Date | string | null
    fechaActualizacion?: Date | string | null
    estatus?: boolean | null
    clientes?: ClientesUncheckedCreateNestedManyWithoutUsuarioInput
    rolUsuario?: RolUsuarioUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuariosCreateOrConnectWithoutPrestamosInput = {
    where: UsuariosWhereUniqueInput
    create: XOR<UsuariosCreateWithoutPrestamosInput, UsuariosUncheckedCreateWithoutPrestamosInput>
  }

  export type ContratosCreateWithoutPrestamoInput = {
    id: number
    url?: string | null
    status?: boolean | null
  }

  export type ContratosUncheckedCreateWithoutPrestamoInput = {
    id: number
    url?: string | null
    status?: boolean | null
  }

  export type ContratosCreateOrConnectWithoutPrestamoInput = {
    where: ContratosWhereUniqueInput
    create: XOR<ContratosCreateWithoutPrestamoInput, ContratosUncheckedCreateWithoutPrestamoInput>
  }

  export type ContratosCreateManyPrestamoInputEnvelope = {
    data: ContratosCreateManyPrestamoInput | ContratosCreateManyPrestamoInput[]
    skipDuplicates?: boolean
  }

  export type PagosCreateWithoutPrestamoInput = {
    id: number
    monto?: number | null
    fechaPago?: Date | string | null
    status?: boolean | null
    metodoPago?: MetodoPagoCreateNestedOneWithoutPagosInput
  }

  export type PagosUncheckedCreateWithoutPrestamoInput = {
    id: number
    idMetodoPago?: number | null
    monto?: number | null
    fechaPago?: Date | string | null
    status?: boolean | null
  }

  export type PagosCreateOrConnectWithoutPrestamoInput = {
    where: PagosWhereUniqueInput
    create: XOR<PagosCreateWithoutPrestamoInput, PagosUncheckedCreateWithoutPrestamoInput>
  }

  export type PagosCreateManyPrestamoInputEnvelope = {
    data: PagosCreateManyPrestamoInput | PagosCreateManyPrestamoInput[]
    skipDuplicates?: boolean
  }

  export type ClientesUpsertWithoutPrestamosInput = {
    update: XOR<ClientesUpdateWithoutPrestamosInput, ClientesUncheckedUpdateWithoutPrestamosInput>
    create: XOR<ClientesCreateWithoutPrestamosInput, ClientesUncheckedCreateWithoutPrestamosInput>
    where?: ClientesWhereInput
  }

  export type ClientesUpdateToOneWithWhereWithoutPrestamosInput = {
    where?: ClientesWhereInput
    data: XOR<ClientesUpdateWithoutPrestamosInput, ClientesUncheckedUpdateWithoutPrestamosInput>
  }

  export type ClientesUpdateWithoutPrestamosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    apellidoPaterno?: NullableStringFieldUpdateOperationsInput | string | null
    apellidoMaterno?: NullableStringFieldUpdateOperationsInput | string | null
    rfc?: NullableStringFieldUpdateOperationsInput | string | null
    ine?: NullableStringFieldUpdateOperationsInput | string | null
    comprobanteDomicilio?: NullableStringFieldUpdateOperationsInput | string | null
    curp?: NullableStringFieldUpdateOperationsInput | string | null
    fechaNacimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estatus?: NullableBoolFieldUpdateOperationsInput | boolean | null
    direccion?: DireccionesUpdateOneWithoutClientesNestedInput
    usuario?: UsuariosUpdateOneWithoutClientesNestedInput
  }

  export type ClientesUncheckedUpdateWithoutPrestamosInput = {
    id?: IntFieldUpdateOperationsInput | number
    idDireccion?: NullableIntFieldUpdateOperationsInput | number | null
    idUsuario?: NullableIntFieldUpdateOperationsInput | number | null
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    apellidoPaterno?: NullableStringFieldUpdateOperationsInput | string | null
    apellidoMaterno?: NullableStringFieldUpdateOperationsInput | string | null
    rfc?: NullableStringFieldUpdateOperationsInput | string | null
    ine?: NullableStringFieldUpdateOperationsInput | string | null
    comprobanteDomicilio?: NullableStringFieldUpdateOperationsInput | string | null
    curp?: NullableStringFieldUpdateOperationsInput | string | null
    fechaNacimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estatus?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type UsuariosUpsertWithoutPrestamosInput = {
    update: XOR<UsuariosUpdateWithoutPrestamosInput, UsuariosUncheckedUpdateWithoutPrestamosInput>
    create: XOR<UsuariosCreateWithoutPrestamosInput, UsuariosUncheckedCreateWithoutPrestamosInput>
    where?: UsuariosWhereInput
  }

  export type UsuariosUpdateToOneWithWhereWithoutPrestamosInput = {
    where?: UsuariosWhereInput
    data: XOR<UsuariosUpdateWithoutPrestamosInput, UsuariosUncheckedUpdateWithoutPrestamosInput>
  }

  export type UsuariosUpdateWithoutPrestamosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    contrasena?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    fechaCreacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fechaActualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estatus?: NullableBoolFieldUpdateOperationsInput | boolean | null
    clientes?: ClientesUpdateManyWithoutUsuarioNestedInput
    rolUsuario?: RolUsuarioUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuariosUncheckedUpdateWithoutPrestamosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    contrasena?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    fechaCreacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fechaActualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estatus?: NullableBoolFieldUpdateOperationsInput | boolean | null
    clientes?: ClientesUncheckedUpdateManyWithoutUsuarioNestedInput
    rolUsuario?: RolUsuarioUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type ContratosUpsertWithWhereUniqueWithoutPrestamoInput = {
    where: ContratosWhereUniqueInput
    update: XOR<ContratosUpdateWithoutPrestamoInput, ContratosUncheckedUpdateWithoutPrestamoInput>
    create: XOR<ContratosCreateWithoutPrestamoInput, ContratosUncheckedCreateWithoutPrestamoInput>
  }

  export type ContratosUpdateWithWhereUniqueWithoutPrestamoInput = {
    where: ContratosWhereUniqueInput
    data: XOR<ContratosUpdateWithoutPrestamoInput, ContratosUncheckedUpdateWithoutPrestamoInput>
  }

  export type ContratosUpdateManyWithWhereWithoutPrestamoInput = {
    where: ContratosScalarWhereInput
    data: XOR<ContratosUpdateManyMutationInput, ContratosUncheckedUpdateManyWithoutPrestamoInput>
  }

  export type ContratosScalarWhereInput = {
    AND?: ContratosScalarWhereInput | ContratosScalarWhereInput[]
    OR?: ContratosScalarWhereInput[]
    NOT?: ContratosScalarWhereInput | ContratosScalarWhereInput[]
    id?: IntFilter<"Contratos"> | number
    idPrestamos?: IntNullableFilter<"Contratos"> | number | null
    url?: StringNullableFilter<"Contratos"> | string | null
    status?: BoolNullableFilter<"Contratos"> | boolean | null
  }

  export type PagosUpsertWithWhereUniqueWithoutPrestamoInput = {
    where: PagosWhereUniqueInput
    update: XOR<PagosUpdateWithoutPrestamoInput, PagosUncheckedUpdateWithoutPrestamoInput>
    create: XOR<PagosCreateWithoutPrestamoInput, PagosUncheckedCreateWithoutPrestamoInput>
  }

  export type PagosUpdateWithWhereUniqueWithoutPrestamoInput = {
    where: PagosWhereUniqueInput
    data: XOR<PagosUpdateWithoutPrestamoInput, PagosUncheckedUpdateWithoutPrestamoInput>
  }

  export type PagosUpdateManyWithWhereWithoutPrestamoInput = {
    where: PagosScalarWhereInput
    data: XOR<PagosUpdateManyMutationInput, PagosUncheckedUpdateManyWithoutPrestamoInput>
  }

  export type RolUsuarioCreateWithoutRolesInput = {
    id: number
    status?: boolean | null
    usuario?: UsuariosCreateNestedOneWithoutRolUsuarioInput
  }

  export type RolUsuarioUncheckedCreateWithoutRolesInput = {
    id: number
    idUsuario?: number | null
    status?: boolean | null
  }

  export type RolUsuarioCreateOrConnectWithoutRolesInput = {
    where: RolUsuarioWhereUniqueInput
    create: XOR<RolUsuarioCreateWithoutRolesInput, RolUsuarioUncheckedCreateWithoutRolesInput>
  }

  export type RolPermisosCreateWithoutRolInput = {
    id: number
    status?: string | null
    permisos?: PermisosCreateNestedManyWithoutRolPermisoInput
  }

  export type RolPermisosUncheckedCreateWithoutRolInput = {
    id: number
    status?: string | null
    permisos?: PermisosUncheckedCreateNestedManyWithoutRolPermisoInput
  }

  export type RolPermisosCreateOrConnectWithoutRolInput = {
    where: RolPermisosWhereUniqueInput
    create: XOR<RolPermisosCreateWithoutRolInput, RolPermisosUncheckedCreateWithoutRolInput>
  }

  export type RolPermisosCreateManyRolInputEnvelope = {
    data: RolPermisosCreateManyRolInput | RolPermisosCreateManyRolInput[]
    skipDuplicates?: boolean
  }

  export type RolUsuarioUpsertWithoutRolesInput = {
    update: XOR<RolUsuarioUpdateWithoutRolesInput, RolUsuarioUncheckedUpdateWithoutRolesInput>
    create: XOR<RolUsuarioCreateWithoutRolesInput, RolUsuarioUncheckedCreateWithoutRolesInput>
    where?: RolUsuarioWhereInput
  }

  export type RolUsuarioUpdateToOneWithWhereWithoutRolesInput = {
    where?: RolUsuarioWhereInput
    data: XOR<RolUsuarioUpdateWithoutRolesInput, RolUsuarioUncheckedUpdateWithoutRolesInput>
  }

  export type RolUsuarioUpdateWithoutRolesInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    usuario?: UsuariosUpdateOneWithoutRolUsuarioNestedInput
  }

  export type RolUsuarioUncheckedUpdateWithoutRolesInput = {
    id?: IntFieldUpdateOperationsInput | number
    idUsuario?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type RolPermisosUpsertWithWhereUniqueWithoutRolInput = {
    where: RolPermisosWhereUniqueInput
    update: XOR<RolPermisosUpdateWithoutRolInput, RolPermisosUncheckedUpdateWithoutRolInput>
    create: XOR<RolPermisosCreateWithoutRolInput, RolPermisosUncheckedCreateWithoutRolInput>
  }

  export type RolPermisosUpdateWithWhereUniqueWithoutRolInput = {
    where: RolPermisosWhereUniqueInput
    data: XOR<RolPermisosUpdateWithoutRolInput, RolPermisosUncheckedUpdateWithoutRolInput>
  }

  export type RolPermisosUpdateManyWithWhereWithoutRolInput = {
    where: RolPermisosScalarWhereInput
    data: XOR<RolPermisosUpdateManyMutationInput, RolPermisosUncheckedUpdateManyWithoutRolInput>
  }

  export type RolPermisosScalarWhereInput = {
    AND?: RolPermisosScalarWhereInput | RolPermisosScalarWhereInput[]
    OR?: RolPermisosScalarWhereInput[]
    NOT?: RolPermisosScalarWhereInput | RolPermisosScalarWhereInput[]
    id?: IntFilter<"RolPermisos"> | number
    idRol?: IntNullableFilter<"RolPermisos"> | number | null
    status?: StringNullableFilter<"RolPermisos"> | string | null
  }

  export type RolesCreateWithoutRolPermisosInput = {
    id: number
    nombre?: string | null
    status?: string | null
    rolUsuario?: RolUsuarioCreateNestedOneWithoutRolesInput
  }

  export type RolesUncheckedCreateWithoutRolPermisosInput = {
    id: number
    idRolUsuario?: number | null
    nombre?: string | null
    status?: string | null
  }

  export type RolesCreateOrConnectWithoutRolPermisosInput = {
    where: RolesWhereUniqueInput
    create: XOR<RolesCreateWithoutRolPermisosInput, RolesUncheckedCreateWithoutRolPermisosInput>
  }

  export type PermisosCreateWithoutRolPermisoInput = {
    id: number
    nombre?: string | null
    status?: boolean | null
  }

  export type PermisosUncheckedCreateWithoutRolPermisoInput = {
    id: number
    nombre?: string | null
    status?: boolean | null
  }

  export type PermisosCreateOrConnectWithoutRolPermisoInput = {
    where: PermisosWhereUniqueInput
    create: XOR<PermisosCreateWithoutRolPermisoInput, PermisosUncheckedCreateWithoutRolPermisoInput>
  }

  export type PermisosCreateManyRolPermisoInputEnvelope = {
    data: PermisosCreateManyRolPermisoInput | PermisosCreateManyRolPermisoInput[]
    skipDuplicates?: boolean
  }

  export type RolesUpsertWithoutRolPermisosInput = {
    update: XOR<RolesUpdateWithoutRolPermisosInput, RolesUncheckedUpdateWithoutRolPermisosInput>
    create: XOR<RolesCreateWithoutRolPermisosInput, RolesUncheckedCreateWithoutRolPermisosInput>
    where?: RolesWhereInput
  }

  export type RolesUpdateToOneWithWhereWithoutRolPermisosInput = {
    where?: RolesWhereInput
    data: XOR<RolesUpdateWithoutRolPermisosInput, RolesUncheckedUpdateWithoutRolPermisosInput>
  }

  export type RolesUpdateWithoutRolPermisosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    rolUsuario?: RolUsuarioUpdateOneWithoutRolesNestedInput
  }

  export type RolesUncheckedUpdateWithoutRolPermisosInput = {
    id?: IntFieldUpdateOperationsInput | number
    idRolUsuario?: NullableIntFieldUpdateOperationsInput | number | null
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PermisosUpsertWithWhereUniqueWithoutRolPermisoInput = {
    where: PermisosWhereUniqueInput
    update: XOR<PermisosUpdateWithoutRolPermisoInput, PermisosUncheckedUpdateWithoutRolPermisoInput>
    create: XOR<PermisosCreateWithoutRolPermisoInput, PermisosUncheckedCreateWithoutRolPermisoInput>
  }

  export type PermisosUpdateWithWhereUniqueWithoutRolPermisoInput = {
    where: PermisosWhereUniqueInput
    data: XOR<PermisosUpdateWithoutRolPermisoInput, PermisosUncheckedUpdateWithoutRolPermisoInput>
  }

  export type PermisosUpdateManyWithWhereWithoutRolPermisoInput = {
    where: PermisosScalarWhereInput
    data: XOR<PermisosUpdateManyMutationInput, PermisosUncheckedUpdateManyWithoutRolPermisoInput>
  }

  export type PermisosScalarWhereInput = {
    AND?: PermisosScalarWhereInput | PermisosScalarWhereInput[]
    OR?: PermisosScalarWhereInput[]
    NOT?: PermisosScalarWhereInput | PermisosScalarWhereInput[]
    id?: IntFilter<"Permisos"> | number
    idRolPermiso?: IntNullableFilter<"Permisos"> | number | null
    nombre?: StringNullableFilter<"Permisos"> | string | null
    status?: BoolNullableFilter<"Permisos"> | boolean | null
  }

  export type UsuariosCreateWithoutRolUsuarioInput = {
    id: number
    nombre?: string | null
    contrasena?: string | null
    password?: string | null
    correo?: string | null
    fechaCreacion?: Date | string | null
    fechaActualizacion?: Date | string | null
    estatus?: boolean | null
    clientes?: ClientesCreateNestedManyWithoutUsuarioInput
    prestamos?: PrestamosCreateNestedManyWithoutUsuarioInput
  }

  export type UsuariosUncheckedCreateWithoutRolUsuarioInput = {
    id: number
    nombre?: string | null
    contrasena?: string | null
    password?: string | null
    correo?: string | null
    fechaCreacion?: Date | string | null
    fechaActualizacion?: Date | string | null
    estatus?: boolean | null
    clientes?: ClientesUncheckedCreateNestedManyWithoutUsuarioInput
    prestamos?: PrestamosUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuariosCreateOrConnectWithoutRolUsuarioInput = {
    where: UsuariosWhereUniqueInput
    create: XOR<UsuariosCreateWithoutRolUsuarioInput, UsuariosUncheckedCreateWithoutRolUsuarioInput>
  }

  export type RolesCreateWithoutRolUsuarioInput = {
    id: number
    nombre?: string | null
    status?: string | null
    rolPermisos?: RolPermisosCreateNestedManyWithoutRolInput
  }

  export type RolesUncheckedCreateWithoutRolUsuarioInput = {
    id: number
    nombre?: string | null
    status?: string | null
    rolPermisos?: RolPermisosUncheckedCreateNestedManyWithoutRolInput
  }

  export type RolesCreateOrConnectWithoutRolUsuarioInput = {
    where: RolesWhereUniqueInput
    create: XOR<RolesCreateWithoutRolUsuarioInput, RolesUncheckedCreateWithoutRolUsuarioInput>
  }

  export type RolesCreateManyRolUsuarioInputEnvelope = {
    data: RolesCreateManyRolUsuarioInput | RolesCreateManyRolUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type UsuariosUpsertWithoutRolUsuarioInput = {
    update: XOR<UsuariosUpdateWithoutRolUsuarioInput, UsuariosUncheckedUpdateWithoutRolUsuarioInput>
    create: XOR<UsuariosCreateWithoutRolUsuarioInput, UsuariosUncheckedCreateWithoutRolUsuarioInput>
    where?: UsuariosWhereInput
  }

  export type UsuariosUpdateToOneWithWhereWithoutRolUsuarioInput = {
    where?: UsuariosWhereInput
    data: XOR<UsuariosUpdateWithoutRolUsuarioInput, UsuariosUncheckedUpdateWithoutRolUsuarioInput>
  }

  export type UsuariosUpdateWithoutRolUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    contrasena?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    fechaCreacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fechaActualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estatus?: NullableBoolFieldUpdateOperationsInput | boolean | null
    clientes?: ClientesUpdateManyWithoutUsuarioNestedInput
    prestamos?: PrestamosUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuariosUncheckedUpdateWithoutRolUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    contrasena?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    fechaCreacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fechaActualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estatus?: NullableBoolFieldUpdateOperationsInput | boolean | null
    clientes?: ClientesUncheckedUpdateManyWithoutUsuarioNestedInput
    prestamos?: PrestamosUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type RolesUpsertWithWhereUniqueWithoutRolUsuarioInput = {
    where: RolesWhereUniqueInput
    update: XOR<RolesUpdateWithoutRolUsuarioInput, RolesUncheckedUpdateWithoutRolUsuarioInput>
    create: XOR<RolesCreateWithoutRolUsuarioInput, RolesUncheckedCreateWithoutRolUsuarioInput>
  }

  export type RolesUpdateWithWhereUniqueWithoutRolUsuarioInput = {
    where: RolesWhereUniqueInput
    data: XOR<RolesUpdateWithoutRolUsuarioInput, RolesUncheckedUpdateWithoutRolUsuarioInput>
  }

  export type RolesUpdateManyWithWhereWithoutRolUsuarioInput = {
    where: RolesScalarWhereInput
    data: XOR<RolesUpdateManyMutationInput, RolesUncheckedUpdateManyWithoutRolUsuarioInput>
  }

  export type RolesScalarWhereInput = {
    AND?: RolesScalarWhereInput | RolesScalarWhereInput[]
    OR?: RolesScalarWhereInput[]
    NOT?: RolesScalarWhereInput | RolesScalarWhereInput[]
    id?: IntFilter<"Roles"> | number
    idRolUsuario?: IntNullableFilter<"Roles"> | number | null
    nombre?: StringNullableFilter<"Roles"> | string | null
    status?: StringNullableFilter<"Roles"> | string | null
  }

  export type ClientesCreateWithoutUsuarioInput = {
    id: number
    nombre?: string | null
    apellidoPaterno?: string | null
    apellidoMaterno?: string | null
    rfc?: string | null
    ine?: string | null
    comprobanteDomicilio?: string | null
    curp?: string | null
    fechaNacimiento?: Date | string | null
    estatus?: boolean | null
    direccion?: DireccionesCreateNestedOneWithoutClientesInput
    prestamos?: PrestamosCreateNestedManyWithoutClienteInput
  }

  export type ClientesUncheckedCreateWithoutUsuarioInput = {
    id: number
    idDireccion?: number | null
    nombre?: string | null
    apellidoPaterno?: string | null
    apellidoMaterno?: string | null
    rfc?: string | null
    ine?: string | null
    comprobanteDomicilio?: string | null
    curp?: string | null
    fechaNacimiento?: Date | string | null
    estatus?: boolean | null
    prestamos?: PrestamosUncheckedCreateNestedManyWithoutClienteInput
  }

  export type ClientesCreateOrConnectWithoutUsuarioInput = {
    where: ClientesWhereUniqueInput
    create: XOR<ClientesCreateWithoutUsuarioInput, ClientesUncheckedCreateWithoutUsuarioInput>
  }

  export type ClientesCreateManyUsuarioInputEnvelope = {
    data: ClientesCreateManyUsuarioInput | ClientesCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type PrestamosCreateWithoutUsuarioInput = {
    id: number
    monto?: number | null
    fechaInicio?: Date | string | null
    intervaloPago?: Date | string | null
    pagoMinimo?: number | null
    fechaFin?: Date | string | null
    tasa?: number | null
    status?: boolean | null
    cliente?: ClientesCreateNestedOneWithoutPrestamosInput
    contratos?: ContratosCreateNestedManyWithoutPrestamoInput
    pagos?: PagosCreateNestedManyWithoutPrestamoInput
  }

  export type PrestamosUncheckedCreateWithoutUsuarioInput = {
    id: number
    idCliente?: number | null
    monto?: number | null
    fechaInicio?: Date | string | null
    intervaloPago?: Date | string | null
    pagoMinimo?: number | null
    fechaFin?: Date | string | null
    tasa?: number | null
    status?: boolean | null
    contratos?: ContratosUncheckedCreateNestedManyWithoutPrestamoInput
    pagos?: PagosUncheckedCreateNestedManyWithoutPrestamoInput
  }

  export type PrestamosCreateOrConnectWithoutUsuarioInput = {
    where: PrestamosWhereUniqueInput
    create: XOR<PrestamosCreateWithoutUsuarioInput, PrestamosUncheckedCreateWithoutUsuarioInput>
  }

  export type PrestamosCreateManyUsuarioInputEnvelope = {
    data: PrestamosCreateManyUsuarioInput | PrestamosCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type RolUsuarioCreateWithoutUsuarioInput = {
    id: number
    status?: boolean | null
    roles?: RolesCreateNestedManyWithoutRolUsuarioInput
  }

  export type RolUsuarioUncheckedCreateWithoutUsuarioInput = {
    id: number
    status?: boolean | null
    roles?: RolesUncheckedCreateNestedManyWithoutRolUsuarioInput
  }

  export type RolUsuarioCreateOrConnectWithoutUsuarioInput = {
    where: RolUsuarioWhereUniqueInput
    create: XOR<RolUsuarioCreateWithoutUsuarioInput, RolUsuarioUncheckedCreateWithoutUsuarioInput>
  }

  export type RolUsuarioCreateManyUsuarioInputEnvelope = {
    data: RolUsuarioCreateManyUsuarioInput | RolUsuarioCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type ClientesUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: ClientesWhereUniqueInput
    update: XOR<ClientesUpdateWithoutUsuarioInput, ClientesUncheckedUpdateWithoutUsuarioInput>
    create: XOR<ClientesCreateWithoutUsuarioInput, ClientesUncheckedCreateWithoutUsuarioInput>
  }

  export type ClientesUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: ClientesWhereUniqueInput
    data: XOR<ClientesUpdateWithoutUsuarioInput, ClientesUncheckedUpdateWithoutUsuarioInput>
  }

  export type ClientesUpdateManyWithWhereWithoutUsuarioInput = {
    where: ClientesScalarWhereInput
    data: XOR<ClientesUpdateManyMutationInput, ClientesUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type PrestamosUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: PrestamosWhereUniqueInput
    update: XOR<PrestamosUpdateWithoutUsuarioInput, PrestamosUncheckedUpdateWithoutUsuarioInput>
    create: XOR<PrestamosCreateWithoutUsuarioInput, PrestamosUncheckedCreateWithoutUsuarioInput>
  }

  export type PrestamosUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: PrestamosWhereUniqueInput
    data: XOR<PrestamosUpdateWithoutUsuarioInput, PrestamosUncheckedUpdateWithoutUsuarioInput>
  }

  export type PrestamosUpdateManyWithWhereWithoutUsuarioInput = {
    where: PrestamosScalarWhereInput
    data: XOR<PrestamosUpdateManyMutationInput, PrestamosUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type RolUsuarioUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: RolUsuarioWhereUniqueInput
    update: XOR<RolUsuarioUpdateWithoutUsuarioInput, RolUsuarioUncheckedUpdateWithoutUsuarioInput>
    create: XOR<RolUsuarioCreateWithoutUsuarioInput, RolUsuarioUncheckedCreateWithoutUsuarioInput>
  }

  export type RolUsuarioUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: RolUsuarioWhereUniqueInput
    data: XOR<RolUsuarioUpdateWithoutUsuarioInput, RolUsuarioUncheckedUpdateWithoutUsuarioInput>
  }

  export type RolUsuarioUpdateManyWithWhereWithoutUsuarioInput = {
    where: RolUsuarioScalarWhereInput
    data: XOR<RolUsuarioUpdateManyMutationInput, RolUsuarioUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type RolUsuarioScalarWhereInput = {
    AND?: RolUsuarioScalarWhereInput | RolUsuarioScalarWhereInput[]
    OR?: RolUsuarioScalarWhereInput[]
    NOT?: RolUsuarioScalarWhereInput | RolUsuarioScalarWhereInput[]
    id?: IntFilter<"RolUsuario"> | number
    idUsuario?: IntNullableFilter<"RolUsuario"> | number | null
    status?: BoolNullableFilter<"RolUsuario"> | boolean | null
  }

  export type LocalidadesCreateManyCiudadInput = {
    id: number
    nombre?: string | null
  }

  export type LocalidadesUpdateWithoutCiudadInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    direcciones?: DireccionesUpdateManyWithoutLocalidadNestedInput
  }

  export type LocalidadesUncheckedUpdateWithoutCiudadInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    direcciones?: DireccionesUncheckedUpdateManyWithoutLocalidadNestedInput
  }

  export type LocalidadesUncheckedUpdateManyWithoutCiudadInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PrestamosCreateManyClienteInput = {
    id: number
    idUsuario?: number | null
    monto?: number | null
    fechaInicio?: Date | string | null
    intervaloPago?: Date | string | null
    pagoMinimo?: number | null
    fechaFin?: Date | string | null
    tasa?: number | null
    status?: boolean | null
  }

  export type PrestamosUpdateWithoutClienteInput = {
    id?: IntFieldUpdateOperationsInput | number
    monto?: NullableFloatFieldUpdateOperationsInput | number | null
    fechaInicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    intervaloPago?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pagoMinimo?: NullableFloatFieldUpdateOperationsInput | number | null
    fechaFin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tasa?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    usuario?: UsuariosUpdateOneWithoutPrestamosNestedInput
    contratos?: ContratosUpdateManyWithoutPrestamoNestedInput
    pagos?: PagosUpdateManyWithoutPrestamoNestedInput
  }

  export type PrestamosUncheckedUpdateWithoutClienteInput = {
    id?: IntFieldUpdateOperationsInput | number
    idUsuario?: NullableIntFieldUpdateOperationsInput | number | null
    monto?: NullableFloatFieldUpdateOperationsInput | number | null
    fechaInicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    intervaloPago?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pagoMinimo?: NullableFloatFieldUpdateOperationsInput | number | null
    fechaFin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tasa?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    contratos?: ContratosUncheckedUpdateManyWithoutPrestamoNestedInput
    pagos?: PagosUncheckedUpdateManyWithoutPrestamoNestedInput
  }

  export type PrestamosUncheckedUpdateManyWithoutClienteInput = {
    id?: IntFieldUpdateOperationsInput | number
    idUsuario?: NullableIntFieldUpdateOperationsInput | number | null
    monto?: NullableFloatFieldUpdateOperationsInput | number | null
    fechaInicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    intervaloPago?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pagoMinimo?: NullableFloatFieldUpdateOperationsInput | number | null
    fechaFin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tasa?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type ClientesCreateManyDireccionInput = {
    id: number
    idUsuario?: number | null
    nombre?: string | null
    apellidoPaterno?: string | null
    apellidoMaterno?: string | null
    rfc?: string | null
    ine?: string | null
    comprobanteDomicilio?: string | null
    curp?: string | null
    fechaNacimiento?: Date | string | null
    estatus?: boolean | null
  }

  export type ClientesUpdateWithoutDireccionInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    apellidoPaterno?: NullableStringFieldUpdateOperationsInput | string | null
    apellidoMaterno?: NullableStringFieldUpdateOperationsInput | string | null
    rfc?: NullableStringFieldUpdateOperationsInput | string | null
    ine?: NullableStringFieldUpdateOperationsInput | string | null
    comprobanteDomicilio?: NullableStringFieldUpdateOperationsInput | string | null
    curp?: NullableStringFieldUpdateOperationsInput | string | null
    fechaNacimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estatus?: NullableBoolFieldUpdateOperationsInput | boolean | null
    usuario?: UsuariosUpdateOneWithoutClientesNestedInput
    prestamos?: PrestamosUpdateManyWithoutClienteNestedInput
  }

  export type ClientesUncheckedUpdateWithoutDireccionInput = {
    id?: IntFieldUpdateOperationsInput | number
    idUsuario?: NullableIntFieldUpdateOperationsInput | number | null
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    apellidoPaterno?: NullableStringFieldUpdateOperationsInput | string | null
    apellidoMaterno?: NullableStringFieldUpdateOperationsInput | string | null
    rfc?: NullableStringFieldUpdateOperationsInput | string | null
    ine?: NullableStringFieldUpdateOperationsInput | string | null
    comprobanteDomicilio?: NullableStringFieldUpdateOperationsInput | string | null
    curp?: NullableStringFieldUpdateOperationsInput | string | null
    fechaNacimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estatus?: NullableBoolFieldUpdateOperationsInput | boolean | null
    prestamos?: PrestamosUncheckedUpdateManyWithoutClienteNestedInput
  }

  export type ClientesUncheckedUpdateManyWithoutDireccionInput = {
    id?: IntFieldUpdateOperationsInput | number
    idUsuario?: NullableIntFieldUpdateOperationsInput | number | null
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    apellidoPaterno?: NullableStringFieldUpdateOperationsInput | string | null
    apellidoMaterno?: NullableStringFieldUpdateOperationsInput | string | null
    rfc?: NullableStringFieldUpdateOperationsInput | string | null
    ine?: NullableStringFieldUpdateOperationsInput | string | null
    comprobanteDomicilio?: NullableStringFieldUpdateOperationsInput | string | null
    curp?: NullableStringFieldUpdateOperationsInput | string | null
    fechaNacimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estatus?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type MunicipiosCreateManyEstadoInput = {
    id: number
    nombre?: string | null
  }

  export type MunicipiosUpdateWithoutEstadoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    ciudades?: CiudadesUpdateManyWithoutMunicipioNestedInput
  }

  export type MunicipiosUncheckedUpdateWithoutEstadoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    ciudades?: CiudadesUncheckedUpdateManyWithoutMunicipioNestedInput
  }

  export type MunicipiosUncheckedUpdateManyWithoutEstadoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DireccionesCreateManyLocalidadInput = {
    id: number
    caller?: string | null
    codigoPostal?: string | null
    numeroExterior?: string | null
    numeroInterior?: string | null
  }

  export type DireccionesUpdateWithoutLocalidadInput = {
    id?: IntFieldUpdateOperationsInput | number
    caller?: NullableStringFieldUpdateOperationsInput | string | null
    codigoPostal?: NullableStringFieldUpdateOperationsInput | string | null
    numeroExterior?: NullableStringFieldUpdateOperationsInput | string | null
    numeroInterior?: NullableStringFieldUpdateOperationsInput | string | null
    clientes?: ClientesUpdateManyWithoutDireccionNestedInput
  }

  export type DireccionesUncheckedUpdateWithoutLocalidadInput = {
    id?: IntFieldUpdateOperationsInput | number
    caller?: NullableStringFieldUpdateOperationsInput | string | null
    codigoPostal?: NullableStringFieldUpdateOperationsInput | string | null
    numeroExterior?: NullableStringFieldUpdateOperationsInput | string | null
    numeroInterior?: NullableStringFieldUpdateOperationsInput | string | null
    clientes?: ClientesUncheckedUpdateManyWithoutDireccionNestedInput
  }

  export type DireccionesUncheckedUpdateManyWithoutLocalidadInput = {
    id?: IntFieldUpdateOperationsInput | number
    caller?: NullableStringFieldUpdateOperationsInput | string | null
    codigoPostal?: NullableStringFieldUpdateOperationsInput | string | null
    numeroExterior?: NullableStringFieldUpdateOperationsInput | string | null
    numeroInterior?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PagosCreateManyMetodoPagoInput = {
    id: number
    idPrestamos?: number | null
    monto?: number | null
    fechaPago?: Date | string | null
    status?: boolean | null
  }

  export type PagosUpdateWithoutMetodoPagoInput = {
    id?: IntFieldUpdateOperationsInput | number
    monto?: NullableFloatFieldUpdateOperationsInput | number | null
    fechaPago?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    prestamo?: PrestamosUpdateOneWithoutPagosNestedInput
  }

  export type PagosUncheckedUpdateWithoutMetodoPagoInput = {
    id?: IntFieldUpdateOperationsInput | number
    idPrestamos?: NullableIntFieldUpdateOperationsInput | number | null
    monto?: NullableFloatFieldUpdateOperationsInput | number | null
    fechaPago?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type PagosUncheckedUpdateManyWithoutMetodoPagoInput = {
    id?: IntFieldUpdateOperationsInput | number
    idPrestamos?: NullableIntFieldUpdateOperationsInput | number | null
    monto?: NullableFloatFieldUpdateOperationsInput | number | null
    fechaPago?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type CiudadesCreateManyMunicipioInput = {
    id: number
    nombre?: string | null
  }

  export type CiudadesUpdateWithoutMunicipioInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    localidades?: LocalidadesUpdateManyWithoutCiudadNestedInput
  }

  export type CiudadesUncheckedUpdateWithoutMunicipioInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    localidades?: LocalidadesUncheckedUpdateManyWithoutCiudadNestedInput
  }

  export type CiudadesUncheckedUpdateManyWithoutMunicipioInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ContratosCreateManyPrestamoInput = {
    id: number
    url?: string | null
    status?: boolean | null
  }

  export type PagosCreateManyPrestamoInput = {
    id: number
    idMetodoPago?: number | null
    monto?: number | null
    fechaPago?: Date | string | null
    status?: boolean | null
  }

  export type ContratosUpdateWithoutPrestamoInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type ContratosUncheckedUpdateWithoutPrestamoInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type ContratosUncheckedUpdateManyWithoutPrestamoInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type PagosUpdateWithoutPrestamoInput = {
    id?: IntFieldUpdateOperationsInput | number
    monto?: NullableFloatFieldUpdateOperationsInput | number | null
    fechaPago?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    metodoPago?: MetodoPagoUpdateOneWithoutPagosNestedInput
  }

  export type PagosUncheckedUpdateWithoutPrestamoInput = {
    id?: IntFieldUpdateOperationsInput | number
    idMetodoPago?: NullableIntFieldUpdateOperationsInput | number | null
    monto?: NullableFloatFieldUpdateOperationsInput | number | null
    fechaPago?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type PagosUncheckedUpdateManyWithoutPrestamoInput = {
    id?: IntFieldUpdateOperationsInput | number
    idMetodoPago?: NullableIntFieldUpdateOperationsInput | number | null
    monto?: NullableFloatFieldUpdateOperationsInput | number | null
    fechaPago?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type RolPermisosCreateManyRolInput = {
    id: number
    status?: string | null
  }

  export type RolPermisosUpdateWithoutRolInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: NullableStringFieldUpdateOperationsInput | string | null
    permisos?: PermisosUpdateManyWithoutRolPermisoNestedInput
  }

  export type RolPermisosUncheckedUpdateWithoutRolInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: NullableStringFieldUpdateOperationsInput | string | null
    permisos?: PermisosUncheckedUpdateManyWithoutRolPermisoNestedInput
  }

  export type RolPermisosUncheckedUpdateManyWithoutRolInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PermisosCreateManyRolPermisoInput = {
    id: number
    nombre?: string | null
    status?: boolean | null
  }

  export type PermisosUpdateWithoutRolPermisoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type PermisosUncheckedUpdateWithoutRolPermisoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type PermisosUncheckedUpdateManyWithoutRolPermisoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type RolesCreateManyRolUsuarioInput = {
    id: number
    nombre?: string | null
    status?: string | null
  }

  export type RolesUpdateWithoutRolUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    rolPermisos?: RolPermisosUpdateManyWithoutRolNestedInput
  }

  export type RolesUncheckedUpdateWithoutRolUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    rolPermisos?: RolPermisosUncheckedUpdateManyWithoutRolNestedInput
  }

  export type RolesUncheckedUpdateManyWithoutRolUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ClientesCreateManyUsuarioInput = {
    id: number
    idDireccion?: number | null
    nombre?: string | null
    apellidoPaterno?: string | null
    apellidoMaterno?: string | null
    rfc?: string | null
    ine?: string | null
    comprobanteDomicilio?: string | null
    curp?: string | null
    fechaNacimiento?: Date | string | null
    estatus?: boolean | null
  }

  export type PrestamosCreateManyUsuarioInput = {
    id: number
    idCliente?: number | null
    monto?: number | null
    fechaInicio?: Date | string | null
    intervaloPago?: Date | string | null
    pagoMinimo?: number | null
    fechaFin?: Date | string | null
    tasa?: number | null
    status?: boolean | null
  }

  export type RolUsuarioCreateManyUsuarioInput = {
    id: number
    status?: boolean | null
  }

  export type ClientesUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    apellidoPaterno?: NullableStringFieldUpdateOperationsInput | string | null
    apellidoMaterno?: NullableStringFieldUpdateOperationsInput | string | null
    rfc?: NullableStringFieldUpdateOperationsInput | string | null
    ine?: NullableStringFieldUpdateOperationsInput | string | null
    comprobanteDomicilio?: NullableStringFieldUpdateOperationsInput | string | null
    curp?: NullableStringFieldUpdateOperationsInput | string | null
    fechaNacimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estatus?: NullableBoolFieldUpdateOperationsInput | boolean | null
    direccion?: DireccionesUpdateOneWithoutClientesNestedInput
    prestamos?: PrestamosUpdateManyWithoutClienteNestedInput
  }

  export type ClientesUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    idDireccion?: NullableIntFieldUpdateOperationsInput | number | null
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    apellidoPaterno?: NullableStringFieldUpdateOperationsInput | string | null
    apellidoMaterno?: NullableStringFieldUpdateOperationsInput | string | null
    rfc?: NullableStringFieldUpdateOperationsInput | string | null
    ine?: NullableStringFieldUpdateOperationsInput | string | null
    comprobanteDomicilio?: NullableStringFieldUpdateOperationsInput | string | null
    curp?: NullableStringFieldUpdateOperationsInput | string | null
    fechaNacimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estatus?: NullableBoolFieldUpdateOperationsInput | boolean | null
    prestamos?: PrestamosUncheckedUpdateManyWithoutClienteNestedInput
  }

  export type ClientesUncheckedUpdateManyWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    idDireccion?: NullableIntFieldUpdateOperationsInput | number | null
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    apellidoPaterno?: NullableStringFieldUpdateOperationsInput | string | null
    apellidoMaterno?: NullableStringFieldUpdateOperationsInput | string | null
    rfc?: NullableStringFieldUpdateOperationsInput | string | null
    ine?: NullableStringFieldUpdateOperationsInput | string | null
    comprobanteDomicilio?: NullableStringFieldUpdateOperationsInput | string | null
    curp?: NullableStringFieldUpdateOperationsInput | string | null
    fechaNacimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estatus?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type PrestamosUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    monto?: NullableFloatFieldUpdateOperationsInput | number | null
    fechaInicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    intervaloPago?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pagoMinimo?: NullableFloatFieldUpdateOperationsInput | number | null
    fechaFin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tasa?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    cliente?: ClientesUpdateOneWithoutPrestamosNestedInput
    contratos?: ContratosUpdateManyWithoutPrestamoNestedInput
    pagos?: PagosUpdateManyWithoutPrestamoNestedInput
  }

  export type PrestamosUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    idCliente?: NullableIntFieldUpdateOperationsInput | number | null
    monto?: NullableFloatFieldUpdateOperationsInput | number | null
    fechaInicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    intervaloPago?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pagoMinimo?: NullableFloatFieldUpdateOperationsInput | number | null
    fechaFin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tasa?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    contratos?: ContratosUncheckedUpdateManyWithoutPrestamoNestedInput
    pagos?: PagosUncheckedUpdateManyWithoutPrestamoNestedInput
  }

  export type PrestamosUncheckedUpdateManyWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    idCliente?: NullableIntFieldUpdateOperationsInput | number | null
    monto?: NullableFloatFieldUpdateOperationsInput | number | null
    fechaInicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    intervaloPago?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pagoMinimo?: NullableFloatFieldUpdateOperationsInput | number | null
    fechaFin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tasa?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type RolUsuarioUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    roles?: RolesUpdateManyWithoutRolUsuarioNestedInput
  }

  export type RolUsuarioUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    roles?: RolesUncheckedUpdateManyWithoutRolUsuarioNestedInput
  }

  export type RolUsuarioUncheckedUpdateManyWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}