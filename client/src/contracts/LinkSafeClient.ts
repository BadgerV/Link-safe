/* eslint-disable */
/**
 * This file was automatically generated by @algorandfoundation/algokit-client-generator.
 * DO NOT MODIFY IT BY HAND.
 * requires: @algorandfoundation/algokit-utils: ^2
 */
import * as algokit from '@algorandfoundation/algokit-utils'
import type {
  ABIAppCallArg,
  AppCallTransactionResult,
  AppCallTransactionResultOfType,
  AppCompilationResult,
  AppReference,
  AppState,
  CoreAppCallArgs,
  RawAppCallArgs,
  TealTemplateParams,
} from '@algorandfoundation/algokit-utils/types/app'
import type {
  AppClientCallCoreParams,
  AppClientCompilationParams,
  AppClientDeployCoreParams,
  AppDetails,
  ApplicationClient,
} from '@algorandfoundation/algokit-utils/types/app-client'
import type { AppSpec } from '@algorandfoundation/algokit-utils/types/app-spec'
import type { SendTransactionResult, TransactionToSign, SendTransactionFrom, SendTransactionParams } from '@algorandfoundation/algokit-utils/types/transaction'
import type { ABIResult, TransactionWithSigner } from 'algosdk'
import { Algodv2, OnApplicationComplete, Transaction, AtomicTransactionComposer, modelsv2 } from 'algosdk'
export const APP_SPEC: AppSpec = {
  "hints": {
    "createSafe(string,string,uint64,uint64)(address,string,uint64,uint64,uint64,bool)": {
      "call_config": {
        "no_op": "CALL"
      }
    },
    "getVaultById(string)(address,string,uint64,uint64,uint64,bool)": {
      "call_config": {
        "no_op": "CALL"
      }
    },
    "createApplication()void": {
      "call_config": {
        "no_op": "CREATE"
      }
    }
  },
  "bare_call_config": {
    "no_op": "NEVER",
    "opt_in": "NEVER",
    "close_out": "NEVER",
    "update_application": "NEVER",
    "delete_application": "NEVER"
  },
  "schema": {
    "local": {
      "declared": {},
      "reserved": {}
    },
    "global": {
      "declared": {
        "SafeCount": {
          "type": "uint64",
          "key": "count"
        }
      },
      "reserved": {}
    }
  },
  "state": {
    "global": {
      "num_byte_slices": 0,
      "num_uints": 1
    },
    "local": {
      "num_byte_slices": 0,
      "num_uints": 0
    }
  },
  "source": {
    "approval": "I3ByYWdtYSB2ZXJzaW9uIDEwCmludGNibG9jayAxCmJ5dGVjYmxvY2sgMHg3NjYxNzU2Yzc0IDB4IDB4NjM2Zjc1NmU3NCAweDE1MWY3Yzc1CgovLyBUaGlzIFRFQUwgd2FzIGdlbmVyYXRlZCBieSBURUFMU2NyaXB0IHYwLjEwNS4zCi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbGdvcmFuZGZvdW5kYXRpb24vVEVBTFNjcmlwdAoKLy8gVGhpcyBjb250cmFjdCBpcyBjb21wbGlhbnQgd2l0aCBhbmQvb3IgaW1wbGVtZW50cyB0aGUgZm9sbG93aW5nIEFSQ3M6IFsgQVJDNCBdCgovLyBUaGUgZm9sbG93aW5nIHRlbiBsaW5lcyBvZiBURUFMIGhhbmRsZSBpbml0aWFsIHByb2dyYW0gZmxvdwovLyBUaGlzIHBhdHRlcm4gaXMgdXNlZCB0byBtYWtlIGl0IGVhc3kgZm9yIGFueW9uZSB0byBwYXJzZSB0aGUgc3RhcnQgb2YgdGhlIHByb2dyYW0gYW5kIGRldGVybWluZSBpZiBhIHNwZWNpZmljIGFjdGlvbiBpcyBhbGxvd2VkCi8vIEhlcmUsIGFjdGlvbiByZWZlcnMgdG8gdGhlIE9uQ29tcGxldGUgaW4gY29tYmluYXRpb24gd2l0aCB3aGV0aGVyIHRoZSBhcHAgaXMgYmVpbmcgY3JlYXRlZCBvciBjYWxsZWQKLy8gRXZlcnkgcG9zc2libGUgYWN0aW9uIGZvciB0aGlzIGNvbnRyYWN0IGlzIHJlcHJlc2VudGVkIGluIHRoZSBzd2l0Y2ggc3RhdGVtZW50Ci8vIElmIHRoZSBhY3Rpb24gaXMgbm90IGltcGxlbWVudGVkIGluIHRoZSBjb250cmFjdCwgaXRzIHJlc3BlY3RpdmUgYnJhbmNoIHdpbGwgYmUgIipOT1RfSU1QTEVNRU5URUQiIHdoaWNoIGp1c3QgY29udGFpbnMgImVyciIKdHhuIEFwcGxpY2F0aW9uSUQKIQpwdXNoaW50IDYKKgp0eG4gT25Db21wbGV0aW9uCisKc3dpdGNoICpjYWxsX05vT3AgKk5PVF9JTVBMRU1FTlRFRCAqTk9UX0lNUExFTUVOVEVEICpOT1RfSU1QTEVNRU5URUQgKk5PVF9JTVBMRU1FTlRFRCAqTk9UX0lNUExFTUVOVEVEICpjcmVhdGVfTm9PcCAqTk9UX0lNUExFTUVOVEVEICpOT1RfSU1QTEVNRU5URUQgKk5PVF9JTVBMRU1FTlRFRCAqTk9UX0lNUExFTUVOVEVEICpOT1RfSU1QTEVNRU5URUQKCipOT1RfSU1QTEVNRU5URUQ6CgkvLyBUaGUgcmVxdWVzdGVkIGFjdGlvbiBpcyBub3QgaW1wbGVtZW50ZWQgaW4gdGhpcyBjb250cmFjdC4gQXJlIHlvdSB1c2luZyB0aGUgY29ycmVjdCBPbkNvbXBsZXRlPyBEaWQgeW91IHNldCB5b3VyIGFwcCBJRD8KCWVycgoKLy8gY3JlYXRlU2FmZShzdHJpbmcsc3RyaW5nLHVpbnQ2NCx1aW50NjQpKGFkZHJlc3Msc3RyaW5nLHVpbnQ2NCx1aW50NjQsdWludDY0LGJvb2wpCiphYmlfcm91dGVfY3JlYXRlU2FmZToKCS8vIFRoZSBBQkkgcmV0dXJuIHByZWZpeAoJYnl0ZWMgMyAvLyAweDE1MWY3Yzc1CgoJLy8gY3JlYXRlZDogdWludDY0Cgl0eG5hIEFwcGxpY2F0aW9uQXJncyA0CglidG9pCgoJLy8gbWluaW11bUJhbGFuY2U6IHVpbnQ2NAoJdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMwoJYnRvaQoKCS8vIG93bmVyOiBzdHJpbmcKCXR4bmEgQXBwbGljYXRpb25BcmdzIDIKCWV4dHJhY3QgMiAwCgoJLy8gaWQ6IHN0cmluZwoJdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMQoJZXh0cmFjdCAyIDAKCgkvLyBleGVjdXRlIGNyZWF0ZVNhZmUoc3RyaW5nLHN0cmluZyx1aW50NjQsdWludDY0KShhZGRyZXNzLHN0cmluZyx1aW50NjQsdWludDY0LHVpbnQ2NCxib29sKQoJY2FsbHN1YiBjcmVhdGVTYWZlCgljb25jYXQKCWxvZwoJaW50YyAwIC8vIDEKCXJldHVybgoKLy8gY3JlYXRlU2FmZShpZDogc3RyaW5nLCBvd25lcjogc3RyaW5nLCBtaW5pbXVtQmFsYW5jZTogdWludDY0LCBjcmVhdGVkOiB1aW50NjQpOiBTYWZlSW5mbwpjcmVhdGVTYWZlOgoJcHJvdG8gNCAxCgoJLy8gUHVzaCBlbXB0eSBieXRlcyBhZnRlciB0aGUgZnJhbWUgcG9pbnRlciB0byByZXNlcnZlIHNwYWNlIGZvciBsb2NhbCB2YXJpYWJsZXMKCWJ5dGVjIDEgLy8gMHgKCWR1cAoKCS8vIGNvbnRyYWN0cy9saW5rLXNhZmUuYWxnby50czozMAoJLy8gYXNzZXJ0KCF0aGlzLnNhZmVzKGlkKS5leGlzdHMsICdWYXVsdCBhbHJlYWR5IGV4aXN0cycpCglieXRlYyAwIC8vICAidmF1bHQiCglmcmFtZV9kaWcgLTEgLy8gaWQ6IHN0cmluZwoJZHVwCglsZW4KCWl0b2IKCWV4dHJhY3QgNiAyCglzd2FwCgljb25jYXQKCWNvbmNhdAoJYm94X2xlbgoJc3dhcAoJcG9wCgkhCgoJLy8gVmF1bHQgYWxyZWFkeSBleGlzdHMKCWFzc2VydAoKCS8vIGNvbnRyYWN0cy9saW5rLXNhZmUuYWxnby50czozNAoJLy8gdmF1bHRJbmZvOiBTYWZlSW5mbyA9IHsKCS8vICAgICAgICAgICAgIGFkZHJlc3M6IHRoaXMuYXBwLmFkZHJlc3MsCgkvLyAgICAgICAgICAgICBvd25lcjogb3duZXIsCgkvLyAgICAgICAgICAgICBtaW5pbXVtQmFsYW5jZTogbWluaW11bUJhbGFuY2UsCgkvLyAgICAgICAgICAgICBjcmVhdGVkVGltZVN0YW1wOiBjcmVhdGVkLAoJLy8gICAgICAgICAgICAgbGFzdFVwZGF0ZWQ6IDAsCgkvLyAgICAgICAgICAgICBpc0FjdGl2ZTogdHJ1ZQoJLy8gICAgICAgICB9CglieXRlYyAxIC8vICBpbml0aWFsIGhlYWQKCWJ5dGVjIDEgLy8gIGluaXRpYWwgdGFpbAoJcHVzaGJ5dGVzIDB4MDAzYSAvLyBpbml0aWFsIGhlYWQgb2Zmc2V0CglnbG9iYWwgQ3VycmVudEFwcGxpY2F0aW9uQWRkcmVzcwoJY2FsbHN1YiAqcHJvY2Vzc19zdGF0aWNfdHVwbGVfZWxlbWVudAoJZnJhbWVfZGlnIC0yIC8vIG93bmVyOiBzdHJpbmcKCWR1cAoJbGVuCglpdG9iCglleHRyYWN0IDYgMgoJc3dhcAoJY29uY2F0CgljYWxsc3ViICpwcm9jZXNzX2R5bmFtaWNfdHVwbGVfZWxlbWVudAoJZnJhbWVfZGlnIC0zIC8vIG1pbmltdW1CYWxhbmNlOiB1aW50NjQKCWl0b2IKCWNhbGxzdWIgKnByb2Nlc3Nfc3RhdGljX3R1cGxlX2VsZW1lbnQKCWZyYW1lX2RpZyAtNCAvLyBjcmVhdGVkOiB1aW50NjQKCWl0b2IKCWNhbGxzdWIgKnByb2Nlc3Nfc3RhdGljX3R1cGxlX2VsZW1lbnQKCXB1c2hieXRlcyAweDAwMDAwMDAwMDAwMDAwMDAKCWNhbGxzdWIgKnByb2Nlc3Nfc3RhdGljX3R1cGxlX2VsZW1lbnQKCXB1c2hieXRlcyAweDAwCglwdXNoaW50IDAKCWludGMgMCAvLyAxCglzZXRiaXQKCWNhbGxzdWIgKnByb2Nlc3Nfc3RhdGljX3R1cGxlX2VsZW1lbnQKCWNvbmNhdAoJcG9wIC8vIHBvcCBoZWFkIG9mZnNldAoJY29uY2F0IC8vIGNvbmNhdCBoZWFkIGFuZCB0YWlsCglmcmFtZV9idXJ5IDAgLy8gdmF1bHRJbmZvOiBTYWZlSW5mbwoKCS8vIGNvbnRyYWN0cy9saW5rLXNhZmUuYWxnby50czo0NAoJLy8gdGhpcy5zYWZlcyhpZCkudmFsdWUgPSB2YXVsdEluZm8KCWJ5dGVjIDAgLy8gICJ2YXVsdCIKCWZyYW1lX2RpZyAtMSAvLyBpZDogc3RyaW5nCglkdXAKCWxlbgoJaXRvYgoJZXh0cmFjdCA2IDIKCXN3YXAKCWNvbmNhdAoJY29uY2F0CglkdXAKCWJveF9kZWwKCXBvcAoJZnJhbWVfZGlnIDAgLy8gdmF1bHRJbmZvOiBTYWZlSW5mbwoJYm94X3B1dAoKCS8vIGNvbnRyYWN0cy9saW5rLXNhZmUuYWxnby50czo0NwoJLy8gY3VycmVudENvdW50ID0gdGhpcy5TYWZlQ291bnQudmFsdWUKCWJ5dGVjIDIgLy8gICJjb3VudCIKCWFwcF9nbG9iYWxfZ2V0CglmcmFtZV9idXJ5IDEgLy8gY3VycmVudENvdW50OiB1aW50NjQKCgkvLyBjb250cmFjdHMvbGluay1zYWZlLmFsZ28udHM6NDgKCS8vIHRoaXMuc2FmZUtleXMoY3VycmVudENvdW50KS52YWx1ZSA9IGlkCglwdXNoYnl0ZXMgMHg2YjY1Nzk3MyAvLyAia2V5cyIKCWZyYW1lX2RpZyAxIC8vIGN1cnJlbnRDb3VudDogdWludDY0CglpdG9iCgljb25jYXQKCWR1cAoJYm94X2RlbAoJcG9wCglmcmFtZV9kaWcgLTEgLy8gaWQ6IHN0cmluZwoJZHVwCglsZW4KCWl0b2IKCWV4dHJhY3QgNiAyCglzd2FwCgljb25jYXQKCWJveF9wdXQKCgkvLyBjb250cmFjdHMvbGluay1zYWZlLmFsZ28udHM6NTEKCS8vIHRoaXMuU2FmZUNvdW50LnZhbHVlID0gY3VycmVudENvdW50ICsgMQoJYnl0ZWMgMiAvLyAgImNvdW50IgoJZnJhbWVfZGlnIDEgLy8gY3VycmVudENvdW50OiB1aW50NjQKCWludGMgMCAvLyAxCgkrCglhcHBfZ2xvYmFsX3B1dAoKCS8vIGNvbnRyYWN0cy9saW5rLXNhZmUuYWxnby50czo1MgoJLy8gcmV0dXJuIHZhdWx0SW5mbzsKCWZyYW1lX2RpZyAwIC8vIHZhdWx0SW5mbzogU2FmZUluZm8KCgkvLyBzZXQgdGhlIHN1YnJvdXRpbmUgcmV0dXJuIHZhbHVlCglmcmFtZV9idXJ5IDAKCgkvLyBwb3AgYWxsIGxvY2FsIHZhcmlhYmxlcyBmcm9tIHRoZSBzdGFjawoJcG9wbiAxCglyZXRzdWIKCi8vIGdldFZhdWx0QnlJZChzdHJpbmcpKGFkZHJlc3Msc3RyaW5nLHVpbnQ2NCx1aW50NjQsdWludDY0LGJvb2wpCiphYmlfcm91dGVfZ2V0VmF1bHRCeUlkOgoJLy8gVGhlIEFCSSByZXR1cm4gcHJlZml4CglieXRlYyAzIC8vIDB4MTUxZjdjNzUKCgkvLyBpZDogc3RyaW5nCgl0eG5hIEFwcGxpY2F0aW9uQXJncyAxCglleHRyYWN0IDIgMAoKCS8vIGV4ZWN1dGUgZ2V0VmF1bHRCeUlkKHN0cmluZykoYWRkcmVzcyxzdHJpbmcsdWludDY0LHVpbnQ2NCx1aW50NjQsYm9vbCkKCWNhbGxzdWIgZ2V0VmF1bHRCeUlkCgljb25jYXQKCWxvZwoJaW50YyAwIC8vIDEKCXJldHVybgoKLy8gZ2V0VmF1bHRCeUlkKGlkOiBzdHJpbmcpOiBTYWZlSW5mbwpnZXRWYXVsdEJ5SWQ6Cglwcm90byAxIDEKCgkvLyBjb250cmFjdHMvbGluay1zYWZlLmFsZ28udHM6NTYKCS8vIGFzc2VydCh0aGlzLnNhZmVzKGlkKS5leGlzdHMsICdWYXVsdCBkb2VzIG5vdCBleGlzdCcpCglieXRlYyAwIC8vICAidmF1bHQiCglmcmFtZV9kaWcgLTEgLy8gaWQ6IHN0cmluZwoJZHVwCglsZW4KCWl0b2IKCWV4dHJhY3QgNiAyCglzd2FwCgljb25jYXQKCWNvbmNhdAoJYm94X2xlbgoJc3dhcAoJcG9wCgoJLy8gVmF1bHQgZG9lcyBub3QgZXhpc3QKCWFzc2VydAoKCS8vIGNvbnRyYWN0cy9saW5rLXNhZmUuYWxnby50czo1NwoJLy8gcmV0dXJuIHRoaXMuc2FmZXMoaWQpLnZhbHVlOwoJYnl0ZWMgMCAvLyAgInZhdWx0IgoJZnJhbWVfZGlnIC0xIC8vIGlkOiBzdHJpbmcKCWR1cAoJbGVuCglpdG9iCglleHRyYWN0IDYgMgoJc3dhcAoJY29uY2F0Cgljb25jYXQKCWJveF9nZXQKCgkvLyBib3ggdmFsdWUgZG9lcyBub3QgZXhpc3Q6IHRoaXMuc2FmZXMoaWQpLnZhbHVlCglhc3NlcnQKCXJldHN1YgoKKmFiaV9yb3V0ZV9jcmVhdGVBcHBsaWNhdGlvbjoKCWludGMgMCAvLyAxCglyZXR1cm4KCipjcmVhdGVfTm9PcDoKCXB1c2hieXRlcyAweGI4NDQ3YjM2IC8vIG1ldGhvZCAiY3JlYXRlQXBwbGljYXRpb24oKXZvaWQiCgl0eG5hIEFwcGxpY2F0aW9uQXJncyAwCgltYXRjaCAqYWJpX3JvdXRlX2NyZWF0ZUFwcGxpY2F0aW9uCgoJLy8gdGhpcyBjb250cmFjdCBkb2VzIG5vdCBpbXBsZW1lbnQgdGhlIGdpdmVuIEFCSSBtZXRob2QgZm9yIGNyZWF0ZSBOb09wCgllcnIKCipjYWxsX05vT3A6CglwdXNoYnl0ZXMgMHgyZGJhZGQ5ZiAvLyBtZXRob2QgImNyZWF0ZVNhZmUoc3RyaW5nLHN0cmluZyx1aW50NjQsdWludDY0KShhZGRyZXNzLHN0cmluZyx1aW50NjQsdWludDY0LHVpbnQ2NCxib29sKSIKCXB1c2hieXRlcyAweGQzMDE2Y2I3IC8vIG1ldGhvZCAiZ2V0VmF1bHRCeUlkKHN0cmluZykoYWRkcmVzcyxzdHJpbmcsdWludDY0LHVpbnQ2NCx1aW50NjQsYm9vbCkiCgl0eG5hIEFwcGxpY2F0aW9uQXJncyAwCgltYXRjaCAqYWJpX3JvdXRlX2NyZWF0ZVNhZmUgKmFiaV9yb3V0ZV9nZXRWYXVsdEJ5SWQKCgkvLyB0aGlzIGNvbnRyYWN0IGRvZXMgbm90IGltcGxlbWVudCB0aGUgZ2l2ZW4gQUJJIG1ldGhvZCBmb3IgY2FsbCBOb09wCgllcnIKCipwcm9jZXNzX3N0YXRpY190dXBsZV9lbGVtZW50OgoJcHJvdG8gNCAzCglmcmFtZV9kaWcgLTQgLy8gdHVwbGUgaGVhZAoJZnJhbWVfZGlnIC0xIC8vIGVsZW1lbnQKCWNvbmNhdAoJZnJhbWVfZGlnIC0zIC8vIHR1cGxlIHRhaWwKCWZyYW1lX2RpZyAtMiAvLyBoZWFkIG9mZnNldAoJcmV0c3ViCgoqcHJvY2Vzc19keW5hbWljX3R1cGxlX2VsZW1lbnQ6Cglwcm90byA0IDMKCWZyYW1lX2RpZyAtNCAvLyB0dXBsZSBoZWFkCglmcmFtZV9kaWcgLTIgLy8gaGVhZCBvZmZzZXQKCWNvbmNhdAoJZnJhbWVfYnVyeSAtNCAvLyB0dXBsZSBoZWFkCglmcmFtZV9kaWcgLTEgLy8gZWxlbWVudAoJZHVwCglsZW4KCWZyYW1lX2RpZyAtMiAvLyBoZWFkIG9mZnNldAoJYnRvaQoJKwoJaXRvYgoJZXh0cmFjdCA2IDIKCWZyYW1lX2J1cnkgLTIgLy8gaGVhZCBvZmZzZXQKCWZyYW1lX2RpZyAtMyAvLyB0dXBsZSB0YWlsCglzd2FwCgljb25jYXQKCWZyYW1lX2J1cnkgLTMgLy8gdHVwbGUgdGFpbAoJZnJhbWVfZGlnIC00IC8vIHR1cGxlIGhlYWQKCWZyYW1lX2RpZyAtMyAvLyB0dXBsZSB0YWlsCglmcmFtZV9kaWcgLTIgLy8gaGVhZCBvZmZzZXQKCXJldHN1Yg==",
    "clear": "I3ByYWdtYSB2ZXJzaW9uIDEw"
  },
  "contract": {
    "name": "LinkSafe",
    "desc": "",
    "methods": [
      {
        "name": "createSafe",
        "args": [
          {
            "name": "id",
            "type": "string"
          },
          {
            "name": "owner",
            "type": "string"
          },
          {
            "name": "minimumBalance",
            "type": "uint64"
          },
          {
            "name": "created",
            "type": "uint64"
          }
        ],
        "returns": {
          "type": "(address,string,uint64,uint64,uint64,bool)"
        }
      },
      {
        "name": "getVaultById",
        "args": [
          {
            "name": "id",
            "type": "string"
          }
        ],
        "returns": {
          "type": "(address,string,uint64,uint64,uint64,bool)"
        }
      },
      {
        "name": "createApplication",
        "args": [],
        "returns": {
          "type": "void"
        }
      }
    ]
  }
}

