import CryptoJS from 'crypto-js'

/**
 * 加密
 * @param {*} paramStr 需要加密的参数
 * @param {*} key 秘钥
 */
export function encrypt (paramStr, key) {
  key = CryptoJS.enc.Utf8.parse(key || '7d73ed9d4afb30d2e3c24fe54ee7e5cf') // 秘钥
  var iv = CryptoJS.enc.Utf8.parse('a25f9d68aa0a3bc8')
  var encrypted = CryptoJS.AES.encrypt(paramStr, key, {
    iv: iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.ZeroPadding
  })
  return encrypted.toString()
}
/**
 * 解密
 * @param {*} paramStr 需要解密的参数
 */
export function decrypt (paramStr) {
  var key = CryptoJS.enc.Utf8.parse('7d73ed9d4afb30d2e3c24fe54ee7e5cf') // 秘钥
  var iv = CryptoJS.enc.Utf8.parse('a25f9d68aa0a3bc8')
  var decrypted = CryptoJS.AES.decrypt(paramStr, key, {
    iv: iv,
    padding: CryptoJS.pad.ZeroPadding
  })
  return decrypted.toString(CryptoJS.enc.Utf8)
}
