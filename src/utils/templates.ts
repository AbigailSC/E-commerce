export const getActivationTemplate = (refreshToken: string): string => {
  return `<!DOCTYPE html>
  <html lang="en" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:v="urn:schemas-microsoft-com:vml">
  <head>
  <title></title>
  <meta content="text/html; charset=utf-8" http-equiv="Content-Type"/>
  <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
  <link href="https://fonts.googleapis.com/css?family=Poppins" rel="stylesheet" type="text/css"/>
  <style>
  * {
  box-sizing: border-box;
  }
  body {
  margin: 0;
  padding: 0;
  }
  a[x-apple-data-detectors] {
  color: inherit !important;
  text-decoration: inherit !important;
  }
  #MessageViewBody a {
  color: inherit;
  text-decoration: none;
  }
  p {
  line-height: inherit
  }
  .desktop_hide,
  .desktop_hide table {
  mso-hide: all;
  display: none;
  max-height: 0px;
  overflow: hidden;
  }

  @media (max-width:700px) {
  .desktop_hide table.icons-inner {
      display: inline-block !important;
  }

  .icons-inner {
      text-align: center;
  }

  .icons-inner td {
      margin: 0 auto;
  }

  .fullMobileWidth,
  .image_block img.big,
  .row-content {
      width: 100% !important;
  }

  .mobile_hide {
      display: none;
  }

  .stack .column {
      width: 100%;
      display: block;
  }

  .mobile_hide {
      min-height: 0;
      max-height: 0;
      max-width: 0;
      overflow: hidden;
      font-size: 0px;
  }

  .desktop_hide,
  .desktop_hide table {
      display: table !important;
      max-height: none !important;
  }

  .reverse {
      display: table;
      width: 100%;
  }

  .reverse .column.first {
      display: table-footer-group !important;
  }

  .reverse .column.last {
      display: table-header-group !important;
  }

  .row-12 td.column.first>table,
  .row-12 td.column.last>table {
      padding-left: 30px;
      padding-right: 30px;
  }

  .row-12 td.column.first .border,
  .row-12 td.column.last .border {
      border-top: 0;
      border-right: 0px;
      border-bottom: 0;
      border-left: 0;
  }
  }
  </style>
  </head>
  <body style="background-color: #f5f5f5; margin: 0; padding: 0; -webkit-text-size-adjust: none; text-size-adjust: none;">
  <table border="0" cellpadding="0" cellspacing="0" class="nl-container" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f5f5f5;" width="100%">
  <tbody>
  <tr>
  <td>
  <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
  <tbody>
  <tr>
  <td>
  <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; color: #000000; width: 680px;" width="680">
  <tbody>
  <tr>
  <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="66.66666666666667%">
  <table border="0" cellpadding="0" cellspacing="0" class="icons_block block-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
  <tr>
  <td class="pad" style="vertical-align: middle; color: #000000; text-align: left; font-family: inherit; font-size: 14px; padding-top: 20px; padding-bottom: 20px;">
  <table align="left" cellpadding="0" cellspacing="0" class="alignment" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
  <tr>
  <td style="vertical-align: middle; text-align: center; padding-top: 20px; padding-bottom: 20px; padding-left: 20px; padding-right: 20px;"><img align="center" alt="" class="icon" height="64" src="https://res.cloudinary.com/edrj/image/upload/v1661230637/_logo_h3xitz.png" style="display: block; height: auto; margin: 0 auto; border: 0;" width="143"/></td>
  </tr>
  </table>
  </td>
  </tr>
  </table>
  </td>
  <td class="column column-2" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="33.333333333333336%">
  <table border="0" cellpadding="0" cellspacing="0" class="text_block block-3" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
  <tr>
  <td class="pad" style="padding-bottom:20px;padding-left:15px;padding-right:15px;padding-top:55px;">
  <div style="font-family: sans-serif">
  <div class="txtTinyMce-wrapper" style="font-size: 12px; mso-line-height-alt: 18px; color: #020b22; line-height: 1.5; font-family: Poppins, Arial, Helvetica, sans-serif;">
  <p style="margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 25.5px;"><span class="tinyMce-placeholder" style="font-size:17px;">23/3/34</span></p>
  </div>
  </div>
  </td>
  </tr>
  </table>
  </td>
  </tr>
  </tbody>
  </table>
  </td>
  </tr>
  </tbody>
  </table>
  <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
  <tbody>
  <tr>
  <td>
  <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #49E930; color: #000000; background-image: url('https://res.cloudinary.com/edrj/image/upload/v1661230638/heasder-bg_lwuao8.png'); background-repeat: no-repeat; background-size: cover; width: 680px;" width="680">
  <tbody>
  <tr>
  <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 0px; padding-bottom: 0px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
  <table border="0" cellpadding="0" cellspacing="0" class="heading_block block-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
  <tr>
  <td class="pad" style="width:100%;text-align:center;padding-top:100px;padding-bottom:100px;">
  <h1 style="margin: 0; color: #ffffff; font-size: 38px; font-family: Poppins, Arial, Helvetica, sans-serif; line-height: 150%; text-align: center; direction: ltr; font-weight: 700; letter-spacing: normal; margin-top: 0; margin-bottom: 0;">Bienvenido, ormando!</h1>
  <a herf="http://127.0.0.1:4000/api/auth/email-verification/${refreshToken}">verificaaaaaaar</a>
  </td>
  </tr>
  </table>
  </td>
  </tr>
  </tbody>
  </table>
  </td>
  </tr>
  </tbody>
  </table>
  <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-3" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
  <tbody>
  <tr>
  <td>
  <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; color: #000000; width: 680px;" width="680">
  <tbody>
  <tr>
  <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 0px; padding-bottom: 0px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
  <table border="0" cellpadding="0" cellspacing="0" class="image_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
  <tr>
  <td class="pad" style="width:100%;padding-right:0px;padding-left:0px;">
<div align="center" class="alignment" style="line-height:10px"><img alt="Contacts" class="fullMobileWidth" src="https://res.cloudinary.com/edrj/image/upload/v1661230638/contacts_no-bg_pmpac3.gif" style="display: block; height: auto; border: 0; width: 646px; max-width: 100%;" title="Contacts" width="646"/></div>
</td>
</tr>
</table>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-4" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tbody>
<tr>
<td>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; color: #000000; width: 680px;" width="680">
<tbody>
<tr>
<td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-left: 50px; padding-right: 50px; vertical-align: top; padding-top: 0px; padding-bottom: 40px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
<table border="0" cellpadding="0" cellspacing="0" class="heading_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tr>
<td class="pad" style="width:100%;text-align:center;padding-top:15px;padding-bottom:10px;">
<h3 style="margin: 0; color: #49E930; font-size: 28px; font-family: Poppins, Arial, Helvetica, sans-serif; line-height: 120%; text-align: center; direction: ltr; font-weight: 400; letter-spacing: normal; margin-top: 0; margin-bottom: 0;"><span class="tinyMce-placeholder">Somos una plataforma que te acerca a tu deporte favorito</span></h3>
</td>
</tr>
</table>
<table border="0" cellpadding="20" cellspacing="0" class="divider_block block-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tr>
<td class="pad">
<div align="center" class="alignment">
<table border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="15%">
<tr>
<td class="divider_inner" style="font-size: 1px; line-height: 1px; border-top: 3px solid #49E930;"><span> </span></td>
</tr>
</table>
</div>
</td>
</tr>
</table>
<table border="0" cellpadding="0" cellspacing="0" class="text_block block-3" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
<tr>
<td class="pad" style="padding-bottom:15px;padding-left:15px;padding-right:15px;padding-top:10px;">
<div style="font-family: sans-serif">
<div class="txtTinyMce-wrapper" style="font-size: 12px; mso-line-height-alt: 18px; color: #020b22; line-height: 1.5; font-family: Poppins, Arial, Helvetica, sans-serif;">
<div class="txtTinyMce-wrapper" style="font-size: 12px; mso-line-height-alt: 18px; color: #020b22; line-height: 1.5; font-family: Poppins, Arial, Helvetica, sans-serif;">
<p style="margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 30px;"><span class="tinyMce-placeholder" style="font-size:20px;">Conoce personas que comparten tu pasion por este deporte</span></p>
</div>
</div>
</td>
</tr>
</table>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-8" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tbody>
<tr>
<td>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; color: #000000; width: 680px;" width="680">
<tbody>
<tr>
<td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-left: 40px; padding-right: 40px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="50%">
<table border="0" cellpadding="0" cellspacing="0" class="heading_block block-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tr>
<td class="pad" style="width:100%;text-align:center;padding-top:55px;padding-bottom:10px;">
<h3 style="margin: 0; color: #49E930; font-size: 24px; font-family: Poppins, Arial, Helvetica, sans-serif; line-height: 120%; text-align: left; direction: ltr; font-weight: 400; letter-spacing: normal; margin-top: 0; margin-bottom: 0;"><strong><span class="tinyMce-placeholder">Reserva tu cancha</span></strong></h3>
</td>
</tr>
</table>
<table border="0" cellpadding="0" cellspacing="0" class="text_block block-4" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
<tr>
<td class="pad" style="padding-top:20px;padding-bottom:40px;">
<div style="font-family: sans-serif">
<div class="txtTinyMce-wrapper" style="font-size: 12px; mso-line-height-alt: 18px; color: #2d2d2d; line-height: 1.5; font-family: Poppins, Arial, Helvetica, sans-serif;">
<p style="margin: 0; font-size: 14px; text-align: left; mso-line-height-alt: 24px;"><span style="font-size:16px;">Reserva la cancha que mas combine con tu estilo y conviertete en el mejor de este deporte.</span></p>
</div>
</div>
</td>
</tr>
</table>
</td>
<td class="column column-2" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="50%">
<table border="0" cellpadding="0" cellspacing="0" class="image_block block-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tr>
<td class="pad" style="width:100%;padding-right:0px;padding-left:0px;padding-top:5px;padding-bottom:5px;">
<div align="center" class="alignment" style="line-height:10px"><img alt="Meeting Room" src="https://res.cloudinary.com/edrj/image/upload/v1661230637/athlete-posing-in-action_z2ogmo.png" style="display: block; height: auto; border: 0; width: 340px; max-width: 100%;" title="Meeting Room" width="340"/></div>
</td>
</tr>
</table>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-12" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tbody>
<tr>
<td>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #fafafa; color: #000000; width: 680px;" width="680">
<tbody>
<tr class="reverse">
<td class="column column-1 first" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-left: 30px; padding-right: 30px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="50%">
<div class="border">
<table border="0" cellpadding="0" cellspacing="0" class="heading_block block-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tr>
<td class="pad" style="width:100%;text-align:center;padding-top:35px;padding-bottom:40px;">
<h3 style="margin: 0; color: #49E930; font-size: 24px; font-family: Poppins, Arial, Helvetica, sans-serif; line-height: 120%; text-align: center; direction: ltr; font-weight: 400; letter-spacing: normal; margin-top: 0; margin-bottom: 0;"><strong><span class="tinyMce-placeholder">Haz tu primer reserva</span></strong></h3>
</td>
</tr>
</table>
</div>
</td>
<td class="column column-2 last" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-left: 30px; padding-right: 30px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="50%">
<div class="border">
<table border="0" cellpadding="0" cellspacing="0" class="button_block block-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tr>
<td class="pad" style="text-align:center;padding-top:25px;padding-bottom:50px;">
<div align="center" class="alignment">
<a style="cursor: pointer; text-decoration:none;display:inline-block;color:#2d2d2d;background-color:transparent;border-radius:30px;width:auto;border-top:2px solid #49E930;font-weight:400;border-right:2px solid #49E930;border-bottom:2px solid #49E930;border-left:2px solid #49E930;padding-top:5px;padding-bottom:5px;font-family:Poppins, Arial, Helvetica, sans-serif;text-align:center;mso-border-alt:none;word-break:keep-all;" href="https://padelapp.netlify.app/" target="_blank"><span style="padding-left:30px;padding-right:30px;font-size:16px;display:inline-block;letter-spacing:normal;"><span style="font-size: 16px; line-height: 2; word-break: break-word; mso-line-height-alt: 32px;"><span class="tinyMce-placeholder" data-mce-style="line-height: 24px;" style="line-height: 24px;">Ir al sitio</span></span></span></a>
</div>
</td>
</tr>
</table>
</div>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-13" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tbody>
<tr>
<td>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #49E930; color: #000000; width: 680px;" width="680">
<tbody>
<tr>
<td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 25px; padding-bottom: 25px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
<table border="0" cellpadding="0" cellspacing="0" class="heading_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tr>
<td class="pad" style="width:100%;text-align:center;padding-top:15px;padding-bottom:25px;">
<h3 style="margin: 0; color: #ffffff; font-size: 24px; font-family: Poppins, Arial, Helvetica, sans-serif; line-height: 120%; text-align: center; direction: ltr; font-weight: 400; letter-spacing: normal; margin-top: 0; margin-bottom: 0;"><strong><span class="tinyMce-placeholder">No olvides seguirnos!</span></strong></h3>
</td>
</tr>
</table>
<table border="0" cellpadding="10" cellspacing="0" class="social_block block-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tr>
<td class="pad">
<div class="alignment" style="text-align:center;">
<table border="0" cellpadding="0" cellspacing="0" class="social-table" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; display: inline-block;" width="108px">
<tr>
<td style="padding:0 2px 0 2px;"><a href="https://www.facebook.com/" target="_blank"><img alt="Facebook" height="32" src="https://res.cloudinary.com/edrj/image/upload/v1661230638/facebook2x_t95lkg.png" style="display: block; height: auto; border: 0;" title="facebook" width="32"/></a></td>
<td style="padding:0 2px 0 2px;"><a href="https://www.twitter.com/" target="_blank"><img alt="Twitter" height="32" src="https://res.cloudinary.com/edrj/image/upload/v1661230638/twitter2x_bsryv6.png" style="display: block; height: auto; border: 0;" title="twitter" width="32"/></a></td>
</tr>
</table>
</div>
</td>
</tr>
</table>
<table border="0" cellpadding="20" cellspacing="0" class="text_block block-3" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
<tr>
<td class="pad">
<div style="font-family: sans-serif">
<div class="txtTinyMce-wrapper" style="font-size: 12px; font-family: Poppins, Arial, Helvetica, sans-serif; mso-line-height-alt: 18px; color: #fafafa; line-height: 1.5;">
<p style="margin: 0; font-size: 10px; text-align: center; mso-line-height-alt: 15px;"><span style="font-size:10px;"><span style="">© 2022 Padel Field.</span></span><span style="font-size:10px;"><span style=""> All Rights Reserved.</span></span></p>
</div>
</div>
</td>
</tr>
</table>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
</body>
</html>
  `;
};