/**
 * Defines an onCompletionAction of 'no_op'
 */
export type OnCompleteNoOp =  { onCompleteAction?: 'no_op' | OnApplicationComplete.NoOpOC }
/**
 * Defines an onCompletionAction of 'opt_in'
 */
export type OnCompleteOptIn =  { onCompleteAction: 'opt_in' | OnApplicationComplete.OptInOC }
/**
 * Defines an onCompletionAction of 'close_out'
 */
export type OnCompleteCloseOut =  { onCompleteAction: 'close_out' | OnApplicationComplete.CloseOutOC }
/**
 * Defines an onCompletionAction of 'delete_application'
 */
export type OnCompleteDelApp =  { onCompleteAction: 'delete_application' | OnApplicationComplete.DeleteApplicationOC }
/**
 * Defines an onCompletionAction of 'update_application'
 */
export type OnCompleteUpdApp =  { onCompleteAction: 'update_application' | OnApplicationComplete.UpdateApplicationOC }
/**
 * A state record containing a single unsigned integer
 */
export type IntegerState = {
  /**
   * Gets the state value as a BigInt.
   */
  asBigInt(): bigint
  /**
   * Gets the state value as a number.
   */
  asNumber(): number
}
/**
 * A state record containing binary data
 */
export type BinaryState = {
  /**
   * Gets the state value as a Uint8Array
   */
  asByteArray(): Uint8Array
  /**
   * Gets the state value as a string
   */
  asString(): string
}

