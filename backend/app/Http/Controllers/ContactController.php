<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Contact;
use Illuminate\Support\Facades\Auth;

class ContactController extends Controller
{
    public function getContacts() {
        $user_id = Auth::id();
        // return $user_id;
        try {
            $contacts = Contact::where('user_id', $user_id)->get();
        } catch (Exception $e) {
            return response()->json([
                'status' => 'error',
                'message' => 'No Contacts exist',
            ], 404);
        }

        return response()->json([
            'status' => 'success',
            'contacts' => $contacts,
        ]);
    }

    public function addContact(Request $request) {
        $request->validate([
            'name' => 'required|string|max:255',
            'phone_number' => 'required|string|max:255',
            'longitude' => 'required|numeric',
            'latitude' => 'required|numeric',
        ]);

        $user_id = Auth::id();

        $contact = new Contact();
        
        $contact->name = $request->name;
        $contact->phone_number = $request->phone_number;
        $contact->longitude = $request->longitude;
        $contact->latitude = $request->latitude;
        $contact->user_id = $user_id;

        $contact->save();

        return response()->json([
            'status' => 'success',
            'contact' => $contact,
        ]);
    }

    public function deleteContact($id) {
        $user_id = Auth::id();

        $contact = Contact::where('user_id', $user_id)->where('id', $id)->first();

        if (!$contact) {
            return response()->json([
                'status' => 'error',
                'message' => 'Contact not found',
            ], 404);
        }

        $contact->delete();

        return response()->json([
            'status' => 'success',
            'message' => 'Contact deleted',
        ]);
    }

    public function deleteAllContacts() {
        $user_id = Auth::id();

        $contacts = Contact::where('user_id', $user_id)->get();

        if (!$contacts) {
            return response()->json([
                'status' => 'error',
                'message' => 'Contacts not found',
            ], 404);
        }

        $contacts->delete();

        return response()->json([
            'status' => 'success',
            'message' => 'Contacts deleted',
        ]);
    }

}
