
export const email= /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
export const cap= /^(V-|I-)?[0-9]{5}$/;
export const number= /^-?\d+$/;
export const noNumber= /^([^0-9]*)$/;
export const onlyDigit= /^([^0-9]*)$/;
export const integer= /^\d+$/;
export const float=/^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)$/;
export const negative= /^-\d*\.?\d+$/;
export const genericPhoneNumber = /(^[0-9\/\\]*)$/;
export const codiceFiscale =/^(?:(?:[B-DF-HJ-NP-TV-Z]|[AEIOU])[AEIOU][AEIOUX]|[B-DF-HJ-NP-TV-Z]{2}[A-Z]){2}[\dLMNP-V]{2}(?:[A-EHLMPR-T](?:[04LQ][1-9MNP-V]|[1256LMRS][\dLMNP-V])|[DHPS][37PT][0L]|[ACELMRT][37PT][01LM])(?:[A-MZ][1-9MNP-V][\dLMNP-V]{2}|[A-M][0L](?:[1-9MNP-V][\dLMNP-V]|[0L][1-9MNP-V]))[A-Z]$/i;
/**
 * italianMobilePhone [warning not update]
 */
export const italianMobilePhone= /^([+]39)?((38[{8,9}|0])|(34[{7-9}|0])|(36[6|8|0])|(33[{3-9}|0])|(32[{8,9}]))([\d]{7})$/;