export type AppCreateCallTransactionResult = AppCallTransactionResult & Partial<AppCompilationResult> & AppReference
export type AppUpdateCallTransactionResult = AppCallTransactionResult & Partial<AppCompilationResult>

export type AppClientComposeCallCoreParams = Omit<AppClientCallCoreParams, 'sendParams'> & {
  sendParams?: Omit<SendTransactionParams, 'skipSending' | 'atc' | 'skipWaiting' | 'maxRoundsToWaitForConfirmation' | 'populateAppCallResources'>
}
export type AppClientComposeExecuteParams = Pick<SendTransactionParams, 'skipWaiting' | 'maxRoundsToWaitForConfirmation' | 'populateAppCallResources' | 'suppressLog'>

/**
 * Defines the types of available calls and state of the LinkSafe smart contract.
 */
export type LinkSafe = {
  /**
   * Maps method signatures / names to their argument and return types.
   */
  methods:
    & Record<'createSafe(string,string,uint64,uint64)(address,string,uint64,uint64,uint64,bool)' | 'createSafe', {
      argsObj: {
        id: string
        owner: string
        minimumBalance: bigint | number
        created: bigint | number
      }
      argsTuple: [id: string, owner: string, minimumBalance: bigint | number, created: bigint | number]
      returns: [string, string, bigint, bigint, bigint, boolean]
    }>
    & Record<'getVaultById(string)(address,string,uint64,uint64,uint64,bool)' | 'getVaultById', {
      argsObj: {
        id: string
      }
      argsTuple: [id: string]
      returns: [string, string, bigint, bigint, bigint, boolean]
    }>
    & Record<'createApplication()void' | 'createApplication', {
      argsObj: {
      }
      argsTuple: []
      returns: void
    }>
  /**
   * Defines the shape of the global and local state of the application.
   */
  state: {
    global: {
      'count'?: IntegerState
    }
  }
}
/**
 * Defines the possible abi call signatures
 */
