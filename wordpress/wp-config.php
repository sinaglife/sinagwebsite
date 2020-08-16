<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wordpress' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', 'root' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '/Y%a`!/m-yJTfNMQ_~Bp+L3h-Lal*/U&*Sw[9VBoa<E-<@xormZ[s0$PVw}KvALf' );
define( 'SECURE_AUTH_KEY',  'LFdxnIQ ,pe2@=NBHx7r~*J8z[n]G-0B*>|mqKExLPYtxvh>>#NM|XTAGA*7p5<Y' );
define( 'LOGGED_IN_KEY',    'N8{? J_=ExD4j]ZBztpyac>NW9}9Lre4zLxK-kKxEYJ}h{^Q?na cgJM^:Rcm^$k' );
define( 'NONCE_KEY',        '9na33&nFh-gy!7._Z5*98-OhP*$A2{b=`}M(9|fHtJ5J@&4YF11G]w,3:wd3hz&|' );
define( 'AUTH_SALT',        ' i+yQfz+w^D[Py,Ty9*9lP6-/x>!x: :LImfdxSB1];.tAp.QC*q?4 lUm5t:Pi?' );
define( 'SECURE_AUTH_SALT', 'fX[?~p2~|M6^<gwp%MwC[$~`qeypiy1^t}Z>7BAD4JBi==N*TGWdl[#vi}ZP68U|' );
define( 'LOGGED_IN_SALT',   'Iq<~$0}fxdp8=gDW#6F^pZ_=q+1FW6V%8%j6^f|WBQz^Cx/TuiaS)@$c@Qci[ota' );
define( 'NONCE_SALT',       '~7PxT-]?5J^P txv= >S1fv{Z4)^O_NqFH#b|l?PR,8KABgHTF{!z[`!G>cP{wQZ' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