export type LinkSafeSig = keyof LinkSafe['methods']
/**
 * Defines an object containing all relevant parameters for a single call to the contract. Where TSignature is undefined, a bare call is made
 */
export type TypedCallParams<TSignature extends LinkSafeSig | undefined> = {
  method: TSignature
  methodArgs: TSignature extends undefined ? undefined : Array<ABIAppCallArg | undefined>
} & AppClientCallCoreParams & CoreAppCallArgs
/**
 * Defines the arguments required for a bare call
 */
export type BareCallArgs = Omit<RawAppCallArgs, keyof CoreAppCallArgs>
/**
 * Maps a method signature from the LinkSafe smart contract to the method's arguments in either tuple of struct form
 */
export type MethodArgs<TSignature extends LinkSafeSig> = LinkSafe['methods'][TSignature]['argsObj' | 'argsTuple']
/**
 * Maps a method signature from the LinkSafe smart contract to the method's return type
 */
export type MethodReturn<TSignature extends LinkSafeSig> = LinkSafe['methods'][TSignature]['returns']

/**
 * A factory for available 'create' calls
 */
export type LinkSafeCreateCalls = (typeof LinkSafeCallFactory)['create']
/**
 * Defines supported create methods for this smart contract
 */
export type LinkSafeCreateCallParams =
  | (TypedCallParams<'createApplication()void'> & (OnCompleteNoOp))
/**
 * Defines arguments required for the deploy method.
 */
export type LinkSafeDeployArgs = {
  deployTimeParams?: TealTemplateParams
  /**
   * A delegate which takes a create call factory and returns the create call params for this smart contract
   */
  createCall?: (callFactory: LinkSafeCreateCalls) => LinkSafeCreateCallParams
}


/**
 * Exposes methods for constructing all available smart contract calls
 */
export abstract class LinkSafeCallFactory {
  /**
   * Gets available create call factories
   */
  static get create() {
    return {
      /**
       * Constructs a create call for the LinkSafe smart contract using the createApplication()void ABI method
       *
       * @param args Any args for the contract call
       * @param params Any additional parameters for the call
       * @returns A TypedCallParams object for the call
       */
      createApplication(args: MethodArgs<'createApplication()void'>, params: AppClientCallCoreParams & CoreAppCallArgs & AppClientCompilationParams & (OnCompleteNoOp) = {}) {
        return {
          method: 'createApplication()void' as const,
          methodArgs: Array.isArray(args) ? args : [],
          ...params,
        }
      },
    }
  }

  /**
   * Constructs a no op call for the createSafe(string,string,uint64,uint64)(address,string,uint64,uint64,uint64,bool) ABI method
   *
   * @param args Any args for the contract call
   * @param params Any additional parameters for the call
   * @returns A TypedCallParams object for the call
   */
  static createSafe(args: MethodArgs<'createSafe(string,string,uint64,uint64)(address,string,uint64,uint64,uint64,bool)'>, params: AppClientCallCoreParams & CoreAppCallArgs) {
    return {
      method: 'createSafe(string,string,uint64,uint64)(address,string,uint64,uint64,uint64,bool)' as const,
      methodArgs: Array.isArray(args) ? args : [args.id, args.owner, args.minimumBalance, args.created],
      ...params,
    }
  }
  /**
   * Constructs a no op call for the getVaultById(string)(address,string,uint64,uint64,uint64,bool) ABI method
   *
   * @param args Any args for the contract call
   * @param params Any additional parameters for the call
   * @returns A TypedCallParams object for the call
   */
  static getVaultById(args: MethodArgs<'getVaultById(string)(address,string,uint64,uint64,uint64,bool)'>, params: AppClientCallCoreParams & CoreAppCallArgs) {
    return {
      method: 'getVaultById(string)(address,string,uint64,uint64,uint64,bool)' as const,
      methodArgs: Array.isArray(args) ? args : [args.id],
      ...params,
    }
  }
}

/**
 * A client to make calls to the LinkSafe smart contract
 */
export class LinkSafeClient {
  /**
   * The underlying `ApplicationClient` for when you want to have more flexibility
   */
  public readonly appClient: ApplicationClient

  private readonly sender: SendTransactionFrom | undefined

  /**
   * Creates a new instance of `LinkSafeClient`
   *
   * @param appDetails appDetails The details to identify the app to deploy
   * @param algod An algod client instance
   */
  constructor(appDetails: AppDetails, private algod: Algodv2) {
    this.sender = appDetails.sender
    this.appClient = algokit.getAppClient({
      ...appDetails,
      app: APP_SPEC
    }, algod)
  }

  /**
   * Checks for decode errors on the AppCallTransactionResult and maps the return value to the specified generic type
   *
   * @param result The AppCallTransactionResult to be mapped
   * @param returnValueFormatter An optional delegate to format the return value if required
   * @returns The smart contract response with an updated return value
   */
  protected mapReturnValue<TReturn, TResult extends AppCallTransactionResult = AppCallTransactionResult>(result: AppCallTransactionResult, returnValueFormatter?: (value: any) => TReturn): AppCallTransactionResultOfType<TReturn> & TResult {
    if(result.return?.decodeError) {
      throw result.return.decodeError
    }
    const returnValue = result.return?.returnValue !== undefined && returnValueFormatter !== undefined
      ? returnValueFormatter(result.return.returnValue)
      : result.return?.returnValue as TReturn | undefined
      return { ...result, return: returnValue } as AppCallTransactionResultOfType<TReturn> & TResult
  }

  /**
   * Calls the ABI method with the matching signature using an onCompletion code of NO_OP
   *
   * @param typedCallParams An object containing the method signature, args, and any other relevant parameters
   * @param returnValueFormatter An optional delegate which when provided will be used to map non-undefined return values to the target type
   * @returns The result of the smart contract call
   */
  public async call<TSignature extends keyof LinkSafe['methods']>(typedCallParams: TypedCallParams<TSignature>, returnValueFormatter?: (value: any) => MethodReturn<TSignature>) {
    return this.mapReturnValue<MethodReturn<TSignature>>(await this.appClient.call(typedCallParams), returnValueFormatter)
  }

  /**
   * Idempotently deploys the LinkSafe smart contract.
   *
   * @param params The arguments for the contract calls and any additional parameters for the call
   * @returns The deployment result
   */
  public deploy(params: LinkSafeDeployArgs & AppClientDeployCoreParams = {}): ReturnType<ApplicationClient['deploy']> {
    const createArgs = params.createCall?.(LinkSafeCallFactory.create)
    return this.appClient.deploy({
      ...params,
      createArgs,
      createOnCompleteAction: createArgs?.onCompleteAction,
    })
  }

  /**
   * Gets available create methods
   */
  public get create() {
    const $this = this
    return {
      /**
       * Creates a new instance of the LinkSafe smart contract using the createApplication()void ABI method.
       *
       * @param args The arguments for the smart contract call
       * @param params Any additional parameters for the call
       * @returns The create result
       */
      async createApplication(args: MethodArgs<'createApplication()void'>, params: AppClientCallCoreParams & AppClientCompilationParams & (OnCompleteNoOp) = {}) {
        return $this.mapReturnValue<MethodReturn<'createApplication()void'>, AppCreateCallTransactionResult>(await $this.appClient.create(LinkSafeCallFactory.create.createApplication(args, params)))
      },
    }
  }

  /**
   * Makes a clear_state call to an existing instance of the LinkSafe smart contract.
   *
   * @param args The arguments for the bare call
   * @returns The clear_state result
   */
  public clearState(args: BareCallArgs & AppClientCallCoreParams & CoreAppCallArgs = {}) {
    return this.appClient.clearState(args)
  }

  /**
   * Calls the createSafe(string,string,uint64,uint64)(address,string,uint64,uint64,uint64,bool) ABI method.
   *
   * @param args The arguments for the contract call
   * @param params Any additional parameters for the call
   * @returns The result of the call
   */
  public createSafe(args: MethodArgs<'createSafe(string,string,uint64,uint64)(address,string,uint64,uint64,uint64,bool)'>, params: AppClientCallCoreParams & CoreAppCallArgs = {}) {
    return this.call(LinkSafeCallFactory.createSafe(args, params))
  }

  /**
   * Calls the getVaultById(string)(address,string,uint64,uint64,uint64,bool) ABI method.
   *
   * @param args The arguments for the contract call
   * @param params Any additional parameters for the call
   * @returns The result of the call
   */
  public getVaultById(args: MethodArgs<'getVaultById(string)(address,string,uint64,uint64,uint64,bool)'>, params: AppClientCallCoreParams & CoreAppCallArgs = {}) {
    return this.call(LinkSafeCallFactory.getVaultById(args, params))
  }

  /**
   * Extracts a binary state value out of an AppState dictionary
   *
   * @param state The state dictionary containing the state value
   * @param key The key of the state value
   * @returns A BinaryState instance containing the state value, or undefined if the key was not found
   */
  private static getBinaryState(state: AppState, key: string): BinaryState | undefined {
    const value = state[key]
    if (!value) return undefined
    if (!('valueRaw' in value))
      throw new Error(`Failed to parse state value for ${key}; received an int when expected a byte array`)
    return {
      asString(): string {
        return value.value
      },
      asByteArray(): Uint8Array {
        return value.valueRaw
      }
    }
  }

  /**
   * Extracts a integer state value out of an AppState dictionary
   *
   * @param state The state dictionary containing the state value
   * @param key The key of the state value
   * @returns An IntegerState instance containing the state value, or undefined if the key was not found
   */
  private static getIntegerState(state: AppState, key: string): IntegerState | undefined {
    const value = state[key]
    if (!value) return undefined
    if ('valueRaw' in value)
      throw new Error(`Failed to parse state value for ${key}; received a byte array when expected a number`)
    return {
      asBigInt() {
        return typeof value.value === 'bigint' ? value.value : BigInt(value.value)
      },
      asNumber(): number {
        return typeof value.value === 'bigint' ? Number(value.value) : value.value
      },
    }
  }

  /**
   * Returns the smart contract's global state wrapped in a strongly typed accessor with options to format the stored value
   */
  public async getGlobalState(): Promise<LinkSafe['state']['global']> {
    const state = await this.appClient.getGlobalState()
    return {
      get count() {
        return LinkSafeClient.getIntegerState(state, 'count')
      },
    }
  }

  public compose(): LinkSafeComposer {
    const client = this
    const atc = new AtomicTransactionComposer()
    let promiseChain:Promise<unknown> = Promise.resolve()
    const resultMappers: Array<undefined | ((x: any) => any)> = []
    return {
      createSafe(args: MethodArgs<'createSafe(string,string,uint64,uint64)(address,string,uint64,uint64,uint64,bool)'>, params?: AppClientComposeCallCoreParams & CoreAppCallArgs) {
        promiseChain = promiseChain.then(() => client.createSafe(args, {...params, sendParams: {...params?.sendParams, skipSending: true, atc}}))
        resultMappers.push(undefined)
        return this
      },
      getVaultById(args: MethodArgs<'getVaultById(string)(address,string,uint64,uint64,uint64,bool)'>, params?: AppClientComposeCallCoreParams & CoreAppCallArgs) {
        promiseChain = promiseChain.then(() => client.getVaultById(args, {...params, sendParams: {...params?.sendParams, skipSending: true, atc}}))
        resultMappers.push(undefined)
        return this
      },
      clearState(args?: BareCallArgs & AppClientComposeCallCoreParams & CoreAppCallArgs) {
        promiseChain = promiseChain.then(() => client.clearState({...args, sendParams: {...args?.sendParams, skipSending: true, atc}}))
        resultMappers.push(undefined)
        return this
      },
      addTransaction(txn: TransactionWithSigner | TransactionToSign | Transaction | Promise<SendTransactionResult>, defaultSender?: SendTransactionFrom) {
        promiseChain = promiseChain.then(async () => atc.addTransaction(await algokit.getTransactionWithSigner(txn, defaultSender ?? client.sender)))
        return this
      },
      async atc() {
        await promiseChain
        return atc
      },
      async simulate(options?: SimulateOptions) {
        await promiseChain
        const result = await atc.simulate(client.algod, new modelsv2.SimulateRequest({ txnGroups: [], ...options }))
        return {
          ...result,
          returns: result.methodResults?.map((val, i) => resultMappers[i] !== undefined ? resultMappers[i]!(val.returnValue) : val.returnValue)
        }
      },
      async execute(sendParams?: AppClientComposeExecuteParams) {
        await promiseChain
        const result = await algokit.sendAtomicTransactionComposer({ atc, sendParams }, client.algod)
        return {
          ...result,
          returns: result.returns?.map((val, i) => resultMappers[i] !== undefined ? resultMappers[i]!(val.returnValue) : val.returnValue)
        }
      }
    } as unknown as LinkSafeComposer
  }
}
export type LinkSafeComposer<TReturns extends [...any[]] = []> = {
  /**
   * Calls the createSafe(string,string,uint64,uint64)(address,string,uint64,uint64,uint64,bool) ABI method.
   *
   * @param args The arguments for the contract call
   * @param params Any additional parameters for the call
   * @returns The typed transaction composer so you can fluently chain multiple calls or call execute to execute all queued up transactions
   */
  createSafe(args: MethodArgs<'createSafe(string,string,uint64,uint64)(address,string,uint64,uint64,uint64,bool)'>, params?: AppClientComposeCallCoreParams & CoreAppCallArgs): LinkSafeComposer<[...TReturns, MethodReturn<'createSafe(string,string,uint64,uint64)(address,string,uint64,uint64,uint64,bool)'>]>

  /**
   * Calls the getVaultById(string)(address,string,uint64,uint64,uint64,bool) ABI method.
   *
   * @param args The arguments for the contract call
   * @param params Any additional parameters for the call
   * @returns The typed transaction composer so you can fluently chain multiple calls or call execute to execute all queued up transactions
   */
  getVaultById(args: MethodArgs<'getVaultById(string)(address,string,uint64,uint64,uint64,bool)'>, params?: AppClientComposeCallCoreParams & CoreAppCallArgs): LinkSafeComposer<[...TReturns, MethodReturn<'getVaultById(string)(address,string,uint64,uint64,uint64,bool)'>]>

  /**
   * Makes a clear_state call to an existing instance of the LinkSafe smart contract.
   *
   * @param args The arguments for the bare call
   * @returns The typed transaction composer so you can fluently chain multiple calls or call execute to execute all queued up transactions
   */
  clearState(args?: BareCallArgs & AppClientComposeCallCoreParams & CoreAppCallArgs): LinkSafeComposer<[...TReturns, undefined]>

  /**
   * Adds a transaction to the composer
   *
   * @param txn One of: A TransactionWithSigner object (returned as is), a TransactionToSign object (signer is obtained from the signer property), a Transaction object (signer is extracted from the defaultSender parameter), an async SendTransactionResult returned by one of algokit utils helpers (signer is obtained from the defaultSender parameter)
   * @param defaultSender The default sender to be used to obtain a signer where the object provided to the transaction parameter does not include a signer.
   */
  addTransaction(txn: TransactionWithSigner | TransactionToSign | Transaction | Promise<SendTransactionResult>, defaultSender?: SendTransactionFrom): LinkSafeComposer<TReturns>
  /**
   * Returns the underlying AtomicTransactionComposer instance
   */
  atc(): Promise<AtomicTransactionComposer>
  /**
   * Simulates the transaction group and returns the result
   */
  simulate(options?: SimulateOptions): Promise<LinkSafeComposerSimulateResult<TReturns>>
  /**
   * Executes the transaction group and returns the results
   */
  execute(sendParams?: AppClientComposeExecuteParams): Promise<LinkSafeComposerResults<TReturns>>
}
export type SimulateOptions = Omit<ConstructorParameters<typeof modelsv2.SimulateRequest>[0], 'txnGroups'>
export type LinkSafeComposerSimulateResult<TReturns extends [...any[]]> = {
  returns: TReturns
  methodResults: ABIResult[]
  simulateResponse: modelsv2.SimulateResponse
}
export type LinkSafeComposerResults<TReturns extends [...any[]]> = {
  returns: TReturns
  groupId: string
  txIds: string[]
  transactions: Transaction[]
}
